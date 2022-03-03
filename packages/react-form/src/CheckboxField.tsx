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
  const sValue: boolean | string[] = getInObj(state.values, name) as
    | boolean
    | string[];

  // @ts-ignore
  const id = crypto.randomUUID();

  useEffect(() => {
    const v = value ? sValue || [] : sValue || false;
    dispatch({ type: "REGISTER_FIELD", payload: { name: name, value: v } });
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let v: boolean | string[];
    if (value) {
      v = e.target.checked
        ? [...(sValue as string[]), value]
        : (sValue as string[]).filter((i) => i !== value);
    } else {
      v = e.target.checked;
    }

    dispatch({
      type: "UPDATE_FIELD_VALUE",
      payload: { name, value: v },
    });
  };

  const isChecked = () => {
    if (!sValue) return false;
    if (typeof sValue === "boolean") return sValue;
    return sValue.includes(value);
  };

  return useMemo(
    () => (
      <>
        <input
          type="checkbox"
          id={id}
          name={name}
          checked={isChecked()}
          onChange={handleChange}
          {...otherProps}
        />
        <label htmlFor={id}>{label}</label>
      </>
    ),
    [sValue]
  );
}
