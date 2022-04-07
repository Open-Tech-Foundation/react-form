import { useFormContext } from '@open-tech-world/react-form';

export default function FormContext() {
  const { values, errors, visited } = useFormContext();
  return (
    <div className="form-context">
      <div className="form-context__output">
        Values:
        <pre>{JSON.stringify(values, null, 4)}</pre>
      </div>
      <div className="form-context__output">
        Errors:
        <pre>{JSON.stringify(errors, null, 4)}</pre>
      </div>
      <div className="form-context__output">
        Visited / Touched:
        <pre>{JSON.stringify(visited, null, 4)}</pre>
      </div>
    </div>
  );
}
