import { Box } from '@mui/system';
import { useForm } from '@open-tech-world/react-form';

export default function Values() {
  const { values } = useForm();
  return (
    <Box mt={3} sx={{ color: 'error.main' }}>
      <pre>{JSON.stringify(values, null, 4)}</pre>
    </Box>
  );
}
