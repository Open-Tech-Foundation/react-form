import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import Sidebar from "./Sidebar";
import { Route, Routes } from "react-router-dom";
import SimpleForm from "./SimpleForm";
import Validations from "./Validations";
import NestedFields from "./NestedFields";
import FieldArrayForm from "./FieldArrayForm";
import CheckboxForm from "./CheckboxForm";
import RadioGroupForm from "./RadioGroupForm";

const drawerWidth = 240;

export function App() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar>
            <Typography variant="h6" color="inherit" component="div">
              Examples
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            <Sidebar />
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <Routes>
            <Route path="/" element={<SimpleForm />} />
            <Route path="/validations" element={<Validations />} />
            <Route path="/nested-fields" element={<NestedFields />} />
            <Route path="/field-array-form" element={<FieldArrayForm />} />
            <Route path="/checkbox-form" element={<CheckboxForm />} />
            <Route path="/radio-group-form" element={<RadioGroupForm />} />
          </Routes>
        </Box>
      </Box>
    </>
  );
}
