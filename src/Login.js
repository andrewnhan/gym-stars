import "./App.css";
import { Button, Grid, TextField } from "@material-ui/core";

const Login = () => {
  return (
    <Grid
      container
      spacing={3}
      direction="column"
      justify="center"
      alignItems="center"
    >
      {" "}
      <Grid item xs={4}>
        <TextField id="outlined-basic" label="Username" variant="outlined" />
      </Grid>
      <Grid item xs={4}>
        <TextField
          type="password"
          id="outlined-basic"
          label="Password"
          variant="outlined"
        />
      </Grid>
      <Grid
        container
        item
        xs={4}
        spacing={3}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={4}>
          <Button variant="contained">SIGN IN</Button>
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained">REGISTER</Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
