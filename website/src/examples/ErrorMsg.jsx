import { useForm } from '@open-tech-world/react-form';

export default function ErrorMsg({ path }) {
  const { getFieldError } = useForm();
  const error = getFieldError(path);

  if (error) {
    return <div style={{ color: 'red' }}>{error}</div>;
  }

  return null;
}
