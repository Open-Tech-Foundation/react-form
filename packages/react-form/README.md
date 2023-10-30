<div align="center">

# React Form

⚡ by [OPEN TECH FOUNDATION](https://open-tech-foundation.pages.dev/)

[![Build](https://github.com/open-tech-foundation/react-form/actions/workflows/build.yml/badge.svg)](https://github.com/open-tech-foundation/react-form/actions/workflows/build.yml)

</div>

> A simple form state management for React.

## [View Demo](https://react-form.pages.dev/#demo)

## Features

- Simple APIs to use

- It supports nested & array fields

- It supports form validation

- Render optimized

- TypeScript support

## Installation

Using npm

```shell
npm install @opentf/react-form
```

Using Yarn

```shell
yarn add @opentf/react-form
```

Using pnpm

```shell
pnpm add @opentf/react-form
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

## Documentation

Please visit [https://react-form.pages.dev/](https://react-form.pages.dev/) to get started.

## License

Copyright (c) [Thanga Ganapathy](https://github.com/Thanga-Ganapathy) ([MIT License](../../LICENSE)).
