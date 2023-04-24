import {
  ChakraProvider,
  Container,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  Checkbox,
  RadioGroup,
  HStack,
  Radio,
  Select,
  Switch,
} from '@chakra-ui/react';
import {
  Form,
  Field,
  useFormActions,
  useField,
} from '../../../packages/react-form/src';
import { useId } from 'react';

function TextField({ name, type, label }) {
  const { field, error } = useField(name);

  return (
    <FormControl isInvalid={error} mt={5}>
      <FormLabel>{label}</FormLabel>
      <Input
        type={type}
        value={field.value}
        onChange={(e) => field.onChange(e.target.value)}
        onBlur={field.onBlur}
      />
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
}

function CheckboxField({ name, label }) {
  const { field } = useField(name);

  return (
    <FormControl mt={5}>
      <Checkbox
        isChecked={Boolean(field.value)}
        onChange={(e) => field.onChange(e.target.checked)}
        onBlur={field.onBlur}
      >
        {label}
      </Checkbox>
    </FormControl>
  );
}

function RadioGroupField({ name, label, options }) {
  const { field } = useField(name);

  return (
    <FormControl as="fieldset" mt={5}>
      <FormLabel as="legend" htmlFor={null}>
        {label}
      </FormLabel>
      <RadioGroup value={field.value} onChange={(v) => field.onChange(v)}>
        <HStack spacing="24px">
          {options.map((o, i) => (
            <Radio key={i} value={o}>
              {o}
            </Radio>
          ))}
        </HStack>
      </RadioGroup>
    </FormControl>
  );
}

function SelectField({ name, label, placeholder, options }) {
  const { field } = useField(name);

  return (
    <FormControl mt={5}>
      <FormLabel>{label}</FormLabel>
      <Select
        placeholder={placeholder}
        value={field.value}
        onChange={(e) => field.onChange(e.target.value)}
        onBlur={field.onBlur}
      >
        {options.map((o, i) => (
          <option key={i}>{o}</option>
        ))}
      </Select>
    </FormControl>
  );
}

function SwitchField({ name, label }) {
  const { field } = useField(name);
  const lableID = useId();

  return (
    <FormControl display="flex" alignItems="center" mt={5}>
      <FormLabel htmlFor={lableID} mb="0">
        {label}
      </FormLabel>
      <Switch
        checked={Boolean(field.value)}
        id={lableID}
        onChange={(e) => field.onChange(e.target.checked)}
      />
    </FormControl>
  );
}

function ChakraForm() {
  return (
    <Container maxW="md">
      <Form
        initialValues={{
          name: '',
          terms: false,
          favSport: '',
          city: '',
          emailAlerts: false,
        }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = '*Required';
          }
          return errors;
        }}
        onSubmit={(values) => console.log(values)}
      >
        <TextField name="name" label="Name" />
        <RadioGroupField
          name="favSport"
          label="Your favourite sport"
          options={['Cricket', 'Football', 'Baseball']}
        />
        <SelectField
          name="city"
          label="City"
          placeholder="Select city"
          options={['Chennai', 'New York', 'Tokyo']}
        />
        <SwitchField name="emailAlerts" label="Enable email alerts?" />
        <CheckboxField name="terms" label="Agree to the terms & conditions" />
        <Button mt={5} colorScheme="teal" type="submit">
          Sumbit
        </Button>
      </Form>
    </Container>
  );
}

export default function App() {
  return (
    <ChakraProvider>
      <ChakraForm />
    </ChakraProvider>
  );
}
