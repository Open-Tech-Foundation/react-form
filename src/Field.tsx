import {
  createElement,
  FormEvent,
  useContext,
  useEffect,
  useMemo,
} from "react";
import { FormContext, FormContextVal } from "./formContext";

interface Props {
  name: string;
  component: string | JSX.Element;
  type: string;
}

export default function Field(props: Props): JSX.Element {
  const { name, type, component, ...otherProps } = props;
  const { state, dispatch } = useContext<FormContextVal>(FormContext);
  const value = state[name] || "";

  useEffect(() => {
    dispatch({ type: "REGISTER_FIELD", payload: { name: name, value } });
  }, []);

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    dispatch({
      type: "UPDATE_FIELD_VALUE",
      payload: { name, value: e.currentTarget.value },
    });
  };

  if (typeof component === "string") {
    return useMemo(
      () =>
        createElement(component, {
          name,
          type,
          value,
          onChange: handleChange,
          ...otherProps,
        }),
      [value]
    );
  }

  const compProps = {
    name,
    value,
    onChange: handleChange,
    ...otherProps,
  };

  return useMemo(
    () => <component.type {...component.props} {...compProps} />,
    [value]
  );
}
