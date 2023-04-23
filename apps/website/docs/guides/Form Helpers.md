---
sidebar_position: 9
slug: form-helpers
---

import {SandBox} from '@opentf/react-sandbox';
import ResetFormSource from '!!raw-loader!@site/src/examples/ResetForm';
import ResetFormWithNewValuesSource from '!!raw-loader!@site/src/examples/ResetFormWithNewValues';

## Reset

Reset the form using the `reset` function from the `useFormActions` hook fn.

The form's `onSubmit` handler will receive `values` & `actions` objects.

If the `initialValues` prop is provided, then resetting the form will use this to rebuild the form state.

The `reset` function also accepts a new object to reset the form with new values.

### Example

<SandBox code={ResetFormSource} deps={["@opentf/react-form"]} consoleType="Advanced" />

### Example (Reset with new values)

<SandBox code={ResetFormWithNewValuesSource} deps={["@opentf/react-form"]} consoleType="Advanced" />
