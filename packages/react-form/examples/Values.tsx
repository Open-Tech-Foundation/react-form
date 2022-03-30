import { Box } from '@mui/system';
import { useForm } from '../src';

export default function Values() {
  const { values, errors, visited } = useForm();
  return (
    <Box
      mt={2}
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        columnGap: '15px',
      }}
    >
      <Box sx={{ bgcolor: 'text.primary', color: 'background.paper', p: 2 }}>
        <div>Values:</div>
        <pre>{JSON.stringify(values, null, 4)}</pre>
      </Box>
      <Box sx={{ bgcolor: 'text.primary', color: 'background.paper', p: 2 }}>
        <div>Errors:</div>
        <pre>{JSON.stringify(errors, null, 4)}</pre>
      </Box>
      <Box sx={{ bgcolor: 'text.primary', color: 'background.paper', p: 2 }}>
        <div>Touched:</div>
        <pre>{JSON.stringify(visited, null, 4)}</pre>
      </Box>
    </Box>
  );
}
