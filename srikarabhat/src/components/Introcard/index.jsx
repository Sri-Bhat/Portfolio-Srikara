import React from "react";
import classes from "./Introcard.module.scss";

export default function Introcard(props) {
  const { welcomeText, name, downloadLink } = props;
  return (
    <div className={classes.introCardContainer}>
      Hii Srikara Here.. (Portfolio is under progress)
    </div>
  );
}
