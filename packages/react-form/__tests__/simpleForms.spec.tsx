import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Field, Form } from '../src';

describe('Simple Forms', () => {
  it('Creates an empty form with a role', () => {
    render(<Form onSubmit={() => undefined}>null</Form>);
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
    let formValues: object;
    render(
      <Form onSubmit={(values) => (formValues = values as object)}>
        <Field name="userName" placeholder="username" />
        <button type="submit" />
      </Form>
    );
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'abc' },
    });
    fireEvent.click(screen.getByRole('button'));
    await waitFor(() => {
      expect(formValues).toEqual({ userName: 'abc' });
    });
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
    let formValues: object;
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
    fireEvent.change(screen.getByLabelText('Name'), {
      target: { value: 'abc' },
    });
    fireEvent.change(screen.getByLabelText('Email'), {
      target: { value: 'abc@example.com' },
    });
    fireEvent.change(screen.getByLabelText('Age'), {
      target: { value: 25 },
    });
    fireEvent.click(screen.getByRole('button'));
    await waitFor(() => {
      expect(formValues).toEqual({
        name: 'abc',
        email: 'abc@example.com',
        age: 25,
      });
      expect(screen.getByLabelText('Age').getAttribute('type')).toBe('number');
    });
  });

  test('empty initial values form', async () => {
    let formValues: object;
    render(
      <Form initialValues={{}} onSubmit={(values) => (formValues = values)}>
        <label htmlFor="name-input">Name</label>
        <Field id="name-input" name="name" />
        <label htmlFor="email-input">Email</label>
        <button type="submit" />
      </Form>
    );
    fireEvent.click(screen.getByRole('button'));
    await waitFor(() => {
      expect(formValues).toEqual({ name: '' });
    });
  });

  it('returns the same initial values passed to the form', async () => {
    let formValues: object;
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
    fireEvent.click(screen.getByRole('button'));
    await waitFor(() => {
      expect(formValues).toEqual({ name: 'abc', age: 25 });
    });
  });

  it('returns the initial values merged with the changed values', async () => {
    let formValues: object;
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
    fireEvent.change(screen.getByLabelText('Name'), {
      target: { value: 'xyz' },
    });
    fireEvent.click(screen.getByRole('button'));
    await waitFor(() => {
      expect(formValues).toEqual({ name: 'xyz', age: 25 });
    });
  });
});
