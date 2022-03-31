import { Box } from '@mui/material';
import { useForm } from '../src';

export default function ErrorMsg({ path }: { path: string }) {
  const { getFieldError } = useForm();
  const error = getFieldError(path);

  if (error) {
    return <Box sx={{ color: 'error.main' }}>{error}</Box>;
  }

  return null;
}
