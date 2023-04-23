---
sidebar_position: 5
title: Custom Field
slug: custom-field
---

import {SandBox} from '@opentf/react-sandbox';
import TweetFormSource from '!!raw-loader!@site/src/examples/TweetForm';
import TweetFieldSource from '!!raw-loader!@site/src/examples/TweetField';

Other than the HTML `<input>` elements, you can use your `React` components as form fields using `useField` hook.

## `useField`

This hook is used to build your own custom input fields.

The `hook` function returns an `object` containing a `field` object and an `error` message.

The `field` object contains `value`, `onChange`, and `onBlur` input props.

### Example

The following example shows the `custom` field for displaying input character length.

<SandBox deps={["@opentf/react-form"]} code={TweetFormSource} files={{'/TweetField.jsx': TweetFieldSource}} consoleType="Advanced" />
