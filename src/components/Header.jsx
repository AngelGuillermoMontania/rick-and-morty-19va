import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function SearchAppBar({ handleSet }) {
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
            <Button
              onClick={() => handleSet("Alive")}
              variant="contained"
              color="success"
            >
              Alive
            </Button>
            <Button
              onClick={() => handleSet("Dead")}
              variant="contained"
              color="error"
            >
              Dead
            </Button>
            <Button
              onClick={() => handleSet("Unknown")}
              variant="contained"
              color="secondary"
            >
              Unknown
            </Button>
            <Button
              onClick={() => handleSet("")}
              variant="contained"
              color="primary"
            >
              Reset
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
