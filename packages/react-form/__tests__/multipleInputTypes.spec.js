import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import { Field, Form, CheckboxField, DatalistField, SelectField, RadioGroupField } from '../src';

describe('Multiple Input Types', () => {
  test('Checkbox', () => {
    let formValues;
    render(
      <Form onSubmit={(values) => (formValues = values)}>
        <CheckboxField name="newsletter" label="Send newsletter" />
        <button type="submit" />
      </Form>
    );
    fireEvent.click(screen.getByRole('button'));
    expect(formValues).toEqual({ newsletter: '' });
    fireEvent.click(screen.getByLabelText('Send newsletter'));
    fireEvent.click(screen.getByRole('button'));
    expect(formValues).toEqual({ newsletter: true });
    fireEvent.click(screen.getByLabelText('Send newsletter'));
    fireEvent.click(screen.getByRole('button'));
    expect(formValues).toEqual({ newsletter: false });
  });

  test('Checkbox group', () => {
    let formValues;
    render(
      <Form onSubmit={(values) => (formValues = values)}>
        <CheckboxField name="interests" label="Art" value="art" />
        <CheckboxField name="interests" label="Coding" value="coding" />
        <CheckboxField name="interests" label="Music" value="music" />
        <button type="submit" />
      </Form>
    );
    fireEvent.click(screen.getByRole('button'));
    expect(formValues).toEqual({ interests: [] });
    fireEvent.click(screen.getByLabelText('Art'));
    fireEvent.click(screen.getByRole('button'));
    expect(formValues).toEqual({ interests: ['art'] });
    fireEvent.click(screen.getByLabelText('Music'));
    fireEvent.click(screen.getByRole('button'));
    expect(formValues).toEqual({ interests: ['art', 'music'] });
  });

  test('Radio group field', () => {
    let formValues;
    render(
      <Form onSubmit={(values) => (formValues = values)}>
        <RadioGroupField name="contact" label="Email" value="email" />
        <RadioGroupField name="contact" label="Phone" value="phone" />
        <RadioGroupField name="contact" label="Mail" value="mail" />
        <button type="submit" />
      </Form>
    );
    fireEvent.click(screen.getByRole('button'));
    expect(formValues).toEqual({ contact: '' });
    fireEvent.click(screen.getByLabelText('Email'));
    fireEvent.click(screen.getByRole('button'));
    expect(formValues).toEqual({ contact: 'email' });
    fireEvent.click(screen.getByLabelText('Phone'));
    fireEvent.click(screen.getByRole('button'));
    expect(formValues).toEqual({ contact: 'phone' });
  });

  test('Date input', () => {
    let formValues;
    render(
      <Form onSubmit={(values) => (formValues = values)}>
        <label htmlFor="date-input">Today</label>
        <Field id="date-input" name="today" component="input" type="date" />
        <button type="submit" />
      </Form>
    );

    fireEvent.change(screen.getByLabelText('Today'), {
      target: { value: '2020-01-01' },
    });
    fireEvent.click(screen.getByRole('button'));
    expect(formValues).toEqual({ today: '2020-01-01' });
  });

  test('Datalist type', () => {
    let formValues;
    render(
      <Form onSubmit={(values) => (formValues = values)}>
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
    expect(formValues).toEqual({ browser: 'Chrome' });
  });

  test('Select type', () => {
    let formValues;
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
    expect(formValues).toEqual({ browser: 'chrome' });
  });

  test('Multiple Select type', () => {
    let formValues;
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
    expect(formValues).toEqual({ browser: ['chrome', 'firefox'] });
  });

  test('Textarea type', () => {
    let formValues;
    render(
      <Form onSubmit={(values) => (formValues = values)}>
        <Field name="desc" type="textarea" />
        <button type="submit" />
      </Form>
    );

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'abc \n xyz' },
    });
    fireEvent.click(screen.getByRole('button'));
    expect(formValues).toEqual({ desc: 'abc \n xyz' });
  });
});
