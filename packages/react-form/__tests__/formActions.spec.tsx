import React, { useRef } from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import { Field, Form } from '../src';

describe('Form Actions', () => {
  test('Reset the form on submit without initialValues', async () => {
    let formValues: unknown;

    const App = () => {
      return (
        <Form
          onSubmit={(values, { reset }) => {
            formValues = values;
            reset();
          }}
        >
          <label htmlFor="name">Name</label>
          <Field id="name" name="name" />
          <button type="submit" />
        </Form>
      );
    };
    render(<App />);
    await userEvent.type(screen.getByRole('textbox'), 'xxx');
    await userEvent.click(screen.getByRole('button'));
    expect(formValues).toEqual({ name: 'xxx' });
    expect(screen.getByLabelText('Name')).toHaveValue('');
  });

  it('Reset the form on submit with initialValues', async () => {
    interface FormValues {
      name: string;
    }
    let formValues: FormValues = { name: '' };

    const App = () => {
      return (
        <Form
          initialValues={{ name: 'g' }}
          onSubmit={(values, { reset }) => {
            formValues = values;
            reset();
          }}
        >
          <label htmlFor="name">Name</label>
          <Field id="name" name="name" />
          <button type="submit" />
        </Form>
      );
    };
    render(<App />);
    await userEvent.clear(screen.getByRole('textbox'));
    await userEvent.type(screen.getByRole('textbox'), 'React');
    await userEvent.click(screen.getByRole('button'));
    expect(formValues).toEqual({ name: 'React' });
    expect(screen.getByLabelText('Name')).toHaveValue('g');
  });

  it('Reset the form on submit with new initialValues', async () => {
    interface FormValues {
      name: string;
    }
    let formValues: FormValues = { name: '' };

    const App = () => {
      return (
        <Form
          initialValues={{ name: 'g' }}
          onSubmit={(values, { reset }) => {
            formValues = values;
            reset({ name: 'xxx' });
          }}
        >
          <label htmlFor="name">Name</label>
          <Field id="name" name="name" />
          <button type="submit" />
        </Form>
      );
    };
    render(<App />);
    await userEvent.clear(screen.getByRole('textbox'));
    await userEvent.type(screen.getByRole('textbox'), 'React');
    await userEvent.click(screen.getByRole('button'));
    expect(formValues).toEqual({ name: 'React' });
    expect(screen.getByLabelText('Name')).toHaveValue('xxx');
  });

  test('Using form ref to reset the form initial values', async () => {
    interface FormValues {
      name: string;
    }
    let formValues: FormValues;

    const App = () => {
      const myFormRef = useRef(null);
      return (
        <Form
          ref={myFormRef}
          initialValues={{ name: 'a' }}
          onSubmit={(values) => {
            formValues = values;
            myFormRef.current.actions.reset({ name: 'b' });
          }}
        >
          <label htmlFor="name">Name</label>
          <Field id="name" name="name" />
          <button type="submit" />
        </Form>
      );
    };
    render(<App />);
    expect(screen.getByRole('textbox').value).toBe('a');
    await userEvent.click(screen.getByRole('button'));
    expect(formValues).toEqual({ name: 'a' });
    expect(screen.getByLabelText('Name')).toHaveValue('b');
  });
});
