import { useFormContext } from "../../../packages/react-form/src";

export default function FormContext() {
  const formCtx = useFormContext();

  return (
    <div style={{ marginTop: '10px' }}>
      Values:
      <pre>{JSON.stringify(formCtx.values, null, 4)}</pre>
      Errors:
      <pre>{JSON.stringify(formCtx.errors, null, 4)}</pre>
      Visited:
      <pre>{JSON.stringify(formCtx.visited, null, 4)}</pre>
    </div>
  );
}
