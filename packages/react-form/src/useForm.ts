import { getInObj } from '@open-tech-world/es-utils';
import { useContext } from 'react';
import { FormContext, FormContextVal } from './formContext';

export default function useForm() {
  const formContextVal: FormContextVal = useContext(FormContext);

  return {
    values: formContextVal.state.values,
    errors: formContextVal.state.errors,
    getFieldError: (path: string) =>
      getInObj(formContextVal.state.errors, path),
  };
}
