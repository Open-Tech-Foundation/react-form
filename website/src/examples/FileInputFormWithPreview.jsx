import { FileField, Form } from '@open-tech-world/react-form';
import { useState } from 'react';

export default function App() {
  const [file, setFile] = useState(null);
  const renderPreview = () => {
    if (file instanceof File) {
      return <img src={URL.createObjectURL(file)} width="100" height="100" />;
    }

    return (
      <img
        src="https://fonts.gstatic.com/s/i/materialicons/person/v17/24px.svg"
        width="100"
        height="100"
      />
    );
  };

  return (
    <div>
      <Form
        onSubmit={async (values) => {
          if (values.photo && values.photo.length > 0) {
            alert(values.photo[0].name + ' Saved!');
          } else {
            alert('There has been no change to the profile picture.');
          }
        }}
      >
        <div>
          <label>Change profile picture (PNG, JPG)</label>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            {renderPreview()}
            <FileField
              name="photo"
              accept=".jpg, .jpeg, .png"
              onFilesChange={(files) => {
                setFile(files[0]);
              }}
            />
          </div>
        </div>
        <div>
          <button type="submit">Save</button>
        </div>
      </Form>
    </div>
  );
}
