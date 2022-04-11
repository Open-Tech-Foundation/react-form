import { useContext } from 'react';
import { FORM_CONTEXT } from './formContext';
import { FormContextType, Values, type FormContext } from './types';

export default function useFormContext() {
  const { useFormState } = useContext(FORM_CONTEXT) as FormContextType<Values>;
  const { values, errors, visited } = useFormState((s) => ({
    values: s.values,
    errors: s.errors,
    visited: s.visited,
  }));

  return {
    values: values,
    errors: errors,
    visited: visited,
  } as FormContext<Values>;
}
