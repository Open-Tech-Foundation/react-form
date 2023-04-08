---
sidebar_position: 4
---

import {SandBox} from '@opentf/react-sandbox';
import ErrorsFormSource from '!!raw-loader!@site/src/examples/ErrorsForm';
import ErrorMsgSource from '!!raw-loader!@site/src/examples/ErrorMsg';

The `errors` object returned from the validation function is used to display errors in the form.

## useFieldError()

The form field's `error` message can be obtained from the `useFieldError` hook function.

The field `name` or `path` is passed to the hook.

The hook function returns an `error` from the `errors` object when the field is `visited` or `touched`.

### Example

<SandBox lib="react-form" files={{'/App.js': ErrorsFormSource, '/ErrorMsg.js': ErrorMsgSource}} />
