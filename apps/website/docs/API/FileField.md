---
sidebar_position: 6
title: <FileField />
heading: <FileField />
---

It renders an HTML `<input>` element of type `file` and binds its value to the form state.

## Props:

| Name          | Type                                | Required | Default   | Description                                                                |
| ------------- | ----------------------------------- | -------- | --------- | -------------------------------------------------------------------------- |
| name          | string                              | Yes      | undefined | It is used to map the input value to the form state.                       |
| multiple      | boolean                             | No       | false     | It is used specify whether multiple files can be selected.                 |
| clearable     | boolean                             | No       | false     | It is used to display an extra `clear` button for clearing selected files. |
| onFilesChange | (files: FileList \| string) => void | No       | undefined | The handler is to be called whenever the input files change.               |

:::info
Any additional props supplied to the component will be passed on to the input element.
:::

## Usage

```jsx
import { FileField } from '@opentf/react-form';

<FileField name="myFile" />

<FileField name="myFiles" multiple />

<FileField name="myFiles" multiple clearable />
```
