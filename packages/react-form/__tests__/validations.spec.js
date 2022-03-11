import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Field, Form } from '../src';
import ErrorMsg from './ErrorMsg';

describe('Validations', () => {
  test('empty validate fn', async () => {
    let formValues;
    render(
      <Form onSubmit={(values) => (formValues = values)} validate={() => {}}>
        <Field name="name" />
        <button type="submit" />
      </Form>
    );
    fireEvent.click(screen.getByRole('button'));
    await waitFor(() => {
      expect(formValues).toEqual({ name: '' });
    });
  });

  it('displays text field validation error', async () => {
    let formValues;
    render(
      <Form
        onSubmit={(values) => (formValues = values)}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = 'Required!';
          }
          return errors;
        }}
      >
        <Field name="name" />
        <ErrorMsg path="name" />
        <button type="submit" />
      </Form>
    );
    fireEvent.click(screen.getByRole('button'));
    await waitFor(() => {
      expect(screen.getByText('Required!')).toBeInTheDocument();
      expect(formValues).toBeUndefined();
    });
  });

  test('multiple validation errors', async () => {
    let formValues;
    render(
      <Form
        onSubmit={(values) => (formValues = values)}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = 'Name is required!';
          }
          if (!values.email.includes('@')) {
            errors.email = 'Invalid email address!';
          }
          if (values.age < 18) {
            errors.age = 'You must be a major';
          }
          return errors;
        }}
      >
        <label htmlFor="name-input">Name</label>
        <Field id="name-input" name="name" />
        <ErrorMsg path="name" />
        <label htmlFor="email-input">Email</label>
        <Field id="email-input" name="email" type="email" />
        <ErrorMsg path="email" />
        <label htmlFor="age-input">Age</label>
        <Field id="age-input" name="age" type="number" />
        <ErrorMsg path="age" />
        <button type="submit" />
      </Form>
    );

    fireEvent.click(screen.getByRole('button'));
    await waitFor(() => {
      expect(screen.getByText('Name is required!')).toBeInTheDocument();
      expect(screen.getByText('Invalid email address!')).toBeInTheDocument();
      expect(screen.getByText('You must be a major')).toBeInTheDocument();
      expect(formValues).toBeUndefined();
    });

    fireEvent.change(screen.getByLabelText('Name'), {
      target: { value: 'abc' },
    });
    fireEvent.click(screen.getByRole('button'));
    await waitFor(() => {
      expect(screen.queryByText('Invalid email address!')).toBeInTheDocument();
      expect(screen.queryByText('You must be a major')).toBeInTheDocument();
      expect(formValues).toBeUndefined();
    });

    fireEvent.change(screen.getByLabelText('Email'), {
      target: { value: 'abc@example.com' },
    });
    fireEvent.click(screen.getByRole('button'));
    await waitFor(() => {
      expect(
        screen.queryByText('Invalid email address!')
      ).not.toBeInTheDocument();
      expect(screen.queryByText('You must be a major')).toBeInTheDocument();
      expect(formValues).toBeUndefined();
    });

    fireEvent.change(screen.getByLabelText('Age'), {
      target: { value: 15 },
    });
    fireEvent.click(screen.getByRole('button'));
    await waitFor(() => {
      expect(screen.queryByText('You must be a major')).toBeInTheDocument();
      expect(formValues).toBeUndefined();
    });

    fireEvent.change(screen.getByLabelText('Age'), {
      target: { value: 20 },
    });
    fireEvent.click(screen.getByRole('button'));
    await waitFor(() => {
      expect(screen.queryByText('You must be a major')).not.toBeInTheDocument();
      expect(formValues).toEqual({
        age: 20,
        email: 'abc@example.com',
        name: 'abc',
      });
    });
  });

  test('Blur the fields to show validation errors', async () => {
    let formValues;
    render(
      <Form
        onSubmit={(values) => (formValues = values)}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = 'Name is required!';
          }
          if (!values.email.includes('@')) {
            errors.email = 'Invalid email address!';
          }
          if (values.age < 18) {
            errors.age = 'You must be a major';
          }
          return errors;
        }}
      >
        <label htmlFor="name-input">Name</label>
        <Field id="name-input" name="name" />
        <ErrorMsg path="name" />
        <label htmlFor="email-input">Email</label>
        <Field id="email-input" name="email" type="email" />
        <ErrorMsg path="email" />
        <label htmlFor="age-input">Age</label>
        <Field id="age-input" name="age" type="number" />
        <ErrorMsg path="age" />
        <button type="submit" />
      </Form>
    );

    screen.getByLabelText('Name').focus();
    screen.getByLabelText('Name').blur();
    await waitFor(() => {
      expect(screen.getByText('Name is required!')).toBeInTheDocument();
    });

    screen.getByLabelText('Email').focus();
    screen.getByLabelText('Email').blur();
    await waitFor(() => {
      expect(screen.getByText('Name is required!')).toBeInTheDocument();
      expect(screen.getByText('Invalid email address!')).toBeInTheDocument();
    });
    
    screen.getByLabelText('Age').focus();
    fireEvent.change(screen.getByLabelText('Age'), { target: { value: 17 } });
    screen.getByLabelText('Age').blur();
    await waitFor(() => {
      expect(screen.getByText('Name is required!')).toBeInTheDocument();
      expect(screen.getByText('Invalid email address!')).toBeInTheDocument();
      expect(screen.getByText('You must be a major')).toBeInTheDocument();
    });

    screen.getByLabelText('Age').focus();
    fireEvent.change(screen.getByLabelText('Age'), { target: { value: 20 } });
    screen.getByLabelText('Age').blur();
    await waitFor(() => {
      expect(screen.getByText('Name is required!')).toBeInTheDocument();
      expect(screen.getByText('Invalid email address!')).toBeInTheDocument();
      expect(screen.queryByText('You must be a major')).not.toBeInTheDocument();
    });
  });
});
