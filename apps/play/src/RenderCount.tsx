let count = 0;

export default function RenderCount() {
  count++;

  return <div>Render Count: {count}</div>;
}
