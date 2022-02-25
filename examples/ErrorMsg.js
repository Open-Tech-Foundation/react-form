import { Box } from "@mui/material";
import { useField } from "../src";

export default function ErrorMsg({ path }) {
  const { error } = useField();
  const msg = error(path);
  if (msg) {
    return <Box sx={{ color: "error.main" }}>{msg}</Box>;
  }

  return null;
}
