/* global chrome */
import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import jotted_Extention_Logo from "../assets/Images/jotted_Extention_Logo.png";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { IconButton } from "@material-ui/core";
import { Url_Icon } from "../assets/Icons/Url_Icon";

const useStyles = makeStyles({
  root: {
    width: "412px",
    height: "fit-content",
    textAlign: "center",
    backgroundColor: "#F5EBDD",
    borderBottomLeftRadius: "20px",
    borderBottomRightRadius: "20px",
    padding: "10px 0",
  },
  MainBox: {
    width: "326px",
    margin: "auto",
  },
  Jotted_Logo: {
    textAlign: "center",
    "& img": {
      marginTop: "15px",
    },
  },
  ExtentionTextField: {
    textAlign: "center",
    marginTop: "10px",
    "& .MuiFormLabel-root ": {
      fontFamily: "Poppins",
      fontStyle: " normal",
      fontWeight: " 800",
      fontSize: " 15px",
      textAlign: "left",
      marginBottom: "5px",
      lineHeight: " 22px",
      letterSpacing: "0.2px",
      color: "#684D45",
    },
    "& .MuiTextField-root": {
      backgroundColor: "#fff",
      "& fieldset": {
        borderRadius: "8px",
        border: "0.5px solid #684D45",
      },
      "& .Mui-focused fieldset": {
        borderColor: "#684D45",
      },
      "& ::placeholder": {
        fontFamily: "Poppins-Regular",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "20px",
        lineHeight: "30px",
        color: "#171312",
        letterSpacing: "0.2px",
        opacity: "0.5",
        textAlign: "center",
      },
    },
  },
  multiSelect: {
    "& .MuiFormLabel-root ": {
      fontFamily: "Poppins",
      fontStyle: " normal",
      fontWeight: " 800",
      fontSize: " 15px",
      textAlign: "left",
      marginBottom: "5px",
      marginTop: "10px",
      lineHeight: " 22px",
      letterSpacing: "0.2px",
      color: "#684D45",
    },
  },
  selectDropdownItems: {
    "& .MuiSelect-select": {
      fontFamily: "Poppins-Regular",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "24px",
      color: "#848180",
      opacity: "1",
      textAlign: "left",
      background: "#FFFFFF",
      borderRadius: "8px",
      // border: 'none',
      border: " 0.5px solid #684D45",
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: "8px",
      "& .MuiOutlinedInput-notchedOutline": {
        border: "none",
      },
    },
    "& .Mui-focused ": {
      borderRadius: "8px",
      border: "none",
    },
    "& .MuiSelect-icon": {
      color: "#684D45",
    },
  },
  paper: {
    "&.MuiPaper-root": {
      // width: '20%',
      marginTop: "20px",
      background: "#F1F0ED",
      opacity: "0.5",
      borderRadius: "8px",
    },
    // border: '1px solid red'
  },
  list: {
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontFamily: "Poppins-Regular",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "20px",
    lineHeight: "30px",
    color: "#171312",
    opacity: "0.8",
    letterSpacing: "0.2px",
    width: "100%",
    // opacity: '0.1',

    "& li": {
      borderBottom: " 1.3px solid #684D45",
      width: "90%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      "&:last-child": {
        borderBottom: "none",
      },
    },
    "& li.Mui-selected": {
      color: "#171312",
      opacity: "0.4",
      // background: '#6EC177'
    },
  },
  jotted_Extention_Para: {
    marginTop: "13px",
    "& p": {
      fontStyle: " italic",
      fontWeight: " 400",
      fontSize: " 10px",
      lineHeight: " 15px",
      letterSpacing: " 0.2px",
      color: "#684D45",
      margin: "0",
      opacity: "0.5",
      textAlign: "left",
    },
  },

  SaveBtn: {
    marginTop: "21px",
    width: "326px",
    height: "48px",
    "& .MuiButton-root": {
      fontWeight: " 600",
      fontSize: " 24px",
      lineHeight: " 36px",
      background: "#E8CD94",
      borderRadius: "8px",
      // padding: '14px 72px',
      width: "100%",
      "&:hover": {
        background: "#E8CD94",
      },
    },
  },
});

const Jotted_Page1 = ({ onSuccess, ...props }) => {
  const classes = useStyles();
  const [jottedValue, setJottedValue] = useState(2);
  const [values, setValues] = useState({
    currentUrl: "",
  });

  useEffect(() => {
    //TODO: UNCOMMENT THOS
    // chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    //   setValues({ ...values, currentUrl: tabs[0].url });
    // });
  }, []);

  const jottedExtentionhandleChange = (event) => {
    event.target.value === 1 ? setJottedValue(1) : setJottedValue(0);
  };

  const menuProps = {
    classes: {
      list: classes.list,
      paper: classes.paper,
    },
  };
  return (
    <>
      <Box className={classes.root}>
        <Box className={classes.MainBox}>
          <Box className={classes.Jotted_Logo}>
            <img src={jotted_Extention_Logo} />
          </Box>
          <Box className={classes.ExtentionTextField}>
            <InputLabel className={classes.inputLabel}>
              Currently Viewing:
            </InputLabel>
            <TextField
              id="outlined-basic"
              placeholder="Web URL Article Title"
              variant="outlined"
              sx={{ width: "100%" }}
              value={values.currentUrl}
              InputProps={{
                endAdornment: (
                  <IconButton>
                    <Url_Icon />
                  </IconButton>
                ),
              }}
            />
          </Box>

          <Box className={classes.jotted_Extention_Para}>
            <p>Is this resource helpful?</p>
          </Box>

          <Box className={classes.multiSelect}>
            <InputLabel
              className={classes.inputLabel}
              sx={{ marginTop: "21px" }}
            >
              Save to:
            </InputLabel>
            <FormControl fullWidth className={classes.selectDropdownItems}>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Tree"
                value={jottedValue}
                MenuProps={menuProps}
                onChange={jottedExtentionhandleChange}
                sx={{ width: "100%" }}
              >
                <MenuItem value={2} className={classes.displayNone}>
                  Subject Title
                </MenuItem>
                <MenuItem value={1}>YES</MenuItem>
                <MenuItem value={0}>NO</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box className={classes.multiSelect} sx={{ marginTop: "10px" }}>
            <FormControl fullWidth className={classes.selectDropdownItems}>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={jottedValue}
                MenuProps={menuProps}
                onChange={jottedExtentionhandleChange}
                sx={{ width: "100%" }}
              >
                <MenuItem value={2} className={classes.displayNone}>
                  Topic
                </MenuItem>
                <MenuItem value={1}>YES</MenuItem>
                <MenuItem value={0}>NO</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box className={classes.SaveBtn}>
            <Button variant="contained" onClick={onSuccess}>
              Save
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Jotted_Page1;
