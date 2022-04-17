---
sidebar_position: 9
---

import {SandBox} from '@open-tech-world/react-examples-sandbox';
import ResetFormSource from '!!raw-loader!@site/src/examples/ResetForm';
import ResetFormWithNewValuesSource from '!!raw-loader!@site/src/examples/ResetFormWithNewValues';

Reset the form using the `reset` function from the `actions` object.

The form's `onSubmit` handler will receive `values` & `actions` objects.

If the `initialValues` prop is provided, then resetting the form will use this to rebuild the form state.

The `reset` function also accepts a new object to reset the form with new values.


### Example

<SandBox lib="react-form" code={ResetFormSource} />

### Example with new values

<SandBox lib="react-form" code={ResetFormWithNewValuesSource} />