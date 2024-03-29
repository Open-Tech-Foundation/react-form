---
sidebar_position: 7
slug: file-input
---

import {SandBox} from '@opentf/react-sandbox';

import FileInputFormSource from '!!raw-loader!@site/src/examples/FileInputForm';
import FileInputFormWithPreviewSource from '!!raw-loader!@site/src/examples/FileInputFormWithPreview';

## `<FileField />`

It renders an `<input>` element of type `file` and binds its value to the form state.

Use the `<FileField>` with a `name` prop for basic usage.

### Example (Basic)

<SandBox code={FileInputFormSource} deps={["@opentf/react-form"]} consoleType="Advanced" />

<br />

Use the `onFilesChange` prop to listen for file changes.

The `accept` prop can be used to filter files using extensions.

The following example accepts only `PNG` or `JPG` image files.

### Example (With preview)

<SandBox code={FileInputFormWithPreviewSource} deps={["@opentf/react-form"]} consoleType="Advanced" />
