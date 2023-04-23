---
sidebar_position: 1
slug: basic-form
---

import {SandBox} from '@opentf/react-sandbox';
import SimpleFormSource from '!!raw-loader!@site/src/examples/SimpleForm.jsx';
import FormContext from '!!raw-loader!@site/src/Demo/FormContext';

<SandBox
consoleType="Advanced"
deps={["@opentf/react-form"]}
code={SimpleFormSource}
files={{'/FormContext.jsx': FormContext}}
style={{height: '500px'}}
/>
