import { useContext } from "react";
import { FormContext, FormContextVal } from "./formContext";

export default function useForm() {
  const formContextVal: FormContextVal = useContext(FormContext);

  return {
    values: formContextVal.state.values,
    errors: formContextVal.state.errors,
  };
}
