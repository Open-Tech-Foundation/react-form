import { cloneObj, setInObj } from '@open-tech-world/es-utils';
import { ObjType } from '@open-tech-world/es-utils/lib/ObjType';
import { FormEvent, useReducer } from 'react';
import {
  DispatchAction,
  FormContext,
  FormContextVal,
  FormState,
} from './formContext';

function cloneObjWithDefaultVal(obj: unknown, defVal: unknown): unknown {
  let cloneObj;
  if (Array.isArray(obj)) {
    cloneObj = [];
    for (const v of obj) {
      if (typeof v !== 'object') {
        cloneObj.push(defVal);
      } else {
        cloneObj.push(cloneObjWithDefaultVal(v, defVal));
      }
    }
    return cloneObj;
  }
  cloneObj = {} as ObjType;
  for (const key in obj as ObjType) {
    if (typeof (obj as ObjType)[key] !== 'object') {
      cloneObj[key] = defVal;
    } else {
      cloneObj[key] = cloneObjWithDefaultVal((obj as ObjType)[key], defVal);
    }
  }
  return cloneObj;
}

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
        fieldValues: setInObj(
          cloneObj(state.fieldValues) as ObjType,
          (action.payload as ObjType).name as string,
          (action.payload as ObjType).value
        ),
      };
    case 'SET_FIELD_VALUE':
      return {
        ...state,
        fieldValues: setInObj(
          cloneObj(state.fieldValues) as ObjType,
          (action.payload as ObjType).name as string,
          (action.payload as ObjType).value
        ),
      };
    case 'SET_VALUES':
      return {
        ...state,
        values: setInObj(
          cloneObj(state.values) as ObjType,
          (action.payload as ObjType).name as string,
          (action.payload as ObjType).value
        ),
      };
    case 'SET_VISITED':
      return {
        ...state,
        visited: setInObj(
          cloneObj(state.visited) as ObjType,
          (action.payload as ObjType).name as string,
          (action.payload as ObjType).value
        ),
      };
    case 'SET_ALL_VISITED':
      return {
        ...state,
        visited: cloneObjWithDefaultVal(state.fieldValues, true) as ObjType,
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
  initialValues?: ObjType;
  onSubmit: (values: ObjType) => void;
  validate?: (values: ObjType) => ObjType;
  children: React.ReactNode;
}

export default function Form(props: Props) {
  const { initialValues, children, validate, onSubmit } = props;
  const clonedInitialValues = cloneObj(initialValues) as ObjType;

  const runValidations = async () => {
    if (validate) {
      const errors = await validate(state.values);
      if (errors && Object.keys(errors).length > 0) {
        dispatch({ type: 'SET_ERRORS', payload: errors });
        return false;
      }
      dispatch({ type: 'SET_ERRORS', payload: {} });
    }

    return true;
  };

  const initialFormState: FormState = {
    values: clonedInitialValues || {},
    fieldValues: clonedInitialValues || {},
    errors: {},
    initialValues: clonedInitialValues,
    visited: {},
  };
  const [state, dispatch] = useReducer(reducer, initialFormState);
  const formContextVal: FormContextVal = { state, dispatch, runValidations };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    dispatch({ type: 'SET_ALL_VISITED', payload: null });
    const validationResult = await runValidations();
    if (validationResult && onSubmit) {
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
