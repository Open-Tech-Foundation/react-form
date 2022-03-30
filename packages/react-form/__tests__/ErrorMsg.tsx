import { useForm } from '../src';

export default function ErrorMsg({ path }: { path: string }) {
  const { getFieldError } = useForm();
  const error = getFieldError(path);

  if (error) {
    return <p>{error}</p>;
  }

  return null;
}
