import { cloneObj, setInObj } from '@open-tech-world/es-utils';
import { ObjType } from '@open-tech-world/es-utils/lib/ObjType';
import { FormEvent, useEffect, useReducer } from 'react';
import {
  DispatchAction,
  FormContext,
  FormContextVal,
  FormState,
} from './formContext';

function reducer(state: FormState, action: DispatchAction): FormState {
  switch (action.type) {
    case 'REGISTER_FIELD':
      return {
        ...state,
        values: setInObj(
          cloneObj(state.values) as ObjType,
          (action.payload as ObjType).name as string,
          (action.payload as ObjType).value
        ),
      };
    case 'SET_FIELD_VALUE':
      return {
        ...state,
        values: setInObj(
          cloneObj(state.values) as ObjType,
          (action.payload as ObjType).name as string,
          (action.payload as ObjType).value
        ),
      };
    case 'SET_ERRORS':
      return {
        ...state,
        errors: cloneObj(action.payload) as ObjType,
      };
    default:
      throw new Error();
  }
}

interface Props {
  initialValues?: Record<string, unknown>;
  onSubmit: (values: Record<string, unknown>) => void;
  validate?: (values: Record<string, unknown>) => Record<string, unknown>;
  children: React.ReactNode;
}

export default function Form(props: Props) {
  const { initialValues, children, validate, onSubmit } = props;
  const clonedInitialValues = cloneObj(initialValues) as ObjType;
  const initialFormState: FormState = {
    values: clonedInitialValues || {},
    errors: {},
    initialValues: clonedInitialValues,
  };
  const [state, dispatch] = useReducer(reducer, initialFormState);
  const formContextVal: FormContextVal = { state, dispatch };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (validate) {
      const errors = await validate(state.values);
      if (errors && Object.keys(errors).length > 0) {
        dispatch({ type: 'SET_ERRORS', payload: errors });
        return;
      } else {
        dispatch({ type: 'SET_ERRORS', payload: {} });
      }
    }

    if (onSubmit) {
      onSubmit(state.values);
    }
  };

  return (
    <FormContext.Provider value={formContextVal}>
      <form role="form" onSubmit={handleSubmit}>
        {children}
      </form>
    </FormContext.Provider>
  );
}
