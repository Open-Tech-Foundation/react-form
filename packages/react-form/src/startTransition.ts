import { startTransition as reactStartTransition } from 'react';

export default function startTransition(callback: () => void) {
  if (reactStartTransition) {
    return reactStartTransition(callback);
  }

  return callback;
}
