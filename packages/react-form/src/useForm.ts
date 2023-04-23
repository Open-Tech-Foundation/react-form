import { cloneObj } from '@opentf/utils';
import { create } from '@opentf/react-state';
import { FormEvent, startTransition, useMemo, useRef } from 'react';
import cloneObjWithDefaultVal from './cloneObjWithDefaultVal';
import type {
  FormActions,
  FormHookRef,
  FormState,
  UseFormProps,
} from './types';

export default function useForm<Values>(props: UseFormProps<Values>) {
  const { initialValues = {}, onSubmit, validate } = props;
  const stateRef = useRef<FormHookRef<Values>>();

  useMemo(() => {
    if (!stateRef.current) {
      const [hook, setState, api] = create<FormState<Values>>({
        initialValues: cloneObj(initialValues),
        values: cloneObj(initialValues),
        errors: {},
        visited: {},
      });
      stateRef.current = {
        hook,
        setState,
        api,
      };
    }
  }, [initialValues]);

  const runValidations = async () => {
    if (validate) {
      const errors = await validate(
        stateRef.current?.api.get().values as unknown as Values
      );
      if (errors && Object.keys(errors).length > 0) {
        startTransition(() => {
          stateRef.current?.api.set({ errors: errors });
        });
        return false;
      }
      startTransition(() => {
        stateRef.current?.api.set({ errors: {} });
      });
    }

    return true;
  };

  const reset = (values?: Values) => {
    stateRef.current?.api.set((s) => ({
      initialValues: values ? cloneObj(values) : s.initialValues,
      values: cloneObj(values || s.initialValues) as Values,
      errors: {},
      visited: {},
    }));
    // stateRef.current??.destroy();
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    stateRef.current?.api.set((s) => ({
      visited: cloneObjWithDefaultVal(s.values as unknown as object, true),
    }));
    const validationResult = await runValidations();
    if (validationResult && onSubmit) {
      const formActions: FormActions<Values> = {
        reset,
      };
      onSubmit(
        stateRef.current?.api.get().values as unknown as Values,
        formActions
      );
    }
  };

  return {
    useFormState: stateRef.current?.hook,
    setFormState: stateRef.current?.setState,
    runValidations,
    handleSubmit,
    actions: {
      reset,
    },
  };
}
