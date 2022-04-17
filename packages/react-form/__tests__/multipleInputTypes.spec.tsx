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
  FileField,
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

  // Todo - Check with user-event lib for fix

  // test('Multiple Select type', async () => {
  //   let formValues: unknown;
  //   render(
  //     <Form onSubmit={(values) => (formValues = values)}>
  //       <SelectField name="browser" multiple>
  //         <option value="chrome">Chrome</option>
  //         <option value="firefox">Firefox</option>
  //         <option value="opera">Opera</option>
  //       </SelectField>
  //       <button type="submit" />
  //     </Form>
  //   );

  //   expect(screen.getAllByRole('option')).toHaveLength(3);
  //   await userEvent.selectOptions(screen.getByRole('listbox'), [
  //     'firefox',
  //     'chrome',
  //   ]);
  //   fireEvent.click(screen.getByRole('button'));
  //   await waitFor(() => {
  //     expect(formValues).toEqual({ browser: ['chrome', 'firefox'] });
  //   });
  // });

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

  test('FileField - Single', async () => {
    const photoFile = new File(['hello'], 'hello.png', { type: 'image/png' });
    interface FormValues {
      photo: FileList | string;
    }
    let formValues: FormValues;
    const initialValues: FormValues = { photo: '' };
    render(
      <Form
        initialValues={initialValues}
        onSubmit={(values) => (formValues = values)}
      >
        <div>
          <label htmlFor="photo">Photo</label>
          <FileField id="photo" name="photo" />
        </div>
        <button type="submit">Submit</button>
      </Form>
    );

    userEvent.upload(screen.getByLabelText('Photo'), photoFile);
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
    await waitFor(() => {
      expect((formValues.photo as FileList).item(0)).toEqual(photoFile);
    });
  });

  test('FileField - Multiple', async () => {
    const file1 = new File(['hello1'], 'hello1.png', { type: 'image/png' });
    const file2 = new File(['hello1'], 'hello2.png', { type: 'image/png' });
    interface FormValues {
      myFiles: FileList | string;
    }
    let formValues: FormValues;
    const initialValues: FormValues = { myFiles: '' };
    render(
      <Form
        initialValues={initialValues}
        onSubmit={(values) => (formValues = values)}
      >
        <div>
          <label htmlFor="myFiles">My Files</label>
          <FileField id="myFiles" name="myFiles" multiple clearable />
        </div>
        <button type="submit">Submit</button>
      </Form>
    );

    userEvent.upload(screen.getByLabelText('My Files'), [file1, file2]);
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
    await waitFor(() => {
      expect(formValues.myFiles as FileList).toHaveLength(2);
    });
    fireEvent.click(screen.getByRole('button', { name: 'Clear' }));
    await waitFor(() => {
      expect(formValues.myFiles as FileList).toHaveLength(0);
    });
  });
});
