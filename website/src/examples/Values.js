import { Box } from '@mui/system';
import { useForm } from '@open-tech-world/react-form';

export default function Values() {
  const { values } = useForm();
  return (
    <Box mt={3}>
      <pre>{JSON.stringify(values, null, 4)}</pre>
    </Box>
  );
}
