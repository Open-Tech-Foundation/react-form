import { getInObj, setInObj } from '@open-tech-world/js-utils';
import { ChangeEvent, useContext } from 'react';
import { FORM_CONTEXT } from './formContext';
import startTransition from './startTransition';
import { ContextVal } from './types';
import useFieldError from './useFieldError';

export default function useField(name: string) {
  const { useFormState, runValidations } = useContext(
    FORM_CONTEXT
  ) as ContextVal;

  const [value, setState] = useFormState(
    (s) => getInObj(s.values as object, name),
    {
      set: true,
    }
  );
  const error = useFieldError(name);

  const getValue = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = e.currentTarget || e.target;

    if (target.type === 'number') {
      return parseInt(target.value);
    }

    if (target.type === 'file') {
      return (target as HTMLInputElement).files;
    }

    return target.value;
  };

  const setValue = (v: unknown) => {
    setState((s) => ({
      values: setInObj(s.values as object, name, v),
    }));
  };

  const onChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setValue(getValue(e));
  };

  const onBlur = () => {
    startTransition(() => {
      setState((s) => ({ visited: setInObj(s.visited as object, name, true) }));
    });
    setTimeout(() => {
      runValidations();
    }, 250);
  };

  return {
    field: {
      value,
      onChange,
      onBlur,
    },
    error,
    setValue,
  };
}
