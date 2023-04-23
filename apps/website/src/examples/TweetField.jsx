import { useField } from '@opentf/react-form';

export default function TweetField({ name }) {
  const { field, error } = useField(name);
  return (
    <div style={{ width: '250px', height: '150px' }}>
      <textarea
        {...field}
        onChange={(e) => field.onChange(e.target.value)}
        placeholder="Type here..."
        style={{ width: '100%' }}
        rows="5"
        maxLength={140}
      />
      <div style={{ color: 'red' }}>{error}</div>
      <div style={{ textAlign: 'right' }}>
        {field.value.length} / 140 Characters
      </div>
    </div>
  );
}
