import { getInObj } from '@open-tech-world/js-utils';
import { useContext } from 'react';
import { FormContext } from './formContext';
import { ContextVal } from './types';

export default function useForm() {
  const { useFormState }: ContextVal = useContext(FormContext) as ContextVal;
  const state = useFormState((s) => s);

  return {
    values: state.values,
    errors: state.errors,
    visited: state.visited,
    getFieldError: (path: string): string | undefined => {
      const isVisited = getInObj(state.visited, path) as boolean;
      if (isVisited || path.startsWith('_')) {
        return getInObj(state.errors as object, path) as string | undefined;
      }
    },
  };
}
