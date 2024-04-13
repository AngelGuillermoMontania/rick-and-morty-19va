import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#000000c9" }}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Rick and Morty APP
          </Typography>
          <Stack spacing={2} direction="row">
            <Link to="/Alive">
              <Button variant="contained" color="success">
                Alive
              </Button>
            </Link>

            <Link to="/Dead">
              <Button variant="contained" color="error">
                Dead
              </Button>
            </Link>
            <Link to="/unknown">
              <Button variant="contained" color="secondary">
                Unknown
              </Button>
            </Link>
            <Link to="/">
              <Button variant="contained" color="primary">
                Reset
              </Button>
            </Link>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
