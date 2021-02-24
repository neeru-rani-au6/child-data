import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/action/user";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const classes = useStyles();
  const user = useSelector((state) => state.userReducer);
  const history = useHistory();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    email: "",
    name: "",
    isSubmitting: false,
  });
  const handleChange = (key, value) => {
    setState({
      ...state,
      [key]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setState({ ...state, isSubmitting: true });
    await dispatch(loginUser(state));
    setState({ ...state, isSubmitting: false });
    if (!user.error) {
      history.push("/home");
    }
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="name"
            label="name"
            type="name"
            id="name"
            autoComplete="current-name"
            value={state.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={state.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
          {user.error && (
            <Grid item xs={12} className="error">
              <div className="error">{user.error}</div>
            </Grid>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={state.isSubmitting}
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
}
