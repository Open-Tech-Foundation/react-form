import { createContext } from "react";

export type FormDispatch = { type: string; payload: Record<string, unknown> };

export interface FormContextVal {
  state: Record<string, unknown>;
  dispatch: React.Dispatch<FormDispatch>;
}

export const FormContext = createContext<FormContextVal>({
  state: {},
  dispatch: null,
});
