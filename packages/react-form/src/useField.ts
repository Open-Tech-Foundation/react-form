import { getInObj } from '@open-tech-world/es-utils';
import { ChangeEvent, useContext, useEffect } from 'react';
import { FormContext, FormContextVal } from './formContext';

interface OptionsProps {
  multiple?: boolean;
}

export default function useField(
  name: string,
  options?: Partial<OptionsProps>
) {
  const { state, dispatch, runValidations } =
    useContext<FormContextVal>(FormContext);
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
    const target = e.currentTarget || e.target
    
    if (target.type === 'number') {
      return parseInt(target.value);
    }

    if (target.type === 'file') {
      return (target as HTMLInputElement).files;
    }

    return target.value;
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
    const target = e.currentTarget || e.target

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
        value: target.value,
      },
    });
  };

  const onBlur = () => {
    setTimeout(() => {
      dispatch({
        type: 'SET_VISITED',
        payload: { name, value: true },
      });
      runValidations();
    }, 300);
  };

  const getFieldError = () => {
    if (getInObj(state.visited, name) as boolean) {
      return getInObj(state.errors, name);
    }
  };

  return {
    field: {
      value,
      onChange,
      onBlur,
    },
    error: getFieldError(),
    setValue,
  };
}
