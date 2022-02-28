import { getInObj } from "@open-tech-world/es-utils";
import {
  ChangeEvent,
  createElement,
  useContext,
  useEffect,
  useMemo,
} from "react";
import { FormContext, FormContextVal } from "./formContext";

interface Props {
  name: string;
  label: string;
}

export default function CheckboxField(props: Props): JSX.Element {
  const { name, label, ...otherProps } = props;
  const { state, dispatch } = useContext<FormContextVal>(FormContext);
  const value: boolean = (getInObj(state.values, name) as boolean) || false;
  // @ts-ignore
  const id = crypto.randomUUID();

  useEffect(() => {
    dispatch({ type: "REGISTER_FIELD", payload: { name: name, value } });
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "UPDATE_FIELD_VALUE",
      payload: { name, value: e.target.checked },
    });
  };

  return useMemo(
    () => (
      <>
        <input
          type="checkbox"
          id={id}
          name={name}
          checked={value}
          onChange={handleChange}
          {...otherProps}
        />
        <label htmlFor={id}>{label}</label>
      </>
    ),
    [value]
  );
}
