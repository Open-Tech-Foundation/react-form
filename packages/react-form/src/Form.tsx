import { type Ref, forwardRef, useImperativeHandle } from 'react';
import { FORM_CONTEXT } from './formContext';
import type { FormActions, FormCtxVal, FormProps } from './types';
import useForm from './useForm';

const Form = forwardRef(function Form<Values>(
  props: FormProps<Values>,
  ref: Ref<{ actions: FormActions<Values> }>
) {
  const { initialValues, children, validate, onSubmit, ...otherProps } = props;

  const { useFormState, setFormState, runValidations, handleSubmit, actions } =
    useForm<Values>({
      initialValues,
      onSubmit,
      validate,
    });

  useImperativeHandle(
    ref,
    () => {
      return {
        actions,
      };
    },
    []
  );

  const ctxVal: FormCtxVal<Values> = {
    useFormState,
    setFormState,
    runValidations,
    actions,
  };

  return (
    <FORM_CONTEXT.Provider value={ctxVal}>
      <form role="form" onSubmit={handleSubmit} {...otherProps}>
        {children}
      </form>
    </FORM_CONTEXT.Provider>
  );
});

export default Form;
