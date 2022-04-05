---
sidebar_position: 6
---

import CodeBlock from '@theme/CodeBlock';
import FieldArrayFormSource from '!!raw-loader!@site/src/examples/FieldArrayForm';
import FieldArrayForm2Source from '!!raw-loader!@site/src/examples/FieldArrayForm2';

## `useFieldArray()`

This is a custom hook function and it is used to create `dynamic` fields in the form.

A `unique` name must be provided.

The hook returns an object containing `fields`, `push`, and `remove` props.

The `fields` is an array of strings made up of array `name` appended with `indexes`, useful for naming form fields.

The `push` and `remove` functions are used to add and remove fields from the array.

:::info
It supports `arrays` and `arrays of objects( [{}] )`.
:::

### Example (Array)

<CodeBlock className="language-jsx">{FieldArrayFormSource}</CodeBlock>

### Example (Array of objects)

<CodeBlock className="language-jsx">{FieldArrayForm2Source}</CodeBlock>
