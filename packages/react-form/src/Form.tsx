import { cloneObj, getInObj, setInObj } from '@open-tech-world/js-utils';
import { createState } from '@open-tech-world/react-state';
import { FormEvent, useReducer } from 'react';
import cloneObjWithDefaultVal from './cloneObjWithDefaultVal';
import { FormContext } from './formContext';
import { ContextVal, FormState, InitialValues, Props } from './types';

// function reducer(state: FormState, action: DispatchAction): FormState {
//   switch (action.type) {
//     case 'REGISTER_FIELD':
//       if (getInObj(state.fieldValues, action.payload.name) !== undefined) {
//         return state;
//       }

//       return {
//         ...state,
//         values: setInObj(
//           cloneObj(state.values),
//           action.payload.name,
//           action.payload.value
//         ) as Record<string, unknown>,
//         fieldValues: setInObj(
//           cloneObj(state.fieldValues),
//           action.payload.name,
//           action.payload.value
//         ),
//       };
//     case 'SET_FIELD_VALUE':
//       return {
//         ...state,
//         fieldValues: setInObj(
//           cloneObj(state.fieldValues),
//           action.payload.name,
//           action.payload.value
//         ),
//       };
//     case 'SET_VALUES':
//       return {
//         ...state,
//         values: setInObj(
//           cloneObj(state.values),
//           action.payload.name,
//           action.payload.value
//         ) as Record<string, unknown>,
//       };
//     case 'SET_VISITED':
//       return {
//         ...state,
//         visited: setInObj(
//           cloneObj(state.visited),
//           action.payload.name,
//           action.payload.value
//         ),
//       };
//     case 'SET_ALL_VISITED':
//       return {
//         ...state,
//         visited: cloneObjWithDefaultVal(state.fieldValues, true),
//       };
//     case 'SET_ERRORS':
//       return {
//         ...state,
//         errors: cloneObj(action.payload.value),
//       };
//     default:
//       throw new Error();
//   }
// }

export default function Form<Values = InitialValues>(props: Props<Values>) {
  const { initialValues, children, validate, onSubmit } = props;

  const formState: FormState = {
    values: cloneObj(initialValues) || {},
    errors: {},
    visited: {},
  };

  const useFormState = createState<FormState>(formState);

  const setState = useFormState(null, { set: true });

  const runValidations = async () => {
    if (validate) {
      const errors = await validate(formState.values as Values);
      if (errors && Object.keys(errors).length > 0) {
        setState({ errors: errors });
        return false;
      }
      setState({ errors: {} });
    }

    return true;
  };

  const contextVal: ContextVal = {
    useFormState: useFormState,
    runValidations: runValidations,
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setState((s) => ({
      visited: cloneObjWithDefaultVal(s.values as object, true),
    }));
    const validationResult = await runValidations();
    if (validationResult && onSubmit) {
      onSubmit(formState.values as Values);
    }
  };

  return (
    <FormContext.Provider value={contextVal}>
      <form role="form" onSubmit={handleSubmit}>
        {children}
      </form>
    </FormContext.Provider>
  );
}
