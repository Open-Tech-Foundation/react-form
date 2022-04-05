import { useFieldError } from '@open-tech-world/react-form';

export default function ErrorMsg({ path }) {
  const error = useFieldError(path);

  if (error) {
    return <div style={{ color: 'red' }}>{error}</div>;
  }

  return null;
}
