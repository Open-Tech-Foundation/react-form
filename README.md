<div align="center">

# React Form - ⚡ by [Open Tech World](https://open-tech-world.pages.dev/)

[![Build](https://github.com/open-tech-world/react-form/actions/workflows/build.yml/badge.svg)](https://github.com/open-tech-world/react-form/actions/workflows/build.yml)
[![npm bundle size (scoped version)](https://img.shields.io/bundlephobia/minzip/@open-tech-world/react-form/latest?label=Min%2BGZip)](https://bundlephobia.com/package/@open-tech-world/react-form)

</div>

> Build & Manage the State of Forms in React.

## Features

- Simple APIs to use

- It supports nested & array fields

- It supports form validation

- TypeScript support

- Render optimized

## Installation

```bash
# With npm
$ npm install @open-tech-world/react-form

# With yarn
$ yarn add @open-tech-world/react-form
```

## Usage

```jsx
import { Form, Field } from '@open-tech-world/react-form';

export default function App() {
  return (
    <Form
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Field name="field1" />
      
      {/* Other fields... */}
      
      <button type="submit">Submit</button>
    </Form>
  );
}
```

## Documentation

Please read the complete documentation at: [https://react-form.pages.dev/](https://react-form.pages.dev/)

## License

Copyright (c) [Thanga Ganapathy](https://github.com/Thanga-Ganapathy) ([MIT License](./LICENSE)).
