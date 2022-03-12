---
sidebar_position: 3
---

import CodeBlock from '@theme/CodeBlock';
import BrowserWindow from '@site/src/components/BrowserWindow';
import ErrorsForm from '@site/src/examples/ErrorsForm';
import ErrorsFormSource from '!!raw-loader!@site/src/examples/ErrorsForm';
import ErrorMsgSource from '!!raw-loader!@site/src/examples/ErrorMsg';

The `errors` object returned from the validation function is used to display errors in the form.

## `useForm`

The form field's error message can be obtained from the `useForm` hook function.

The hook function returns an object containing a helper function, `getFieldError`, which accepts a `path` as an argument and it returns an `error` message.

### Example

<CodeBlock className="language-jsx" title="ErrorMsg.jsx">{ErrorMsgSource}</CodeBlock>
<CodeBlock className="language-jsx" title="ErrorsForm.jsx">{ErrorsFormSource}</CodeBlock>

<BrowserWindow>
  <ErrorsForm />
</BrowserWindow>
