---
sidebar_position: 6
---

import {SandBox} from '@open-tech-world/react-examples-sandbox';

import FieldArrayFormSource from '!!raw-loader!@site/src/examples/FieldArrayForm';
import FieldArrayForm2Source from '!!raw-loader!@site/src/examples/FieldArrayForm2';

## `useFieldArray()`

This is a custom hook function and it is used to create `dynamic` fields in the form.

A `unique` name must be provided.

The hook returns an object containing `fields`, `push`, and `remove` props.

The `fields` is an array of strings made up of array `name` appended with `indexes`, useful for naming form fields.

The `push` and `remove` functions are used to add and remove fields from the array.

:::info
It supports `Arrays` and `Arrays of objects( [{}] )`.
:::

### Example (Array)

<SandBox code={FieldArrayFormSource} />

### Example (Array of objects)

<SandBox code={FieldArrayForm2Source} />
