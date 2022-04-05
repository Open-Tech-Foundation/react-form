import { getInObj } from '@open-tech-world/js-utils';
import { useContext } from 'react';
import { FORM_CONTEXT } from './formContext';
import { ContextVal } from './types';

export default function useFieldError(name: string): string | undefined {
  const { useFormState }: ContextVal = useContext(FORM_CONTEXT) as ContextVal;
  const { error, isVisited } = useFormState(
    (s) => ({
      isVisited: getInObj(s.visited, name),
      error: getInObj(s.errors as object, name) as string | undefined,
    }),
    { shallow: true }
  );

  if (isVisited || name.startsWith('_')) {
    return error;
  }
}
