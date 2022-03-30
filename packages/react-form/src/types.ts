import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { Hook } from '@open-tech-world/react-state';
import Form from './Form';

export type InitialValues = ComponentPropsWithoutRef<
  typeof Form
>['initialValues'];

export type Values = InitialValues;

export interface ContextVal {
  useFormState: Hook<FormState>;
  runValidations: () => Promise<boolean>;
}

export interface Props<Values> {
  initialValues?: Values;
  onSubmit: (values: Values) => void;
  validate?: (
    values: Values
  ) => Record<string, unknown> | Promise<Record<string, unknown>>;
  children: ReactNode;
}

type Errors<T> = { [K in keyof T]: string | T[K] };
type Visited<T> = {
  [K in keyof T]?: T[K] extends any[] | Record<string, unknown>
    ? Visited<T[K]>
    : boolean;
};

export interface FormState {
  values: Values;
  errors: Errors<Values>;
  visited: Visited<Values>;
}
