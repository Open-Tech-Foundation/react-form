import { useFormContext } from '@opentf/react-form';

export default function FormContext(params) {
  const formCtx = useFormContext();

  return (
    <div style={{ marginTop: '10px' }}>
      <div className="formContext">
        Values:
        <pre>{JSON.stringify(formCtx.values, null, 4)}</pre>
      </div>
      <div className="formContext">
        Errors:
        <pre>{JSON.stringify(formCtx.errors, null, 4)}</pre>
      </div>
      <div className="formContext">
        Visited:
        <pre>{JSON.stringify(formCtx.visited, null, 4)}</pre>
      </div>
    </div>
  );
}
