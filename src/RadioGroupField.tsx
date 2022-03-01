import { getInObj } from "@open-tech-world/es-utils";
import { ChangeEvent, useContext, useEffect, useMemo } from "react";
import { FormContext, FormContextVal } from "./formContext";

interface Props {
  name: string;
  label: string;
  value?: string;
}

export default function CheckboxField(props: Props): JSX.Element {
  const { name, label, value, ...otherProps } = props;
  const { state, dispatch } = useContext<FormContextVal>(FormContext);
  const sValue: string = getInObj(state.values, name) as string;

  // @ts-ignore
  const id = crypto.randomUUID();

  useEffect(() => {
    dispatch({
      type: "REGISTER_FIELD",
      payload: { name: name, value: sValue || "" },
    });
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "UPDATE_FIELD_VALUE",
      payload: { name, value },
    });
  };

  return useMemo(
    () => (
      <>
        <input
          type="radio"
          id={id}
          name={name}
          checked={sValue === value}
          onChange={handleChange}
          {...otherProps}
        />
        <label htmlFor={id}>{label}</label>
      </>
    ),
    [sValue]
  );
}
