import { createContext } from 'react';
import { ContextVal } from './types';

export const FormContext = createContext<ContextVal | null>(null);
