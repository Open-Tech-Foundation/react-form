import { createContext } from 'react';
import { ContextVal } from './types';

export const FORM_CONTEXT = createContext<ContextVal | null>(null);
