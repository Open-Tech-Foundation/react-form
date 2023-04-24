---
sidebar_position: 3
slug: chakra-ui-form
---

import {SandBox} from '@opentf/react-sandbox';
import ChakraUIFormSource from '!!raw-loader!@site/src/examples/ChakraUIForm.jsx';
import FormContext from '!!raw-loader!@site/src/Demo/FormContext';

<SandBox
consoleType="Advanced"
deps={["@opentf/react-form", "@chakra-ui/react", "@emotion/react", "@emotion/styled", "framer-motion"]}
code={ChakraUIFormSource}
files={{'/FormContext.jsx': FormContext}}
style={{height: '500px'}}
tabIndex={1}
/>
