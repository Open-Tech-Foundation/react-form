import { cloneObj, setInObj } from "@open-tech-world/es-utils";
import { ObjType } from "@open-tech-world/es-utils/lib/ObjType";
import { FormEvent, useReducer } from "react";
import { FormContext, FormContextVal } from "./formContext";

function reducer(state, action) {
  switch (action.type) {
    case "REGISTER_FIELD":
      return {
        ...state,
        values: setInObj(
          cloneObj(state.values) as ObjType,
          action.payload.name,
          action.payload.value
        ),
      };
    case "UPDATE_FIELD_VALUE":
      return {
        ...state,
        values: setInObj(
          cloneObj(state.values) as ObjType,
          action.payload.name,
          action.payload.value
        ),
      };
    case "SET_ERRORS":
      return {
        ...state,
        errors: cloneObj(action.payload),
      };
    default:
      throw new Error();
  }
}

interface Props {
  initialState: Record<string, unknown>;
  onSubmit: (values: Record<string, unknown>) => void;
  validate?: (values: Record<string, unknown>) => Record<string, unknown>;
  children: JSX.Element;
}

export default function Form(props: Props) {
  const { initialState, children, validate, onSubmit } = props;
  const clonedInitialState = cloneObj(initialState);
  const [state, dispatch] = useReducer(reducer, {
    values: clonedInitialState || {},
    errors: {},
    initialState: clonedInitialState,
  });
  const formContextVal: FormContextVal = { state, dispatch };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (validate) {
      const errors = await validate(state.values);
      if (errors && Object.keys(errors).length > 0) {
        dispatch({ type: "SET_ERRORS", payload: errors });
        return;
      }
    }
    if (onSubmit) {
      dispatch({ type: "SET_ERRORS", payload: {} });
      onSubmit(state.values);
    }
  };

  return (
    <FormContext.Provider value={formContextVal}>
      <form onSubmit={handleSubmit}>{children}</form>
    </FormContext.Provider>
  );
}
