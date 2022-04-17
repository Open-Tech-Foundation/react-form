import { cloneObj } from '@open-tech-world/js-utils';
import { createState, Hook, StateAPI } from '@open-tech-world/react-state';
import { FormEvent, startTransition, useMemo, useRef } from 'react';
import cloneObjWithDefaultVal from './cloneObjWithDefaultVal';
import { FormActions, FormState, UseFormProps } from './types';

export default function useForm<Values>(props: UseFormProps<Values>) {
  const { initialValues = {}, onSubmit, validate } = props;
  const useFormState = useRef<Hook<FormState<Values>> | null>(null);
  const stateAPI = useRef<StateAPI<FormState<Values>> | null>(null);

  useMemo(() => {
    if (useFormState.current === null) {
      const [hook, api] = createState<FormState<Values>>(
        {
          initialValues: cloneObj(initialValues),
          values: cloneObj(initialValues),
          errors: {},
          visited: {},
        },
        true
      );
      useFormState.current = hook;
      stateAPI.current = api as StateAPI<FormState<Values>>;
    }
  }, [initialValues]);

  const runValidations = async () => {
    if (validate) {
      const errors = await validate(
        stateAPI.current?.getState().values as unknown as Values
      );
      if (errors && Object.keys(errors).length > 0) {
        startTransition(() => {
          stateAPI.current?.setState({ errors: errors });
        });
        return false;
      }
      startTransition(() => {
        stateAPI.current?.setState({ errors: {} });
      });
    }

    return true;
  };

  const reset = (values?: Values) => {
    stateAPI.current?.setState((s) => ({
      initialValues: values ? cloneObj(values) : s.initialValues,
      values: cloneObj(values || s.initialValues) as Values,
      errors: {},
      visited: {},
    }));
    // stateAPI.current?.destroy();
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    startTransition(() => {
      stateAPI.current?.setState({
        visited: cloneObjWithDefaultVal(
          stateAPI.current.getState().values as unknown as object,
          true
        ),
      });
    });
    const validationResult = await runValidations();
    if (validationResult && onSubmit) {
      const formActions: FormActions<Values> = {
        reset,
      };
      onSubmit(
        stateAPI.current?.getState().values as unknown as Values,
        formActions
      );
    }
  };

  return {
    useFormState: useFormState.current as Hook<FormState<Values>>,
    runValidations,
    handleSubmit,
  };
}
