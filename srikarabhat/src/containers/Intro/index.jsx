import React from "react";
import Animate from 'react-smooth';
import Particles from 'react-particles-js';
import Images from "../../assets/images/index";
import Introcard from "../../components/Introcard";
import particles from "../../assets/particles";
import classes from "./Intro.module.scss";

export default function Intro() {
  return (
    <Animate to="1" from="0" attributeName="opacity" className={classes.introContainer}>
      <Particles
        params={particles}
        height="100vh"
        width="100vw"
      />
      <div className={classes.introContainer}>
          <Introcard/>
      </div>  
    </Animate>
  );
}
