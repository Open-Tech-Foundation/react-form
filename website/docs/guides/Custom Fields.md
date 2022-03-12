import CodeBlock from '@theme/CodeBlock';
import BrowserWindow from '@site/src/components/BrowserWindow';
import TweetForm from '@site/src/examples/TweetForm';
import TweetFieldSource from '!!raw-loader!@site/src/examples/TweetForm';

Other than the HTML `<input>` elements, you can use your `React` components as form fields using `useField` hook.

## `useField`

This is a custom `React` hook function.

It is used to build your own custom input fields for your forms.

The `hook` function returns an `object` containing a `field` object, an `error` message, and a helper function `setValue`.

The `field` object contains `value`, `onChange`, and `onBlur` input props.

### Example

The following example demonstrates the `custom` field for displaying input characters length.

<CodeBlock className="language-jsx">{TweetFieldSource}</CodeBlock>

<BrowserWindow>
  <TweetForm />
</BrowserWindow>
