import { useFieldError } from '../src';

export default function ErrorMsg({ path }: { path: string }) {
  const error = useFieldError(path);

  if (error) {
    return <p>{error}</p>;
  }

  return null;
}
