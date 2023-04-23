import type {
  ComponentPropsWithoutRef,
  ReactNode,
  FormHTMLAttributes,
} from 'react';
import type { Hook, SetState, API } from '@opentf/react-state';
import type Form from './Form';

export type Values = ComponentPropsWithoutRef<typeof Form>['initialValues'];

export type FormCtxVal<Values> = {
  useFormState: Hook<FormState<Values>>;
  setFormState: SetState<FormState<Values>>;
  runValidations: () => Promise<boolean>;
  actions: FormActions<Values>;
};

export interface FormActions<Values> {
  reset: (values?: Values) => void;
}

export interface FormProps<Values>
  extends Omit<FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> {
  initialValues?: Values;
  onSubmit: (values: Values, actions: FormActions<Values>) => void;
  validate?: (values: Values) => Errors<Values> | Promise<Errors<Values>>;
  children: ReactNode;
}

export interface UseFormProps<Values> {
  initialValues?: Values;
  onSubmit: (values: Values, actions: FormActions<Values>) => void;
  validate?: (values: Values) => Errors<Values> | Promise<Errors<Values>>;
}

export type Errors<T> = {
  [K in keyof T]?: T[K] extends unknown[] | Record<string, unknown>
    ? Errors<T[K]>
    : string;
};

export type Visited<T> = {
  [K in keyof T]?: T[K] extends unknown[] | Record<string, unknown>
    ? Visited<T[K]>
    : boolean;
};

export interface FormState<Values> {
  initialValues: Values;
  values: Values;
  errors: Errors<Values>;
  visited: Visited<Values>;
}

export type FormCtx<Values> = {
  values: Values;
  errors: Errors<Values>;
  visited: Visited<Values>;
};

export interface FormHookRef<Values> {
  hook: Hook<FormState<Values>>;
  setState: SetState<FormState<Values>>;
  api: API<FormState<Values>>;
}
