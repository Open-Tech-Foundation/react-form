---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Installation

<Tabs
defaultValue="npm"
values={[
{label: 'npm', value: 'npm'},
{label: 'Yarn', value: 'yarn'},
]}>
<TabItem value="npm">

```shell
npm install @open-tech-world/react-form
```

</TabItem>
  <TabItem value="yarn">

```shell
yarn add @open-tech-world/react-form
```

  </TabItem>
</Tabs>

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

## Usage (TypeScript)

```tsx
import { Form, Field } from '@open-tech-world/react-form';

interface FormValues {
  field1: type;
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

      {/* Other fields... */}

      <button type="submit">Submit</button>
    </Form>
  );
}
```
