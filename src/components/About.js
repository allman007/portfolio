import React from "react";
import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const useStyles = makeStyles({
  mainContainer: {
    background: "#233",
  },
  about: {
    marginTop: "15px",
    marginLeft: "25%",
    color: "#9E9E9E",
    textAlign: "center",
    alignItems: "center",
    width: "50vw",
    lineHeight: "36px",
  },
});

const About = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Box component="header" className={classes.mainContainer}>
        <Grid container justify="center">
          <Typography
            variant="h4"
            style={{
              color: "tomato",
              textAlign: "center",
              textTransform: "uppercase",
              marginTop: "12px",
            }}
          >
            About me
          </Typography>
        </Grid>
      </Box>
      <Box component="div">
        <Typography variant="h5" align="center" className={classes.about}>
          <motion.h5
            animate={{ x: -0 }}
            initial={{ x: "-100vw" }}
            transition={{
              delay: 1.1,
              duration: 1,
              type: "spring",
              stiffness: 300,
            }}
          >
            Hi, you can call me Uche. Uche is a self-taught junior software
            developer who's learning process never finishes.
            <br /> Am a MERN(G) (MongoDB, Express, React, Node, GraphQL) stack
            developer, and I also know the following tools WordPress, Firebase,
            Git, Gatsby, Docker...etc <br />
            Am creative, adaptable, emotionally intelligent, am also a strong
            believer in teamwork because in my years of being a developer i have
            come to understand that no one knows it all and sometimes we get
            stuck and need someone to help us out. <br /> Am a graduate in
            Accountancy but my passion for tech drove me into software
            development and am enjoying that decision every day. Creating
            something from the scratch gives me a lot of happiness.
          </motion.h5>
        </Typography>
      </Box>
    </>
  );
};

export default About;
