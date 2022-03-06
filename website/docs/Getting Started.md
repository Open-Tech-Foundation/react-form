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

```ts
import { Form, Field } from '@open-tech-world/react-form';

<Form onSubmit={(values) => {}}>
  <Field ... />
  ...
</Form>
```
