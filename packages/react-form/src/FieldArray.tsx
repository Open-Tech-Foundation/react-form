import { useContext, useEffect, useMemo } from "react";
import { getInObj } from "@open-tech-world/es-utils";
import { FormContext, FormContextVal } from "./formContext";

interface ComponentProps {
  fields: string[];
  push: (obj: unknown) => void;
  remove: (index: number) => void;
}

interface Props {
  name: string;
  component: (props: ComponentProps) => React.ReactNode;
}

export default function FieldArray(props: Props) {
  const { name, component } = props;
  const { state, dispatch } = useContext<FormContextVal>(FormContext);
  const value = (getInObj(state.values, name) as unknown[]) || [];

  const fields: string[] = value.map((_, i: number) => `${name}[${i}]`);

  const push = (obj: unknown) => {
    dispatch({
      type: "UPDATE_FIELD_VALUE",
      payload: { name, value: [...value, obj] },
    });
  };

  const remove = (index: number) => {
    dispatch({
      type: "UPDATE_FIELD_VALUE",
      payload: { name, value: value.filter((_, i) => index !== i) },
    });
  };

  return useMemo(() => component({ fields, push, remove }), [value]);
}
