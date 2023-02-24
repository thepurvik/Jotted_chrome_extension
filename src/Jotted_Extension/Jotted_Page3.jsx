import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import jotted_Extention_Logo from '../assets/Images/jotted_Extention_Logo.png';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { IconButton } from '@material-ui/core';
import { Url_Icon } from '../assets/Icons/Url_Icon';
import CloseIcon from '@mui/icons-material/Close';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import SpaceBarOutlinedIcon from '@mui/icons-material/SpaceBarOutlined';
import BrowserNotSupportedOutlinedIcon from '@mui/icons-material/BrowserNotSupportedOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LaunchIcon from '@mui/icons-material/Launch';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import PlagiarismIcon from '@mui/icons-material/Plagiarism';
import SETTING_IMG from '../assets/Images/Profile_Image.png';

const useStyles = makeStyles({
  root: {
    width: '412px',
    height: 'fit-content',
    textAlign: 'center',
    backgroundColor: '#FFFFFF',
    boxShadow: '0px 0px 5px black',
    // borderBottomLeftRadius: '20px',
    // borderBottomRightRadius: '20px',
    padding: '10px 0',
  },
  MainBox: {
    width: '90%',
    margin: 'auto',
  },
  Jotted_Title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& h3': {
      fontStyle: ' normal',
      fontWeight: ' 600',
      fontSize: ' 15px',
      lineHeight: ' 15px',
      letterSpacing: ' 0.2px',
      color: '#684D45',
      opacity: '0.5',
      textAlign: 'left',
    },
  },
  Jotted_TextField: {
    '& .MuiTextField-root': {
      backgroundColor: '#fff',
      width: '100%',
      '& fieldset': {
        // borderRadius: '8px',
        border: '0.5px solid #684D45',
      },
      '& .Mui-focused fieldset': {
        borderColor: '#684D45',
      },
      '& ::placeholder': {
        fontFamily: 'Poppins-Regular',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '20px',
        lineHeight: '30px',
        color: '#171312',
        letterSpacing: '0.2px',
        opacity: '0.5',
        textAlign: 'left',
      },
    },
  },
  SaveContentBtn: {
    marginTop: '21px',
    '& .MuiButton-root': {
      fontWeight: ' 400',
      fontSize: ' 20px',
      lineHeight: ' 36px',
      background: '#005affc7',
      // opacity: '0.5',
      color: '#FFFFFF',
      // padding: '14px 72px',
      boxShadow: '0px 0px 5px black',
      width: '100%',
      '&:hover': {
        background: '#005affc7',
      },
    },
  },
  jotted_Tool_Extention: {
    marginTop: '20px',
    '& h3': {
      fontStyle: ' normal',
      fontWeight: ' 600',
      fontSize: ' 15px',
      lineHeight: ' 15px',
      letterSpacing: ' 0.2px',
      color: '#684D45',
      margin: '0',
      opacity: '0.5',
      textAlign: 'left',
    },
  },
  ToolIcon: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginLeft: '10px',
    '& span': {
      marginRight: '30px',
      marginTop: '15px',
      color: '#000',
      opacity: '0.7',
    },
  },
  Clip_Extention: {
    marginTop: '20px',
    '& h3': {
      fontStyle: ' normal',
      fontWeight: ' 600',
      fontSize: ' 15px',
      lineHeight: ' 15px',
      letterSpacing: ' 0.2px',
      color: '#684D45',
      margin: '0',
      opacity: '0.5',
      textAlign: 'left',
    },
  },

  Clip_Icon_Title: {
    '& div': {
      margin: '0',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginLeft: '10px',
      '& p': {
        marginLeft: '10px',
        color: '#000',
        opacity: '0.7',
      },
    },
  },

  Repository: {
    '& .MuiFormLabel-root ': {
      textAlign: 'left',
      marginBottom: '5px',
      marginTop: '10px',
      fontStyle: ' normal',
      fontWeight: ' 600',
      fontSize: ' 15px',
      lineHeight: ' 15px',
      letterSpacing: ' 0.2px',
      color: '#000',
      opacity: '0.5',
    },
  },
  selectDropdownItems: {
    '& .MuiSelect-select': {
      marginTop: '10px',
      fontFamily: 'Poppins-Regular',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '16px',
      lineHeight: '24px',
      color: '#848180',
      opacity: '1',
      textAlign: 'left',
      background: '#FFFFFF',
      // borderRadius: '8px',
      // border: 'none',
      border: ' 0.5px solid #00000069',
    },
    '& .MuiOutlinedInput-root': {
      // borderRadius: '8px',
      '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',
      },
    },
    '& .Mui-focused ': {
      borderRadius: '8px',
      border: 'none',
    },
    '& .MuiSelect-icon': {
      color: '#684D45',
    },
  },

  SettingBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '15px',
    '& span': {
      color: '#000',
      opacity: '0.7',
    },
    '& div': {
      width: '35px',
      height: '35px',
      '& img': {
        width: '100%',
        height: '100%',
        borderRadius: '50%',
      },
    },
  },
});

