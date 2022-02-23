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
      </List>
    </div>
  );
}
