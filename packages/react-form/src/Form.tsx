import { cloneObj } from '@open-tech-world/js-utils';
import { createState } from '@open-tech-world/react-state';
import { FormEvent, startTransition } from 'react';
import cloneObjWithDefaultVal from './cloneObjWithDefaultVal';
import { FormContext } from './formContext';
import { ContextVal, FormState, InitialValues, Props } from './types';

export default function Form<Values = InitialValues>(props: Props<Values>) {
  const { initialValues, children, validate, onSubmit } = props;

  const formState: FormState = {
    values: cloneObj(initialValues) || {},
    errors: {},
    visited: {},
  };

  const useFormState = createState<FormState>(formState);

  const setState = useFormState(null, { set: true });

  const runValidations = async () => {
    if (validate) {
      const errors = await validate(formState.values as Values);
      if (errors && Object.keys(errors).length > 0) {
        startTransition(() => {
          setState({ errors: errors });
        });
        return false;
      }
      startTransition(() => {
        setState({ errors: {} });
      });
    }

    return true;
  };

  const contextVal: ContextVal = {
    useFormState: useFormState,
    runValidations: runValidations,
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    startTransition(() => {
      setState((s) => ({
        visited: cloneObjWithDefaultVal(s.values as object, true),
      }));
    });
    const validationResult = await runValidations();
    if (validationResult && onSubmit) {
      onSubmit(formState.values as Values);
    }
  };

  return (
    <FormContext.Provider value={contextVal}>
      <form role="form" onSubmit={handleSubmit}>
        {children}
      </form>
    </FormContext.Provider>
  );
}
