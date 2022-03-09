import { createContext } from 'react';
import { ObjType } from './ObjType';

export type DispatchAction = {
  type: string;
  payload: unknown;
};

export interface FormState {
  values: ObjType;
  fieldValues: ObjType;
  errors: ObjType;
  initialValues: ObjType;
}

export interface FormContextVal {
  state: FormState;
  dispatch: React.Dispatch<DispatchAction>;
}

export const FormContext = createContext<FormContextVal>({
  state: { values: {}, fieldValues: {}, errors: {}, initialValues: {} },
  dispatch: () => {},
});
