import { createContext } from "react";

export type FormDispatch = { type: string; payload: Record<string, unknown> };

export interface FormState {
  values: Record<string, unknown>;
  errors: Record<string, unknown>;
}

export interface FormContextVal {
  state: FormState;
  dispatch: React.Dispatch<FormDispatch>;
}

export const FormContext = createContext<FormContextVal>({
  state: { values: {}, errors: {} },
  dispatch: null,
});
