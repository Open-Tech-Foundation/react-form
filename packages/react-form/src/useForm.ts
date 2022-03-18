import { getInObj } from '@open-tech-world/js-utils';
import { useContext } from 'react';
import { FormContext, FormContextVal } from './formContext';

export default function useForm() {
  const { state }: FormContextVal = useContext(FormContext);

  return {
    values: state.values,
    errors: state.errors,
    getFieldError: (path: string) => {
      const isVisited = getInObj(state.visited, path) as boolean
      if (isVisited || path.startsWith('_')) {
        return getInObj(state.errors, path);
      }
    },
  };
}
