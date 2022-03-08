import { getInObj } from '@open-tech-world/es-utils';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { FormContext, FormContextVal } from './formContext';

export default function useField(name: string) {
  const { state, dispatch } = useContext<FormContextVal>(FormContext);
  const fieldValue = (getInObj(state.values, name) as string | number) || '';
  const [value, setValue] = useState(fieldValue)

  useEffect(() => {
    dispatch({ type: 'REGISTER_FIELD', payload: { name: name, value } });
  }, []);

  const getValue = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.currentTarget.type === 'number') {
      return parseInt(e.currentTarget.value);
    }

    if (e.currentTarget.type === 'file') {
      return e.currentTarget.files;
    }

    return e.currentTarget.value;
  };

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.currentTarget.value)
    dispatch({
      type: 'SET_FIELD_VALUE',
      payload: {
        name,
        value: getValue(e),
      },
    });
  };

  return {
    field: {
      value,
      onChange,
    },
    error: getInObj(state.errors, name),
  };
}
