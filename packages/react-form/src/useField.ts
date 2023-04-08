import { getInObj, setInObj } from '@opentf/utils';
import { useContext, useEffect, useState } from 'react';
import { FORM_CONTEXT } from './formContext';
import type { FormCtxVal, Values } from './types';
import useFieldError from './useFieldError';

export default function useField(name: string) {
  const [fv, setFV] = useState<unknown>('');
  const { useFormState, setFormState, runValidations } = useContext(
    FORM_CONTEXT
  ) as FormCtxVal<Values>;
  const value = useFormState((s) => getInObj(s.values as object, name)) || '';

  useEffect(() => {
    setFV(value);
  }, [value]);

  const error = useFieldError(name);

  const setValue = (v: unknown) => {
    setFormState((s) => ({
      values: setInObj(s.values as object, name, v),
    }));
  };

  const onChange = (value: unknown) => {
    setValue(value);
    setFV(value);
  };

  const onBlur = () => {
    setFormState((s) => ({
      visited: setInObj(s.visited as object, name, true),
    }));
    setTimeout(() => {
      runValidations();
    }, 250);
  };

  return {
    field: {
      value: fv,
      onChange,
      onBlur,
    },
    error,
    setValue,
  };
}
