import React from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./Navbar";
import ecomm from "../images/ecomm.png";
import hulu from "../images/hulu.png";
import socialApp from "../images/socialApp.png";
import chatapp from "../images/chatapp.png";

const useStyles = makeStyles({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 375,
    margin: "5rem auto",
  },
});

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Typography
        variant="h4"
        style={{
          color: "tomato",
          textAlign: "center",
          textTransform: "uppercase",
          marginTop: "19px",
          fontSize: "bold",
        }}
      >
        Projects
      </Typography>
      <Grid container justify="center">
        <Grid></Grid>
        {/* Project 1 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="ecomm"
                height="180"
                image={ecomm}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  e-Commerce with Redux
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <strong>TECHNOLOGY:</strong> React, Redux, React-Redux
                  <br />
                  React-Stripe-Checkout, Firebase, SASS...etc <br />
                  <br />
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <strong>FEATURES:</strong> Responsive web design, Google
                  Signin, Add to Cart...etc
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href="https://e-commence-mine-redux.web.app/"
                target="blank"
              >
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Project 2 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia component="img" alt="hulu" height="180" image={hulu} />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  MovieApp React.js
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <strong>TECHNOLOGY:</strong> React, Axios, Material-ui,
                  React-flip-move...etc
                  <br />
                  <br />
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <strong>FEATURES:</strong> Responsive web design, Fetching
                  live API, Animation...etc
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href="http://hulu-232c8.web.app/"
                target="blank"
              >
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Project 3 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="socialApp"
                height="180"
                image={socialApp}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  SocialApp with GraphQL
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <strong>TECHNOLOGY:</strong> React, React-Context, GraphQL,
                  Node, MongoDB, Apollo-graphQL, Semantic-ui, Socket.io,
                  JsonWebToken...etc
                  <br />
                  <br />
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <strong>FEATURES:</strong> Responsive web design,
                  Authentification, CRUD operations, Data Persistent
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href="http://loving-montalcini-0516ff.netlify.app/"
                target="blank"
              >
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Project 4 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 1"
                height="180"
                image={chatapp}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  ChatApp with Node
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <strong>TECHNOLOGY:</strong> Express.js, Socket.io, Node,
                  Handlebars
                  <br />
                  <br />
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <strong>FEATURES:</strong> Responsive web design, Live Chat,
                  Data not Persistent
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href="http://uchechatapp.herokuapp.com/"
                target="blank"
              >
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Portfolio;
