import { useContext } from 'react';
import { getInObj, setInObj } from '@open-tech-world/js-utils';
import { FormContext } from './formContext';
import { ContextVal, FormState } from './types';

export default function useFieldArray(name: string) {
  const { useFormState } = useContext(FormContext) as ContextVal;

  const [value, setState] = useFormState(
    (s) => getInObj(s.values as object, name) as unknown[],
    { set: true }
  );

  const fields: string[] = (value as unknown[]).map(
    (_, i: number) => `${name}[${i}]`
  );

  const push = (obj: unknown) => {
    setState((s) => ({
      values: setInObj(s.values as object, name, [...value, obj]),
    }));
  };

  const remove = (index: number) => {
    setState((s) => {
      const obj: Partial<FormState> = {
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
