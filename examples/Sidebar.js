import { Divider, List, ListItem, ListItemText, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem>
          <Link to="/">Simple Form</Link>
        </ListItem>
        <ListItem>
          <Link to="/validations">Validations</Link>
        </ListItem>
        <ListItem>
          <Link to="/nested-fields">Nested Fields</Link>
        </ListItem>
        <ListItem>
          <Link to="/field-array-form">FieldArray Form</Link>
        </ListItem>
        <ListItem>
          <Link to="/checkbox-form">Checkbox Form</Link>
        </ListItem>
      </List>
    </div>
  );
}
