---
sidebar_position: 1
slug: /
sidebar_label: Introduction
title: Introduction
---

import {SandBox} from '@opentf/react-sandbox';
import DemoSource from '!!raw-loader!@site/src/Demo/index';
import Styles from '!!raw-loader!@site/src/Demo/styles.css';
import FormContext from '!!raw-loader!@site/src/Demo/FormContext';
import MUI from '!!raw-loader!@site/src/Demo/MUI';

# React Form

> Build Forms & Manage Their State in React.

## Features

- Simple APIs to use

- It supports nested & array fields

- It supports form validation

- TypeScript support

- Render optimized

- <a href="https://bundlephobia.com/package/@opentf/react-form">Minified + GZip Size ~3KB</a>

## DEMO

<SandBox
deps={["@opentf/react-form", "@mui/material", "@emotion/react", "@emotion/styled"]}
code={DemoSource}
files={{'/MUI.jsx': MUI, '/FormContext.jsx': FormContext, '/styles.css': Styles}}
style={{height: '500px'}}
/>
