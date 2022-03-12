import { Box } from '@mui/material';
import { useForm } from '@open-tech-world/react-form';

export default function ErrorMsg({ path }) {
  const { getFieldError } = useForm();
  const error = getFieldError(path);

  if (error) {
    return <Box sx={{ color: 'error.main' }}>{error}</Box>;
  }

  return null;
}
