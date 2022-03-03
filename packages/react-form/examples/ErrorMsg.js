import { Box } from "@mui/material";
import { useField } from "../src";

export default function ErrorMsg({ path }) {
  const { error } = useField(path);
  if (error) {
    return <Box sx={{ color: "error.main" }}>{error}</Box>;
  }

  return null;
}
