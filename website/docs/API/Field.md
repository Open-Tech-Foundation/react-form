---
sidebar_position: 2
title: <Field />
heading: <Field />
---

It renders an HTML input element and binds its value to the form state.

## Props:

| Name | Type   | Required | Default   | Description                                                                                                                                                                                                                                                                                                      |
| ---- | ------ | -------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name | string | Yes      | undefined | It is used to map the input value to the form state.                                                                                                                                                                                                                                                             |
| type | string | No       | 'text'    | The type of HTML input element to render. <br /><br /> Supported types:<br /> `color` <br /> `date` <br /> `datetimelocal` <br /> `email` <br /> `file` <br /> `month` <br /> `number` <br /> `password` <br /> `range` <br /> `search` <br /> `tel` <br /> `text` <br /> `textarea` <br /> `time` <br /> `week` |

:::info
Any additional props supplied to the component will be passed on to the input element.
:::

:::caution
It does not support the `checkbox` and `radio` input types; instead, use the [`<CheckboxField />`](/api/checkboxfield) and [`<RadioGroupField />`](/api/radiogroupfield) components.
:::
