import { useContext } from "react";
import { FormContext, FormContextVal } from "./formContext";

export default function useForm() {
  const formContextVal: FormContextVal = useContext(FormContext);

  return {
    formValues: formContextVal.state,
  };
}
