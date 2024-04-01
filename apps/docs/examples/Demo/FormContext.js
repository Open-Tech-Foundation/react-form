import { useFormContext } from '@opentf/react-form';

export default function FormContext(params) {
  const formCtx = useFormContext();

  return (
    <div
      style={{
        margin: '15px',
        fontFamily: 'monospace',
      }}
    >
      <div style={{ marginTop: '15px', background: '#eef9fd', color: '#193c47', padding: '15px' }}>
        Values:
        <pre>{JSON.stringify(formCtx.values, null, 4)}</pre>
      </div>
      <div style={{ marginTop: '15px', background: '#eef9fd', color: '#193c47', padding: '15px' }}>
        Errors:
        <pre>{JSON.stringify(formCtx.errors, null, 4)}</pre>
      </div>
      <div style={{ marginTop: '15px', background: '#eef9fd', color: '#193c47', padding: '15px' }}>
        Visited:
        <pre>{JSON.stringify(formCtx.visited, null, 4)}</pre>
      </div>
    </div>
  );
}
