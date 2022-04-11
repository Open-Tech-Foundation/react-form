import { useContext } from 'react';
import { getInObj, setInObj } from '@open-tech-world/js-utils';
import { FORM_CONTEXT } from './formContext';
import { FormContextType, FormState, Values } from './types';
import startTransition from './startTransition';

export default function useFieldArray(name: string) {
  const { useFormState } = useContext(FORM_CONTEXT) as FormContextType<Values>;

  const [value, setState] = useFormState(
    (s) => getInObj(s.values as object, name) as unknown[],
    { set: true }
  );

  const fields: string[] = (value as unknown[]).map(
    (_, i: number) => `${name}[${i}]`
  );

  const push = (obj: unknown) => {
    startTransition(() => {
      setState((s) => ({
        values: setInObj(s.values as object, name, [...value, obj]),
      }));
    });
  };

  const remove = (index: number) => {
    startTransition(() => {
      setState((s) => {
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
    });
  };

  return { fields, push, remove };
}
