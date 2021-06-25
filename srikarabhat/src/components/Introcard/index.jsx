import React from "react";
import Typewriter from "typewriter-effect";
import classes from "./Introcard.module.scss";

export default function Introcard(props) {
  const { welcomeText, name, downloadLink } = props;
  return (
    <div className={classes.introCardContainer}>
      <div className={classes.textContainer}>
      <div> Hii.. </div> 
      <div className={classes.name2}>
        <div className={classes.name}>Srikara</div>{`  Here..,`}
      </div>
    
      </div>
        <div className={classes.typeWriterText}>
        <Typewriter 
          onInit={
            (typeWriter) => {
              typeWriter.typeString("React native and React JS developer").pauseFor(2000).start()
            }
          }
        />
      </div>
    </div>
  );
}
