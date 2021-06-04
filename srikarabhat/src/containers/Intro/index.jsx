import React from "react";
import Images from "../../assets/images/index";
import Introcard from "../../components/Introcard";
import classes from "./Intro.module.scss";

export default function Intro() {
  return (
    <div className={classes.introContainer}>
      <Introcard />
      <img className={classes.profilePic} src={Images.profilePic} alt={" "} />
    </div>
  );
}
