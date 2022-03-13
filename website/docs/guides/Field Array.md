---
sidebar_position: 5
---

import CodeBlock from '@theme/CodeBlock';
import BrowserWindow from '@site/src/components/BrowserWindow';
import FieldArrayForm from '@site/src/examples/FieldArrayForm';
import FieldArrayFormSource from '!!raw-loader!@site/src/examples/FieldArrayForm';
import FieldArrayForm2 from '@site/src/examples/FieldArrayForm2';
import FieldArrayForm2Source from '!!raw-loader!@site/src/examples/FieldArrayForm2';

## `<FieldArray />`

This component is used to create `dynamic` fields in the form. 

It supports `arrays` and `arrays of objects`.

It has two required props: `name` and `component`.

It must be given an unique `name`, as well as a `component` function to render an array of fields.

The `component` prop `function` will receive an object containing `fields`, `push` and `remove`.

The `fields` is an array of strings made up of component `name` appended with `indexes`, useful for naming form fields.

The `push` and `remove` functions are used to add and delete fields from the array.

### Example (Array)

<CodeBlock className="language-jsx">{FieldArrayFormSource}</CodeBlock>

<BrowserWindow>
  <FieldArrayForm />
</BrowserWindow>

### Example (Array of objects)

<CodeBlock className="language-jsx">{FieldArrayForm2Source}</CodeBlock>

<BrowserWindow>
  <FieldArrayForm2 />
</BrowserWindow>