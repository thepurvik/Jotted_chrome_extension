/* global chrome */

import React, { useEffect, useRef, useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import jotted_Extention_Logo from '../assets/Images/jotted_Extention_Logo.png';
import { Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material';
import { Url_Icon } from '../assets/Icons/Url_Icon';
import { IconButton } from '@material-ui/core';
import { TREE_API } from '../API/tree.api';
import ReactFlow, { Background, Controls, useEdgesState, useNodesState } from 'react-flow-renderer';

const useStyles = makeStyles({
  root: {
    width: '412px',
    height: 'fit-content',
    textAlign: 'center',
    backgroundColor: '#F5EBDD',
    borderBottomLeftRadius: '20px',
    borderBottomRightRadius: '20px',
    padding: '10px 0',
  },
  MainBox: {
    width: '70%',
    margin: 'auto',
  },
  Jotted_Logo: {
    textAlign: 'center',
    '& img': {
      marginTop: '15px',
    },
  },
  ExtentionTextField: {
    textAlign: 'center',
    marginTop: '10px',
    '& .MuiFormLabel-root ': {
      fontFamily: 'Poppins',
      fontStyle: ' normal',
      fontWeight: ' 800',
      fontSize: ' 15px',
      textAlign: 'left',
      marginBottom: '5px',
      lineHeight: ' 22px',
      letterSpacing: '0.2px',
      color: '#684D45',
    },
    '& .MuiTextField-root': {
      backgroundColor: '#fff',
      '& fieldset': {
        borderRadius: '8px',
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
        textAlign: 'center',
      },
    },
  },
  multiSelect: {
    '& .MuiFormLabel-root ': {
      fontFamily: 'Poppins',
      fontStyle: ' normal',
      fontWeight: ' 800',
      fontSize: ' 15px',
      textAlign: 'left',
      marginBottom: '5px',
      marginTop: '10px',
      lineHeight: ' 22px',
      letterSpacing: '0.2px',
      color: '#684D45',
    },
  },
  selectDropdownItems: {
    '& .MuiSelect-select': {
      fontFamily: 'Poppins-Regular',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '16px',
      lineHeight: '24px',
      color: '#848180',
      opacity: '1',
      textAlign: 'left',
      background: '#FFFFFF',
      borderRadius: '8px',
      border: ' 0.5px solid #684D45',
    },
    '& .MuiOutlinedInput-root': {
      borderRadius: '8px',
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
  paper: {
    '&.MuiPaper-root': {
      marginTop: '20px',
      background: '#F1F0ED',
      opacity: '0.5',
      borderRadius: '8px',
    },
  },
  list: {
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '20px',
    lineHeight: '30px',
    color: '#171312',
    opacity: '0.8',
    letterSpacing: '0.2px',
    width: '100%',

    '& li': {
      borderBottom: ' 1.3px solid #684D45',
      width: '90%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      '&:last-child': {
        borderBottom: 'none',
      },
    },
    '& li.Mui-selected': {
      color: '#171312',
      opacity: '0.4',
    },
  },
  jotted_Extention_Para: {
    marginTop: '13px',
    '& p': {
      fontStyle: ' italic',
      fontWeight: ' 400',
      fontSize: ' 10px',
      lineHeight: ' 15px',
      letterSpacing: ' 0.2px',
      color: '#684D45',
      margin: '0',
      opacity: '0.5',
      textAlign: 'left',
    },
  },
  displayNone: {
    display: 'none !important',
  },
  TextTopic: {
    width: '100%',
    height: '225px',
    backgroundColor: '#FFF',
    border: ' 0.5px solid #684D45',
    borderRadius: '8px',
    marginTop: '10px',
    '& p': {
      fontStyle: ' normal',
      fontWeight: ' 400',
      fontSize: ' 15px',
      lineHeight: ' 22px',
      letterSpacing: ' 0.2px',
      color: '#684D45',
      margin: '0',
      textAlign: 'left',
      marginLeft: '10px',
    },
  },
  SaveBtn: {
    marginTop: '21px',
    '& .MuiButton-root': {
      fontWeight: ' 600',
      fontSize: ' 24px',
      lineHeight: ' 36px',
      background: '#E8CD94',
      borderRadius: '8px',
      padding: '14px 72px',
      '&:hover': {
        background: '#E8CD94',
      },
    },
  },
});

const Jotted_Page = ({ onSuccess, ...props }) => {
  const Tree = new TREE_API();
  const classes = useStyles();
  const [jottedValue, setJottedValue] = useState(2);
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [topic, setTopic] = useState({ id: '', text: '' });
  const [values, setValues] = useState({
    currentUrl: '',
    query: 0,
    tree: 0,
  });
  const [treeData, setTreeData] = useState([]);

  // useEffect(() => {
  //   chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
  //     setValues({ currentUrl: tabs[0].url });
  //   });
  //   // setValues({ ...values, currentUrl: window.location.href });
  //   Tree.getAllTree().then((res) => {
  //     setTreeData([...res]);
  //   });
  // }, []);

  useEffect(() => {
    if (values.tree) {
      const fetchData = async () => {
        try {
          const response = await fetch(`https://xg3n-4mh1-ngd5.n7.xano.io/api:w4ONEGEJ:v2/naufeltree-details/${values.tree}`);
          const json = await response.json();
          setNodes(json.map((obj) => ({ ...obj, data: { label: obj.label } })));
        } catch (error) {
          console.log('error', error);
        }
      };

      const Edges_Get_All_Data = async () => {
        try {
          const response = await fetch(`https://xg3n-4mh1-ngd5.n7.xano.io/api:w4ONEGEJ:v2/edges-details/${values.tree}`);
          const json = await response.json();
          // console.log(json, "EDGE_RESPONSE");
          setEdges(json);
        } catch (error) {
          console.log(error);
        }
      };
      if (nodes.length === 0) {
        fetchData();
        Edges_Get_All_Data();
      }
      // console.log("values.tree:", values.tree);
    }
  }, [values.tree]);

  useEffect(() => {
    reactFlowWrapper.current.addEventListener('click', (e) => {
      console.log('VALUES:', values);
      if (e.target.getAttribute('class').indexOf('selected') !== -1) {
        let nodeId = e.target.getAttribute('data-id');

        setTopic({ id: nodeId, text: e.target.innerText });
      }
    });
  }, [reactFlowWrapper.current]);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmitAttachment = async () => {
    let payload = {
      user_id: 0,
      tree_id: values?.tree,
      node_id: topic?.id,
      query: '',
      src: values?.currentUrl,
      topic: topic?.text,
    };
    try {
      let response = await Tree.setTopicAttachment(payload);
      console.log('RESPONSE:--', response);
      onSuccess();
    } catch (error) {
      console.log('error:--', error);
    }
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
            <InputLabel className={classes.inputLabel}>Currently Viewing:</InputLabel>
            <TextField
              id='outlined-basic'
              placeholder='Web URL Article Title'
              variant='outlined'
              name='currentUrl'
              sx={{ width: '100%' }}
              value={values.currentUrl}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <IconButton>
                    <Url_Icon />
                  </IconButton>
                ),
              }}
            />
          </Box>
          {/* <Box className={classes.multiSelect}>
            <InputLabel className={classes.inputLabel}>Associated Query</InputLabel>
            <FormControl fullWidth className={classes.selectDropdownItems}>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={values.query}
                name='query'
                MenuProps={menuProps}
                onChange={handleChange}
                sx={{ width: '100%' }}
              >
                <MenuItem value={0} className={values.query === 0 ? classes.displayNone : ''}>
                  {values.query === 0 ? 'How to find the derivative?' : 'None'}
                </MenuItem>
                <MenuItem value={1}>YES</MenuItem>
                <MenuItem value={2}>NO</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box className={classes.jotted_Extention_Para}>
            <p>Is this resource helpful?</p>
          </Box> */}

          <Box className={classes.multiSelect}>
            <InputLabel className={classes.inputLabel} sx={{ marginTop: '21px' }}>
              Save to:
            </InputLabel>
            <FormControl fullWidth className={classes.selectDropdownItems}>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                label='Tree'
                name='tree'
                value={values.tree}
                MenuProps={menuProps}
                onChange={(e) => {
                  handleChange(e);
                  setNodes([]);
                  setEdges([]);
                }}
                sx={{ width: '100%' }}
              >
                <MenuItem value={0} className={values.tree === 0 ? classes.displayNone : ''}>
                  {values.tree === 0 ? 'Tree' : 'None'}
                </MenuItem>
                {treeData.length > 0 &&
                  treeData.map((tree) => (
                    <MenuItem value={tree.id} key={`treeOpt${tree.id}`}>
                      {tree.name}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </Box>
          <Box className={classes.TextTopic} ref={reactFlowWrapper}>
            <p>Choose Topic</p>
            {nodes.length > 0 && edges.length > 0 && (
              <ReactFlow
                style={{
                  maxHeight: '90%',
                  height: 635,
                  width: '100%',
                  visibility: 'visible',
                }}
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                fitView
                attributionPosition='top-right'
              >
                <Controls
                  style={{
                    position: 'absolute',
                    top: '5px',
                    left: '5px',
                    boxShadow: 'none',
                  }}
                />
                <Background color='#aaa' gap={16} />
              </ReactFlow>
            )}
          </Box>

          <Box className={classes.SaveBtn}>
            <Button
              variant='contained'
              onClick={() => {
                handleSubmitAttachment();
              }}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Jotted_Page;
