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

> A simple form state manager for React.

## Features

- Simple APIs to use

- Supports nested & array fields

- Supports form validation (Works with any schema validation lib)

- Render optimized

- TypeScript support

- <a href="https://bundlephobia.com/package/@opentf/react-form">Minified + GZip Size ~3KB</a>

## DEMO

<SandBox
consoleType="Advanced"
layout="Tabs"
deps={["@opentf/react-form", "@mui/material", "@emotion/react", "@emotion/styled"]}
code={DemoSource}
files={{'/MUI.jsx': MUI, '/FormContext.jsx': FormContext, '/styles.css': Styles}}
style={{height: '500px'}}
tabIndex={1}
/>
