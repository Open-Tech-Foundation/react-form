import { useFormContext } from '@open-tech-world/react-form';

export default function FormContext() {
  const { values, errors, visited } = useFormContext();
  return (
    <div style={{ display: 'flex' }}>
      <div
        style={{
          backgroundColor: '#001f3f',
          color: 'white',
          padding: '15px',
          marginTop: '15px',
        }}
      >
        <pre>{JSON.stringify(values, null, 4)}</pre>
      </div>
      <div
        style={{
          backgroundColor: '#001f3f',
          color: 'white',
          padding: '15px',
          marginTop: '15px',
        }}
      >
        <pre>{JSON.stringify(errors, null, 4)}</pre>
      </div>
      <div
        style={{
          backgroundColor: '#001f3f',
          color: 'white',
          padding: '15px',
          marginTop: '15px',
        }}
      >
        <pre>{JSON.stringify(visited, null, 4)}</pre>
      </div>
    </div>
  );
}
