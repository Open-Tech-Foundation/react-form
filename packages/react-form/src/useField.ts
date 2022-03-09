import { getInObj } from '@open-tech-world/es-utils';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { FormContext, FormContextVal } from './formContext';

export default function useField(name: string, multiple?: boolean) {
  const { state, dispatch } = useContext<FormContextVal>(FormContext);
  const initialFormStateValue = getInObj(state.values, name);
  let initialValue: unknown = multiple ? [] : '';
  if (initialFormStateValue) {
    if (multiple && !Array.isArray(initialFormStateValue)) {
      initialValue = [initialFormStateValue];
    } else {
      initialValue = initialFormStateValue;
    }
  }
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    dispatch({ type: 'REGISTER_FIELD', payload: { name: name, value } });
  }, []);

  const getValue = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    if (e.currentTarget.type === 'number') {
      return parseInt(e.currentTarget.value);
    }

    if (e.currentTarget.type === 'file') {
      return (e.currentTarget as HTMLInputElement).files;
    }

    return e.currentTarget.value;
  };

  const setFieldValue = (v: unknown) => {
    setValue(v);
    dispatch({
      type: 'SET_FIELD_VALUE',
      payload: {
        name,
        value: v,
      },
    });
  };

  const onChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    console.log('Use field called');

    setValue(e.currentTarget.value);
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
    setFieldValue,
  };
}
