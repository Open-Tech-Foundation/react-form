import React from 'react';
import '@testing-library/jest-dom';
import '@testing-library/react';
import '@jest/globals';
import { useState } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Field, Form } from '../src';

describe('Simple Forms', () => {
  it('Creates an empty form with a role', () => {
    render(<Form onSubmit={() => {}}>null</Form>);
    expect(screen.getByRole('form')).toBeInTheDocument();
  });

  it('Creates a form with a text input', () => {
    render(
      <Form onSubmit={() => undefined}>
        <label htmlFor="username-input">Username</label>
        <input id="username-input" type="text" />
      </Form>
    );
    expect(screen.getByRole('form')).toBeInTheDocument();
    expect(screen.getByLabelText('Username')).toBeInTheDocument();
  });

  test('Add text to a Field input & submit the form', async () => {
    let formValues: object = {};
    render(
      <Form onSubmit={(values) => (formValues = values as object)}>
        <Field name="userName" placeholder="username" />
        <button type="submit" />
      </Form>
    );
    await userEvent.type(screen.getByRole('textbox'), 'abc');
    await userEvent.click(screen.getByRole('button'));
    expect(formValues).toEqual({ userName: 'abc' });
  });

  test('The Form does not lose its state values when re-renderred', async () => {
    let formValues: object = {};
    const App = () => {
      const [state, setState] = useState(0);
      return (
        <div>
          <p>State: {state}</p>
          <Form onSubmit={(values) => (formValues = values as object)}>
            <Field name="userName" placeholder="username" />
            <button type="submit">Submit</button>
          </Form>
          <button onClick={() => setState(1)}>Change State</button>
        </div>
      );
    };
    render(<App />);
    await userEvent.type(screen.getByRole('textbox'), 'abc');
    await userEvent.click(screen.getByRole('button', { name: 'Submit' }));
    expect(formValues).toEqual({ userName: 'abc' });
    await userEvent.click(screen.getByRole('button', { name: 'Change State' }));
    await userEvent.click(screen.getByRole('button', { name: 'Submit' }));
    expect(screen.getByText('State: 1')).toBeInTheDocument();
    expect(formValues).toEqual({ userName: 'abc' });
  });

  test('Email Field input type', () => {
    render(
      <Form onSubmit={() => undefined}>
        <Field name="email" type="email" />
      </Form>
    );
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('textbox').getAttribute('type')).toBe('email');
  });

  it('Returns values from multiple input fields when the form submitted', async () => {
    let formValues: object = {};
    render(
      <Form onSubmit={(values) => (formValues = values as object)}>
        <label htmlFor="name-input">Name</label>
        <Field id="name-input" name="name" />
        <label htmlFor="email-input">Email</label>
        <Field id="email-input" name="email" type="email" />
        <label htmlFor="age-input">Age</label>
        <Field id="age-input" name="age" type="number" max="20" />
        <button type="submit" />
      </Form>
    );
    await userEvent.type(screen.getByLabelText('Name'), 'abc');
    await userEvent.type(screen.getByLabelText('Email'), 'abc@example.com');
    await userEvent.type(screen.getByLabelText('Age'), '19');
    await userEvent.click(screen.getByRole('button'));
    expect(formValues).toEqual({
      name: 'abc',
      email: 'abc@example.com',
      age: '19',
    });
  });

  test('empty initial values form', async () => {
    let formValues: object = {};
    render(
      <Form initialValues={{}} onSubmit={(values) => (formValues = values)}>
        <label htmlFor="name-input">Name</label>
        <Field id="name-input" name="name" />
        <label htmlFor="email-input">Email</label>
        <button type="submit" />
      </Form>
    );
    await userEvent.click(screen.getByRole('button'));
    expect(formValues).toEqual({});
  });

  it('returns the same initial values passed to the form', async () => {
    let formValues: object = {};
    render(
      <Form
        initialValues={{ name: 'abc', age: 25 }}
        onSubmit={(values) => (formValues = values)}
      >
        <label htmlFor="name-input">Name</label>
        <Field id="name-input" name="name" />
        <label htmlFor="email-input">Email</label>
        <button type="submit" />
      </Form>
    );
    await userEvent.click(screen.getByRole('button'));
    expect(formValues).toEqual({ name: 'abc', age: 25 });
  });

  it('returns the initial values merged with the changed values', async () => {
    let formValues: object = {};
    render(
      <Form
        initialValues={{ name: 'abc', age: 25 }}
        onSubmit={(values) => (formValues = values)}
      >
        <label htmlFor="name-input">Name</label>
        <Field id="name-input" name="name" />
        <label htmlFor="email-input">Email</label>
        <button type="submit" />
      </Form>
    );
    await userEvent.type(screen.getByLabelText('Name'), 'xyz');
    await userEvent.click(screen.getByRole('button'));
    expect(formValues).toEqual({ name: 'abcxyz', age: 25 });
  });
});
