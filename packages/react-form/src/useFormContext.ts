import { useContext } from 'react';
import { FORM_CONTEXT } from './formContext';
import { type ContextVal, type FormContext } from './types';

export default function useFormContext(): FormContext {
  const { useFormState }: ContextVal = useContext(FORM_CONTEXT) as ContextVal;
  const { values, errors, visited } = useFormState((s) => ({
    values: s.values,
    errors: s.errors,
    visited: s.visited,
  }));

  return {
    values: values,
    errors: errors,
    visited: visited,
  };
}
