---
sidebar_position: 5
---

import {SandBox} from '@opentf/react-sandbox';

import TweetFormSource from '!!raw-loader!@site/src/examples/TweetForm';

import CCFormSource from '!!raw-loader!@site/src/examples/CCForm';

Other than the HTML `<input>` elements, you can use your `React` components as form fields using `useField` hook.

## `useField`

This is a custom `React` hook function.

It is used to build your own custom input fields for your forms.

The `hook` function returns an `object` containing a `field` object, an `error` message, and a helper function `setValue`.

The `field` object contains `value`, `onChange`, and `onBlur` input props.

### Example

The following example shows the `custom` field for displaying input character length.

<SandBox lib="react-form" code={TweetFormSource} />

### Example2

The following example shows the `custom` fields implementing the credit card form.

<SandBox lib="react-form" code={CCFormSource} />