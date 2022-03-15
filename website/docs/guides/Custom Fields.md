---
sidebar_position: 4
---

import CodeBlock from '@theme/CodeBlock';
import BrowserWindow from '@site/src/components/BrowserWindow';
import TweetForm from '@site/src/examples/TweetForm';
import TweetFormSource from '!!raw-loader!@site/src/examples/TweetForm';

import CCForm from '@site/src/examples/CCForm';
import CCFormSource from '!!raw-loader!@site/src/examples/CCForm';

Other than the HTML `<input>` elements, you can use your `React` components as form fields using `useField` hook.

## `useField`

This is a custom `React` hook function.

It is used to build your own custom input fields for your forms.

The `hook` function returns an `object` containing a `field` object, an `error` message, and a helper function `setValue`.

The `field` object contains `value`, `onChange`, and `onBlur` input props.

### Example

The following example shows the `custom` field for displaying input characters length.

<CodeBlock className="language-jsx">{TweetFormSource}</CodeBlock>

<BrowserWindow>
  <TweetForm />
</BrowserWindow>

### Example 2

The following example shows the `custom` fields for the credit card form.

<CodeBlock className="language-jsx">{CCFormSource}</CodeBlock>

<BrowserWindow>
  <CCForm />
</BrowserWindow>

