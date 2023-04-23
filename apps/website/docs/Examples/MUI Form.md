---
sidebar_position: 2
slug: mui-form
---

import {SandBox} from '@opentf/react-sandbox';
import MUIFormSource from '!!raw-loader!@site/src/examples/MUIForm.jsx';
import FormContext from '!!raw-loader!@site/src/Demo/FormContext';

<SandBox
consoleType="Advanced"
deps={["@opentf/react-form", "@mui/material", "@emotion/react", "@emotion/styled"]}
code={MUIFormSource}
files={{'/FormContext.jsx': FormContext}}
style={{height: '500px'}}
tabIndex={1}
/>
