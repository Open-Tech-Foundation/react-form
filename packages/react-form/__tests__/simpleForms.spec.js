import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Field, Form } from '../src';

describe('Simple Forms', () => {
  it('Creates an empty form with a role', () => {
    render(<Form />);
    expect(screen.getByRole('form')).toBeInTheDocument();
  });

  it('Creates a form with a text input', () => {
    render(
      <Form>
        <label htmlFor="username-input">Username</label>
        <input id="username-input" type="text" />
      </Form>
    );
    expect(screen.getByRole('form')).toBeInTheDocument();
    expect(screen.getByLabelText('Username')).toBeInTheDocument();
  });

  test('Add text to a Field input & submit the form', () => {
    let formValues;
    render(
      <Form onSubmit={(values) => (formValues = values)}>
        <Field component="input" name="userName" type="text" />
        <button type="submit" />
      </Form>
    );
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'abc' },
    });
    fireEvent.click(screen.getByRole('button'));
    expect(formValues).toEqual({ userName: 'abc' });
  });

  test('Email Field input type', () => {
    render(
      <Form>
        <Field component="input" name="email" type="email" />
      </Form>
    );
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('textbox').getAttribute('type')).toBe('email');
  });

  it('Returns values from multiple input fields when the form submitted', () => {
    let formValues;
    render(
      <Form onSubmit={(values) => (formValues = values)}>
        <label htmlFor="name-input">Name</label>
        <Field id="name-input" component="input" name="name" type="text" />
        <label htmlFor="email-input">Email</label>
        <Field id="email-input" component="input" name="email" type="email" />
        <label htmlFor="age-input">Age</label>
        <Field
          id="age-input"
          component="input"
          name="age"
          type="number"
          max="20"
        />
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
    expect(formValues).toEqual({
      name: 'abc',
      email: 'abc@example.com',
      age: 25,
    });
    expect(screen.getByLabelText('Age').getAttribute('type')).toBe('number');
  });
});
