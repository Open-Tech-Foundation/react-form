import { FORM_CONTEXT } from './formContext';
import { FormProps } from './types';
import useForm from './useForm';

export default function Form<Values>(props: FormProps<Values>) {
  const { initialValues, children, validate, onSubmit, ...otherProps } = props;

  const { useFormState, runValidations, handleSubmit } = useForm<Values>({
    initialValues,
    onSubmit,
    validate,
  });

  const contextVal = {
    useFormState: useFormState,
    runValidations: runValidations,
  };

  return (
    <FORM_CONTEXT.Provider value={contextVal}>
      <form role="form" onSubmit={handleSubmit} {...otherProps}>
        {children}
      </form>
    </FORM_CONTEXT.Provider>
  );
}
