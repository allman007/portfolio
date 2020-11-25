import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import Twitter from "@material-ui/icons/Twitter";
import { GitHub, LinkedIn } from "@material-ui/icons";

const Footer = () => {
  return (
    <BottomNavigation width="auto" style={{ background: "#222" }}>
      <BottomNavigationAction
        // className={classes.root}
        style={{ padding: 0, color: "white" }}
        icon={<GitHub />}
        href="https://github.com/allman007"
        target="blank"
      />
      <BottomNavigationAction
        // className={classes.root}
        style={{ padding: 0, color: "white" }}
        icon={<Twitter />}
        href="https://twitter.com/nwanji_uche"
        target="blank"
      />
      <BottomNavigationAction
        // className={classes.root}
        style={{ padding: 0, color: "white" }}
        icon={<LinkedIn />}
        href="www.linkedin.com/in/nwanji-uche-007"
        target="blank"
      />
    </BottomNavigation>
  );
};

export default Footer;
