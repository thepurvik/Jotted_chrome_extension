import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { Button } from "@mui/material";

import jotted_Extention_Logo from "../assets/Images/jotted_Extention_Logo.png";
import { SwitchOff_Icon } from "../assets/Icons/SwitchOff_Icon";
import { SwitchOn_Icon } from "../assets/Icons/SwitchOn_Icon";
import { useEffect } from "react";

const useStyles = makeStyles({
  root: {
    width: "300px",
    height: "auto",
    textAlign: "center",
    backgroundColor: "#F5EBDD",
    borderBottomLeftRadius: "20px",
    borderBottomRightRadius: "20px",
    padding: "10px 0",
  },
  MainBox: {
    padding: "0px 33px",
    margin: "auto",
  },
  Jotted_Logo: {
    textAlign: "center",
    "& img": {
      marginTop: "15px",
    },
  },
  learningPara: {
    "& p": {
      fontWeight: " 400",
      fontSize: " 12px",
      lineHeight: " 18px",
      color: "#684D45",
      textAlign: "left",
      letterSpacing: "0.2px",
      "& span": {
        fontWeight: " 700",
        fontSize: " 12px",
        lineHeight: " 18px",
        color: "#684D45",
        letterSpacing: "0.2px",
      },
    },
  },
  learningPara1: {
    marginTop: "20px",
    "& p": {
      fontWeight: " 400",
      fontSize: " 10px",
      lineHeight: " 15px",
      color: "#684D45",
      textAlign: "left",
      opacity: "0.5",
      letterSpacing: "0.2px",
    },
  },
  jottedSwitch: {
    marginTop: "20px",
  },
  JottedBtn: {
    marginTop: "21px",
    "& .MuiButton-root": {
      fontWeight: " 600",
      fontSize: " 24px",
      lineHeight: " 36px",
      background: "#E8CD94",
      borderRadius: "8px",
      padding: "9px 7px",
      "&:hover": {
        background: "#E8CD94",
      },
    },
  },

  // displayNone: {
  //   display: 'none !important',
  // },
});

const Jotted_Learningmode = ({ onSuccess, ...props }) => {
  const classes = useStyles();
  const [show, setShow] = useState(false);

  // const handelClick = () => {
  //   window.location = 'http://localhost:3000';
  // };

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        window.close();
        onSuccess();
      }, 200);
    }
  }, [show]);

  return (
    <>
      <Box className={classes.root}>
        <Box className={classes.MainBox}>
          <Box className={classes.Jotted_Logo}>
            <img src={jotted_Extention_Logo} />
          </Box>
          <Box className={classes.learningPara}>
            <p>
              You just saved a resource, would you like{" "}
              <span> Active Learning Mode?</span>
            </p>
          </Box>
          <Box className={classes.learningPara1}>
            <p>
              Jotted will record your search queries and help you identify gaps
              in your learning!
            </p>
          </Box>
          <Box className={classes.jottedSwitch}>
            <span onClick={() => setShow(!show)}>
              {!show ? <SwitchOff_Icon /> : <SwitchOn_Icon />}
            </span>
          </Box>
          {/* <Box className={classes.JottedBtn}>
            <Button variant='contained' onClick={() => handelClick()}>
              Jotted
            </Button>
          </Box> */}
        </Box>
      </Box>
    </>
  );
};

export default Jotted_Learningmode;
