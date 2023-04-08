import { getInObj } from '@opentf/utils';
import { useContext } from 'react';
import { FORM_CONTEXT } from './formContext';
import type { FormCtxVal, Values } from './types';

export default function useFieldError(name: string) {
  const { useFormState } = useContext(FORM_CONTEXT) as FormCtxVal<Values>;
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

  return;
}
