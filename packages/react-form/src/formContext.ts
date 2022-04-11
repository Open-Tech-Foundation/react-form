import { createContext } from 'react';
import { FormContextType } from './types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const FORM_CONTEXT = createContext<FormContextType<any> | null>(null);
