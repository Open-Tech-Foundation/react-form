import { useForm } from "../src";

export default function Values() {
  const { values } = useForm();
  return <pre>{JSON.stringify(values, null, 4)}</pre>;
}
