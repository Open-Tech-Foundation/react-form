import { FormEvent, useReducer } from "react";
import { FormContext, FormContextVal } from "./formContext";

function reducer(state, action) {
  switch (action.type) {
    case "REGISTER_FIELD":
      return { ...state, [action.payload.name]: action.payload.value };
    case "UPDATE_FIELD_VALUE":
      return { ...state, [action.payload.name]: action.payload.value };
    default:
      throw new Error();
  }
}

interface Props {
  initialState: Record<string, unknown>;
  children: JSX.Element;
}

export default function Form({ initialState, children }: Props) {
  const [state, dispatch] = useReducer(reducer, initialState || {});
  const formContextVal: FormContextVal = { state, dispatch };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <FormContext.Provider value={formContextVal}>
      <form onSubmit={handleSubmit}>{children}</form>
    </FormContext.Provider>
  );
}
