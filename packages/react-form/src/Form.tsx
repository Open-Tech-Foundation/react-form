import { FORM_CONTEXT } from './formContext';
import type { FormCtxVal, FormProps } from './types';
import useForm from './useForm';

export default function Form<Values>(props: FormProps<Values>) {
  const { initialValues, children, validate, onSubmit, ...otherProps } = props;

  const { useFormState, setFormState, runValidations, handleSubmit, actions } =
    useForm<Values>({
      initialValues,
      onSubmit,
      validate,
    });

  let ctxVal: FormCtxVal<Values> | null = null;

  if (useFormState && setFormState) {
    ctxVal = {
      useFormState,
      setFormState,
      runValidations,
      actions,
    };
  }

  return (
    <FORM_CONTEXT.Provider value={ctxVal}>
      <form role="form" onSubmit={handleSubmit} {...otherProps}>
        {children}
      </form>
    </FORM_CONTEXT.Provider>
  );
}
