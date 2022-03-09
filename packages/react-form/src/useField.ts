import { getInObj } from '@open-tech-world/es-utils';
import { ChangeEvent, useContext, useEffect } from 'react';
import { FormContext, FormContextVal } from './formContext';

interface OptionsProps {
  multiple?: boolean;
}

export default function useField(name: string, options?: Partial<OptionsProps>) {
  const { state, dispatch } = useContext<FormContextVal>(FormContext);
  const initialFormStateValue = getInObj(state.fieldValues, name);
  let value: unknown = options?.multiple ? [] : '';
  if (initialFormStateValue) {
    if (options?.multiple && !Array.isArray(initialFormStateValue)) {
      value = [initialFormStateValue];
    } else {
      value = initialFormStateValue;
    }
  }

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

  const setValue = (v: unknown) => {
    dispatch({
      type: 'SET_VALUES',
      payload: {
        name,
        value: v,
      },
    });
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
    dispatch({
      type: 'SET_VALUES',
      payload: {
        name,
        value: getValue(e),
      },
    });
    dispatch({
      type: 'SET_FIELD_VALUE',
      payload: {
        name,
        value: e.currentTarget.value,
      },
    });
  };

  return {
    field: {
      value,
      onChange,
    },
    error: getInObj(state.errors, name),
    setValue,
  };
}
