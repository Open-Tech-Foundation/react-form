<img align="left" src="https://open-tech-foundation.pages.dev/img/Logo.svg" width="50" height="50">

&nbsp;[OPEN TECH FOUNDATION](https://open-tech-foundation.pages.dev/)

<div align="center">

# React Form

[![Build](https://github.com/open-tech-foundation/react-form/actions/workflows/build.yml/badge.svg)](https://github.com/open-tech-foundation/react-form/actions/workflows/build.yml)

</div>

> A simple form state management for React.

# [View Demo](https://react-form.pages.dev/#demo) | [Documentation](https://react-form.pages.dev/) 

## Features

- Simple APIs to use

- It supports nested & array fields

- It supports form validation

- Render optimized

- TypeScript support

## Installation

```shell
npm install @opentf/react-form
```

```shell
yarn add @opentf/react-form
```

```shell
pnpm add @opentf/react-form
```

```shell
bun add @opentf/react-form
```

## Usage

```jsx
import { Form, Field } from '@opentf/react-form';

export default function App() {
  return (
    <Form
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Field name="field1" />
      <button type="submit">Submit</button>
    </Form>
  );
}
```

## Usage (TypeScript)

```tsx
import { Form, Field } from '@opentf/react-form';

interface FormValues {
  field1: string;
}

export default function App() {
  const initialValues: FormValues = { field1: '' };

  return (
    <Form
      initialValues={initialValues}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Field name="field1" />
      <button type="submit">Submit</button>
    </Form>
  );
}
```

## Examples

- [Basic Form](https://react-form.pages.dev/Examples/basic-form)

- [Material UI Form](https://react-form.pages.dev/Examples/mui-form)

- [Chakra UI Form](https://react-form.pages.dev/Examples/chakra-ui-form)

- [Yup Validations](https://react-form.pages.dev/Examples/yup-validations)

- [Zod Validations](https://react-form.pages.dev/Examples/zod-validations)

## License

Copyright (c) [Thanga Ganapathy](https://github.com/Thanga-Ganapathy) ([MIT License](./LICENSE)).
