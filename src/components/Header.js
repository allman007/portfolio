import React from "react";
import { Avatar, Box, Grid, makeStyles, Typography } from "@material-ui/core";
import uche from "./uche.png";
import ReactTyped from "react-typed";

//Css Styles
const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(19),
    height: theme.spacing(19),
    margin: theme.spacing(1),
    backgroundColor: "yellow",
    padding: "10px 10px 0 10px",
  },
  title: {
    color: "tomato",
  },
  subtitle: {
    color: "tan",
    marginBottom: "3rem",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={uche} alt="uche" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <ReactTyped strings={["Nwanji H Uche"]} typeSpeed={30} />
      </Typography>
      <br />
      <Typography className={classes.subtitle} variant="h5">
        <ReactTyped
          strings={["Web Developer", "Web Designer", "MERN(G) Stack Developer"]}
          typeSpeed={35}
          backSpeed={60}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;
