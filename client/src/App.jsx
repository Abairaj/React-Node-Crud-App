import { useEffect } from "react";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import memories from "./assets/memories.png";
import Grow from "@mui/material/Grow";
import { Grid2 } from "@mui/material";
import Posts from "./components/Posts/Posts";
import Form from "./components/Forms/Form";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { getPosts } from "./state/slices/posts";
function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <>
      <Container maxwidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Grid2 container justifyContent="space-between">
            <Typography className={classes.heading} variant="h3" align="center">
              Memories
            </Typography>
            <img
              className={classes.image}
              src={memories}
              alt="memories"
              height="60"
            />
          </Grid2>
        </AppBar>
        <Grow in>
          <Container>
            <Grid2
              container
              justifyContent="space-between"
              alignItems="stretch"
              spacing={3}
            >
              <Grid2 item xs={12} sm={7}>
                <Posts />
              </Grid2>
              <Grid2 item xs={12} sm={4}>
                <Form />
              </Grid2>
            </Grid2>
          </Container>
        </Grow>
      </Container>
    </>
  );
}

export default App;
