import { render, fireEvent, screen, getByRole } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Field, Form, CheckboxField, DatalistField } from '../src';

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
});
