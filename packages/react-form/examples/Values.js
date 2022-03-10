import { Box } from '@mui/system';
import { useForm } from '../src';

export default function Values() {
  const { values } = useForm();
  return (
    <Box mt={3} sx={{ bgcolor: 'text.primary', color: 'background.paper', p: 2 }}>
      <pre>{JSON.stringify(values, null, 4)}</pre>
    </Box>
  );
}