const Jotted_Page2 = ({ onSuccess, ...props }) => {
  const classes = useStyles();
  const [jottedValue, setJottedValue] = React.useState(2);

  const jottedExtentionhandleChange = (event) => {
    // setJottedValue({
    //   ...jottedValue,
    //   [e.target.name]: e.target.value,
    // });
    event.target.value === 1 ? setJottedValue(1) : setJottedValue(0);
  };
  return (
    <>
      <Box className={classes.root}>
        <Box className={classes.MainBox}>
          <Box className={classes.Jotted_Title}>
            <h3>Title</h3>
            <span>
              <CloseIcon />
            </span>
          </Box>
          <Box className={classes.Jotted_TextField}>
            <TextField id='outlined-basic' variant='outlined' placeholder='France-Wikipedia' />
          </Box>
          <Box className={classes.SaveContentBtn} onClick={onSuccess}>
            <Button variant='contained'>Save Content</Button>
          </Box>

          <Box className={classes.jotted_Tool_Extention}>
            <h3>Tool Extention</h3>
            <Box className={classes.ToolIcon}>
              <span>
                <DeleteOutlinedIcon />
              </span>
              <span>
                <HighlightOffIcon />
              </span>
              <span>
                <FileCopyOutlinedIcon />
              </span>
              <span>
                <LinkOutlinedIcon />
              </span>
              <span>
                <BrowserNotSupportedOutlinedIcon />
              </span>
              <span>
                <SpaceBarOutlinedIcon />
              </span>
              <span>
                <PlagiarismIcon />
              </span>
            </Box>
          </Box>
          <Box className={classes.Clip_Extention}>
            <h3> Clip Extention</h3>
            <Box className={classes.Clip_Icon_Title}>
              <div>
                <LinkOutlinedIcon />
                <p>Bookmark</p>
              </div>
              <div>
                <FileCopyOutlinedIcon />
                <p>Full Page</p>
              </div>
              <div>
                <FileCopyOutlinedIcon />
                <p>Readability</p>
              </div>
              <div>
                <BrowserNotSupportedOutlinedIcon />
                <p>Manual Selection</p>
              </div>
            </Box>
          </Box>
          <Box className={classes.Repository}>
            <InputLabel className={classes.inputLabel} sx={{ marginTop: '21px' }}>
              Repository
            </InputLabel>
            <FormControl fullWidth className={classes.selectDropdownItems}>
              <Select labelId='demo-simple-select-label' id='demo-simple-select' label='Tree' value={jottedValue} onChange={jottedExtentionhandleChange} sx={{ width: '100%' }}>
                <MenuItem value={2} className={classes.displayNone}>
                  Subject Title
                </MenuItem>
                <MenuItem value={1}>YES</MenuItem>
                <MenuItem value={0}>NO</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box className={classes.SettingBar}>
            <span>
              <SettingsOutlinedIcon />
            </span>
            <div>
              <img src={SETTING_IMG} />
            </div>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Jotted_Page2;
