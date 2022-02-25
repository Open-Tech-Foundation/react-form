import { getInObj } from "@open-tech-world/es-utils";
import { useContext } from "react";
import { FormContext, FormContextVal } from "./formContext";

export default function useField() {
  const formContextVal: FormContextVal = useContext(FormContext);

  return {
    error: (path) => {
      return getInObj(formContextVal.state.errors, path);
    },
  };
}
