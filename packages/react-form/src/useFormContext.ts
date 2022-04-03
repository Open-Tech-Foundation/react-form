import { useContext } from 'react';
import { FormContext } from './formContext';
import { ContextVal } from './types';

export default function useForm() {
  const { useFormState }: ContextVal = useContext(FormContext) as ContextVal;
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
