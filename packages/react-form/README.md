<img align="left" src="https://open-tech-foundation.pages.dev/img/Logo.svg" width="50" height="50">

&nbsp;[OPEN TECH FOUNDATION](https://open-tech-foundation.pages.dev/)

<div align="center">

# React Form

[![Build](https://github.com/open-tech-foundation/react-form/actions/workflows/build.yml/badge.svg)](https://github.com/open-tech-foundation/react-form/actions/workflows/build.yml)

</div>

> A simple form state manager for React.

# [Live Demo](https://react-form.pages.dev/#demo) | [Documentation](https://react-form.pages.dev/)

## Features

- Simple APIs to use

- Supports nested & array fields

- Supports form validation (Works with any schema validation lib)

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
      initialValues={{ field1: '', field2: '' }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Field name="field1" />
      <Field name="field2" type="number" />
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

Copyright (c) [Thanga Ganapathy](https://github.com/Thanga-Ganapathy) ([MIT License](../../LICENSE)).
