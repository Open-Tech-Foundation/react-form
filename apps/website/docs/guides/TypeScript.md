---
sidebar_position: 2
---

import CodeBlock from '@theme/CodeBlock';
import TypeScriptBasicFormSource from '!!raw-loader!@site/src/examples/TypeScriptBasicForm';
import {SandBox} from '@opentf/react-sandbox';

By using `TypeScript`, you can define the `shape` of form fields to get all the powers of the language, from code editor `IntelliSense` to fixing unknown `issues`.

:::tip
You can use either `type` or `interface` to define a form's shape.
:::

### Example

<SandBox template="react-ts" deps={["@opentf/react-form"]} code={TypeScriptBasicFormSource} consoleType="Advanced" />
