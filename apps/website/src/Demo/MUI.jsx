import {
  FormControl,
  FormHelperText,
  InputLabel,
  Select,
  TextField,
} from '@mui/material';
import { useField } from '@opentf/react-form';

export const MUISelectField = ({ name, label, children }) => {
  const { field, error } = useField(name);
  return (
    <FormControl fullWidth error={Boolean(error)} size="small">
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label={label}
        value={field.value}
        onChange={(e) => field.onChange(e.target.value)}
        onBlur={field.onBlur}
      >
        {children}
      </Select>
      <FormHelperText>{error}</FormHelperText>
    </FormControl>
  );
};

export const MUITextField = ({ name, label, type }) => {
  const { field, error } = useField(name);
  return (
    <TextField
      type={type}
      error={Boolean(error)}
      label={label}
      helperText={error}
      value={field.value}
      onChange={(e) => field.onChange(e.target.value)}
      onBlur={field.onBlur}
      size="small"
    />
  );
};
