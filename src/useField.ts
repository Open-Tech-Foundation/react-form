import { getInObj } from "@open-tech-world/es-utils";
import { ChangeEvent, useContext, useEffect } from "react";
import { FormContext, FormContextVal } from "./formContext";

export default function useField(name: string) {
  const { state, dispatch } = useContext<FormContextVal>(FormContext);
  const value = (getInObj(state.values, name) as string | number) || "";

  useEffect(() => {
    dispatch({ type: "REGISTER_FIELD", payload: { name: name, value } });
  }, []);

  const onChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch({
      type: "UPDATE_FIELD_VALUE",
      payload: { name, value: e.currentTarget.value },
    });
  };

  return {
    field: {
      value,
      onChange,
    },
    error: getInObj(state.errors, name),
  };
}
