import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import jotted_Extention_Logo from '../assets/Images/jotted_Extention_Logo.png';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { IconButton } from '@material-ui/core';
import { Url_Icon } from '../assets/Icons/Url_Icon';
import CloseIcon from '@mui/icons-material/Close';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

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

  GotoNotionBtn: {
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
  ShareMedia: {
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
  MediaIcon: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '10px',
    '& span': {
      marginRight: '20px',
      marginTop: '15px',
      color: '#000',
      opacity: '0.7',
    },
  },
  TwitterIcon: {
    color: '#1DA1F2 !important',
  },
  LinkedInIcon: {
    color: '#0A66C2 !important',
  },
  YouTubeIcon: {
    color: '#FF0000 !important',
  },
});

const Jotted_Page4 = ({ onSuccess, ...props }) => {
  const classes = useStyles();
  const [jottedValue, setJottedValue] = React.useState(2);

  const jottedExtentionhandleChange = (event) => {
    event.target.value === 1 ? setJottedValue(1) : setJottedValue(0);
  };
  return (
    <>
      <Box className={classes.root}>
        <Box className={classes.MainBox}>
          <Box className={classes.Jotted_Title}>
            <h3>Success</h3>
            <span>
              <CloseIcon />
            </span>
          </Box>
          <Box className={classes.GotoNotionBtn} onClick={onSuccess}>
            <Button variant='contained'>Go to Notion</Button>
          </Box>

          <Box className={classes.ShareMedia}>
            <h3>Share</h3>
            <Box className={classes.MediaIcon}>
              <span className={classes.TwitterIcon}>
                <TwitterIcon />
              </span>
              <span className={classes.LinkedInIcon}>
                <LinkedInIcon />
              </span>
              <span className={classes.YouTubeIcon}>
                <YouTubeIcon />
              </span>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Jotted_Page4;
