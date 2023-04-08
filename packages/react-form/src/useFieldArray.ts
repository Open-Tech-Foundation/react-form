import { useContext } from 'react';
import { getInObj, setInObj } from '@opentf/utils';
import { FORM_CONTEXT } from './formContext';
import type { FormCtxVal, FormState, Values } from './types';

export default function useFieldArray(name: string) {
  const { useFormState, setFormState } = useContext(
    FORM_CONTEXT
  ) as FormCtxVal<Values>;

  const value = useFormState(
    (s) => getInObj(s.values as object, name) as unknown[]
  );

  const fields: string[] = (value as unknown[]).map(
    (_, i: number) => `${name}[${i}]`
  );

  const push = (obj: unknown) => {
    setFormState((s) => ({
      values: setInObj(s.values as object, name, [...value, obj]),
    }));
  };

  const remove = (index: number) => {
    setFormState((s) => {
      const obj: Partial<FormState<Values>> = {
        values: setInObj(
          s.values as object,
          name,
          value.filter((_, i) => index !== i)
        ),
      };

      if (getInObj(s.visited, name)) {
        obj['visited'] = setInObj(
          s.visited as object,
          name,
          (getInObj(s.visited as object, name) as unknown[]).filter(
            (_, i) => index !== i
          )
        );
      }

      if (getInObj(s.errors, name)) {
        obj['errors'] = setInObj(
          s.errors as object,
          name,
          (getInObj(s.errors as object, name) as unknown[]).filter(
            (_, i) => index !== i
          )
        );
      }

      return obj;
    });
  };

  return { fields, push, remove };
}
