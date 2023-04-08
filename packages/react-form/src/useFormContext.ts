import { useContext } from 'react';
import { FORM_CONTEXT } from './formContext';
import type { FormCtxVal, FormCtx, Values } from './types';

export default function useFormContext() {
  const { useFormState } = useContext(FORM_CONTEXT) as FormCtxVal<Values>;
  const { values, errors, visited } = useFormState((s) => ({
    values: s.values,
    errors: s.errors,
    visited: s.visited,
  }));

  return {
    values: values,
    errors: errors,
    visited: visited,
  } as FormCtx<Values>;
}
