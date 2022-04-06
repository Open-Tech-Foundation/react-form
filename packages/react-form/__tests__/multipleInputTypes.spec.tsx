import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import {
  Field,
  Form,
  CheckboxField,
  DatalistField,
  SelectField,
  RadioGroupField,
} from '../src';

describe('Multiple Input Types', () => {
  test('Checkbox', async () => {
    let formValues: unknown;
    render(
      <Form onSubmit={(values) => (formValues = values)}>
        <CheckboxField name="newsletter" label="Send newsletter" />
        <button type="submit" />
      </Form>
    );
    fireEvent.click(screen.getByRole('button'));
    await waitFor(() => {
      expect(formValues).toEqual({});
    });
    fireEvent.click(screen.getByLabelText('Send newsletter'));
    fireEvent.click(screen.getByRole('button'));
    await waitFor(() => {
      expect(formValues).toEqual({ newsletter: true });
    });
    fireEvent.click(screen.getByLabelText('Send newsletter'));
    fireEvent.click(screen.getByRole('button'));
    await waitFor(() => {
      expect(formValues).toEqual({ newsletter: false });
    });
  });

  test('Checkbox group', async () => {
    let formValues: unknown;
    render(
      <Form
        initialValues={{ interests: [] }}
        onSubmit={(values) => (formValues = values)}
      >
        <CheckboxField name="interests" label="Art" value="art" />
        <CheckboxField name="interests" label="Coding" value="coding" />
        <CheckboxField name="interests" label="Music" value="music" />
        <button type="submit" />
      </Form>
    );
    fireEvent.click(screen.getByRole('button'));
    await waitFor(() => {
      expect(formValues).toEqual({ interests: [] });
    });
    fireEvent.click(screen.getByLabelText('Art'));
    fireEvent.click(screen.getByRole('button'));
    await waitFor(() => {
      expect(formValues).toEqual({ interests: ['art'] });
    });
    fireEvent.click(screen.getByLabelText('Music'));
    fireEvent.click(screen.getByRole('button'));
    await waitFor(() => {
      expect(formValues).toEqual({ interests: ['art', 'music'] });
    });
  });

  test('Checkbox group w/o initialValues', async () => {
    let formValues: unknown;
    render(
      <Form onSubmit={(values) => (formValues = values)}>
        <CheckboxField name="interests" label="Art" value="art" />
        <CheckboxField name="interests" label="Coding" value="coding" />
        <CheckboxField name="interests" label="Music" value="music" />
        <button type="submit" />
      </Form>
    );
    fireEvent.click(screen.getByRole('button'));
    await waitFor(() => {
      expect(formValues).toEqual({});
    });
    fireEvent.click(screen.getByLabelText('Art'));
    fireEvent.click(screen.getByRole('button'));
    await waitFor(() => {
      expect(formValues).toEqual({ interests: ['art'] });
    });
    fireEvent.click(screen.getByLabelText('Music'));
    fireEvent.click(screen.getByRole('button'));
    await waitFor(() => {
      expect(formValues).toEqual({ interests: ['art', 'music'] });
    });
  });

  test('Radio group field', async () => {
    let formValues: unknown;
    render(
      <Form
        initialValues={{ contact: '' }}
        onSubmit={(values) => (formValues = values)}
      >
        <RadioGroupField name="contact" label="Email" value="email" />
        <RadioGroupField name="contact" label="Phone" value="phone" />
        <RadioGroupField name="contact" label="Mail" value="mail" />
        <button type="submit" />
      </Form>
    );
    fireEvent.click(screen.getByRole('button'));
    await waitFor(() => {
      expect(formValues).toEqual({ contact: '' });
    });
    fireEvent.click(screen.getByLabelText('Email'));
    fireEvent.click(screen.getByRole('button'));
    await waitFor(() => {
      expect(formValues).toEqual({ contact: 'email' });
    });
    fireEvent.click(screen.getByLabelText('Phone'));
    fireEvent.click(screen.getByRole('button'));
    await waitFor(() => {
      expect(formValues).toEqual({ contact: 'phone' });
    });
  });

  test('Date input', async () => {
    let formValues: unknown;
    render(
      <Form
        initialValues={{ today: new Date() }}
        onSubmit={(values) => (formValues = values)}
      >
        <label htmlFor="date-input">Today</label>
        <Field id="date-input" name="today" type="date" />
        <button type="submit" />
      </Form>
    );

    fireEvent.change(screen.getByLabelText('Today'), {
      target: { value: '2020-01-01' },
    });
    fireEvent.click(screen.getByRole('button'));
    await waitFor(() => {
      expect(formValues).toEqual({ today: '2020-01-01' });
    });
  });

  test('Datalist type', async () => {
    let formValues: unknown;
    render(
      <Form
        initialValues={{ browser: '' }}
        onSubmit={(values) => (formValues = values)}
      >
        <DatalistField
          name="browser"
          options={[
            'Chrome',
            'Firefox',
            'Internet Explorer',
            'Opera',
            'Safari',
            'Microsoft Edge',
          ]}
        />
        <button type="submit" />
      </Form>
    );

    fireEvent.change(screen.getByRole('combobox'), {
      target: { value: 'Chrome' },
    });
    fireEvent.click(screen.getByRole('button'));
    await waitFor(() => {
      expect(formValues).toEqual({ browser: 'Chrome' });
    });
  });

  test('Select type', async () => {
    let formValues: unknown;
    render(
      <Form onSubmit={(values) => (formValues = values)}>
        <SelectField name="browser">
          <option value="chrome">Chrome</option>
          <option value="firefox">Firefox</option>
          <option value="opera">Opera</option>
        </SelectField>
        <button type="submit" />
      </Form>
    );

    fireEvent.change(screen.getByRole('combobox'), {
      target: { value: 'chrome' },
    });
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getAllByRole('option')).toHaveLength(3);
    await waitFor(() => {
      expect(formValues).toEqual({ browser: 'chrome' });
    });
  });

  test('Multiple Select type', async () => {
    let formValues: unknown;
    render(
      <Form onSubmit={(values) => (formValues = values)}>
        <SelectField name="browser" multiple>
          <option value="chrome">Chrome</option>
          <option value="firefox">Firefox</option>
          <option value="opera">Opera</option>
        </SelectField>
        <button type="submit" />
      </Form>
    );

    userEvent.selectOptions(screen.getByRole('listbox'), ['chrome', 'firefox']);
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getAllByRole('option')).toHaveLength(3);
    await waitFor(() => {
      expect(formValues).toEqual({ browser: ['chrome', 'firefox'] });
    });
  });

  test('Textarea type', async () => {
    let formValues: unknown;
    render(
      <Form
        initialValues={{ desc: '' }}
        onSubmit={(values) => (formValues = values)}
      >
        <Field name="desc" type="textarea" />
        <button type="submit" />
      </Form>
    );

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'abc \n xyz' },
    });
    fireEvent.click(screen.getByRole('button'));
    await waitFor(() => {
      expect(formValues).toEqual({ desc: 'abc \n xyz' });
    });
  });
});
