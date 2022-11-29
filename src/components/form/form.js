import "./form.scss";

import {
  Typography,
  AppBar,
  Toolbar,
  TextField,
  Button,
  Box,
} from "@material-ui/core";
import * as React from "react";
export default function Form() {
  const [status, setStatus] = React.useState("none");
  return (
    <div className="App">
      <Box>
        <Button
          onClick={() => setStatus("Approved")}
          variant="contained"
          color="primary"
        >
          Approved
        </Button>
        <Button
          onClick={() => setStatus("Pending")}
          variant="contained"
          color="primary"
        >
          Pending
        </Button>
        <Button
          onClick={() => setStatus("Denied")}
          variant="contained"
          color="primary"
        >
          Denied
        </Button>
      </Box>

      <form className="group4">
        <Typography
          className={`${
            status === "Denied"
              ? "heading"
              : status === "Pending"
              ? "heading1"
              : "heading2"
          }`}
          variant="h5"
        >
          BASIC WITH MATERIAL UI
        </Typography>
        <Typography className="approve_deny">{status}</Typography>

        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="setgoal"
          variant="outlined"
        />
        {status === "Pending" ? (
          <Box className="approve_deny">
            <Button
              className="approve_request"
              variant="contained"
              color="primary"
            >
              Approve Request
            </Button>
            <Typography className="deny">Deny</Typography>
          </Box>
        ) : (
          ""
        )}
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="goal description"
          variant="outlined"
        />

        <Button variant="contained" color="primary">
          save
        </Button>
      </form>
    </div>
  );
}
