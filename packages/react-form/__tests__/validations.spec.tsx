import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import { Field, Form } from '../src';
import ErrorMsg from './ErrorMsg';
import { Errors } from '../src/types';

describe('Validations', () => {
  test('No validate fn', async () => {
    let formValues: object;
    render(
      <Form
        initialValues={{ name: '' }}
        onSubmit={(values) => (formValues = values as object)}
      >
        <Field name="name" />
        <button type="submit" />
      </Form>
    );
    await userEvent.click(screen.getByRole('button'));
    await waitFor(() => {
      expect(formValues).toEqual({ name: '' });
    });
  });

  it('displays text field validation error', async () => {
    interface FormValues {
      name: string;
    }

    const initialValues: FormValues = { name: '' };

    let formValues: object;
    render(
      <Form
        initialValues={initialValues}
        onSubmit={(values) => (formValues = values)}
        validate={(values) => {
          const errors: Errors<FormValues> = {};
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
    await userEvent.click(screen.getByRole('button'));
    await waitFor(() => {
      expect(screen.getByText('Required!')).toBeInTheDocument();
      expect(formValues).toBeUndefined();
    });
  });

  test('multiple validation errors', async () => {
    let formValues: object;
    interface FormValues {
      name: string;
      email: string;
      age: number;
    }
    const initialValues: FormValues = { name: '', email: '', age: 0 };
    render(
      <Form
        initialValues={initialValues}
        onSubmit={(values) => (formValues = values)}
        validate={(values) => {
          const errors: Errors<FormValues> = {};
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

    await userEvent.click(screen.getByRole('button'));
    await waitFor(() => {
      expect(screen.getByText('Name is required!')).toBeInTheDocument();
      expect(screen.getByText('Invalid email address!')).toBeInTheDocument();
      expect(screen.getByText('You must be a major')).toBeInTheDocument();
      expect(formValues).toBeUndefined();
    });

    await userEvent.type(screen.getByLabelText('Name'), 'abc');
    await userEvent.click(screen.getByRole('button'));
    await waitFor(() => {
      expect(screen.queryByText('Invalid email address!')).toBeInTheDocument();
      expect(screen.queryByText('You must be a major')).toBeInTheDocument();
      expect(formValues).toBeUndefined();
    });

    await userEvent.type(screen.getByLabelText('Email'), 'abc@example.com');
    await userEvent.click(screen.getByRole('button'));
    await waitFor(() => {
      expect(
        screen.queryByText('Invalid email address!')
      ).not.toBeInTheDocument();
      expect(screen.queryByText('You must be a major')).toBeInTheDocument();
      expect(formValues).toBeUndefined();
    });

    await userEvent.type(screen.getByLabelText('Age'), '15');
    await userEvent.click(screen.getByRole('button'));
    await waitFor(() => {
      expect(screen.queryByText('You must be a major')).toBeInTheDocument();
      expect(formValues).toBeUndefined();
    });

    await userEvent.clear(screen.getByLabelText('Age'));
    await userEvent.type(screen.getByLabelText('Age'), '20');
    await userEvent.click(screen.getByRole('button'));
    await waitFor(() => {
      expect(screen.queryByText('You must be a major')).not.toBeInTheDocument();
      expect(formValues).toEqual({
        age: '20',
        email: 'abc@example.com',
        name: 'abc',
      });
    });
  });

  test('Blur the fields to show validation errors', async () => {
    interface FormValues {
      name: string;
      email: string;
      age: number;
    }
    const initialValues: FormValues = { name: '', email: '', age: 0 };

    render(
      <Form
        initialValues={initialValues}
        onSubmit={() => undefined}
        validate={(values) => {
          const errors: Errors<FormValues> = {};
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
    await userEvent.type(screen.getByLabelText('Age'), '17');
    screen.getByLabelText('Age').blur();
    await waitFor(() => {
      expect(screen.getByText('Name is required!')).toBeInTheDocument();
      expect(screen.getByText('Invalid email address!')).toBeInTheDocument();
      expect(screen.getByText('You must be a major')).toBeInTheDocument();
    });

    screen.getByLabelText('Age').focus();
    await userEvent.type(screen.getByLabelText('Age'), '20');
    screen.getByLabelText('Age').blur();
    await waitFor(() => {
      expect(screen.getByText('Name is required!')).toBeInTheDocument();
      expect(screen.getByText('Invalid email address!')).toBeInTheDocument();
      expect(screen.queryByText('You must be a major')).not.toBeInTheDocument();
    });
  });
});
