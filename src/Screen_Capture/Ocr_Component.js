import React from 'react';
import { createWorker } from 'tesseract.js';
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
// import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
// import 'filepond/dist/filepond.min.css';
import 'filepond/dist/filepond.min.css';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import CaptureIScreen from './CaptureIScreen';
import { withStyles } from '@mui/styles';
import { makeStyles } from '@mui/styles';
import html2canvas from 'html2canvas';

registerPlugin(FilePondPluginImagePreview);

const Styles = (theme) => ({
  root: {
    textAlign: 'center',
    // width: '412px',
    display: 'flex',
    justifyContent: 'center',
    background: '#F5EBDD',
    // padding: '10px',
    borderRadius: '20px',
    margin: '20px ',
  },
  container: {
    padding: '10px',
  },
  FilePondBox: {
    // border: '1px solid black',
    '& div': {
      // background: '#fff !important',
    },
  },
  CardBox: {
    '& span': {
      fontSize: '30px',
      opacity: '0.7',
    },
  },
  CardBody: {
    '& p': {
      fontSize: ' 15px',
      fontWeight: ' 600',
      lineHeight: ' 36px',
    },
  },
});

class Ocr_Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      isProcessing: false,
      ocrText: '',
      pctg: '0.00',
    };
    this.pond = React.createRef();
    this.worker = React.createRef();
    this.updateProgressAndLog = this.updateProgressAndLog.bind(this);
  }

  async doOCR(file) {
    this.setState({
      isProcessing: true,
      ocrText: '',
      pctg: '0.00',
    });
    // Loading tesseract.js functions
    await this.worker.load();
    // Loadingg language as 'English'
    await this.worker.loadLanguage('eng');
    await this.worker.initialize('eng');
    // Sending the File Object into the Recognize function to
    // parse the data
    const {
      data: { text },
    } = await this.worker.recognize(file.file);
    this.setState({
      isProcessing: false,
      ocrText: text,
    });
    this.props.setText(text);
  }
  updateProgressAndLog(m) {
    // Maximum value out of which percentage needs to be
    // calculated. In our case it's 0 for 0 % and 1 for Max 100%
    // DECIMAL_COUNT specifies no of floating decimal points in our
    // Percentage
    var MAX_PARCENTAGE = 1;
    var DECIMAL_COUNT = 2;

    if (m.status === 'recognizing text') {
      var pctg = (m.progress / MAX_PARCENTAGE) * 100;
      this.setState({
        pctg: pctg.toFixed(DECIMAL_COUNT),
      });
    }
  }
  componentDidMount() {
    // Logs the output object to Update Progress, which
    // checks for Tesseract JS status & Updates the progress
    this.worker = createWorker({
      logger: (m) => this.updateProgressAndLog(m),
    });
  }

  async handleImage(file) {
    this.setState({
      files: [file],
    });
  }

  captureFullScreen = () => {
    html2canvas(document.body).then((canvas) => {
      let a = document.createElement('a');
      a.download = 'ss.png';
      a.href = canvas.toDataURL('image/png');
      // a.click();
      this.handleImage(a.href);
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <div style={{ marginTop: '10%' }} className='row'>
            <div className='col-md-4'></div>
            <div className='col-md-4 d-none'>
              <FilePond
                className={classes.FilePondBox}
                ref={(ref) => (this.pond = ref)}
                onaddfile={(err, file) => {
                  this.doOCR(file);
                }}
                onremovefile={(err, fiile) => {
                  this.setState({
                    // files: [],
                    ocrText: '',
                  });
                }}
                files={this.state.files}
              />
              {/* <input type="file" onChange={() => this.doOCR(this.target.files[0])} /> */}
            </div>
            <div className='col-md-4'></div>
          </div>
          <div className={classes.CardBox}>
            <h5 className='card-header'>
              <div
                // style={{ margin: '1%', textAlign: 'left' }}
                className='row'
              >
                <div className='col-md-12'>
                  <i className={'fas fa-sync fa-2x ' + (this.state.isProcessing ? 'fa-spin' : '')}></i>{' '}
                  <span className='status-text'>{this.state.isProcessing ? `Processing Image ( ${this.state.pctg} % )` : 'Parsed Text'} </span>
                </div>
              </div>
            </h5>
            <div className={classes.CardBody}>
              <p class='card-text'>
                {this.state.isProcessing ? '...........' : this.state.ocrText.length === 0 ? 'No Valid Text Found / Upload Image to Parse Text From Image' : this.state.ocrText}
              </p>
            </div>
          </div>
          {/* <div class='card-body'>
            <p class='card-text'>
              {this.state.isProcessing ? '...........' : this.state.ocrText.length === 0 ? 'No Valid Text Found / Upload Image to Parse Text From Image' : this.state.ocrText}
            </p>
          </div> */}
          <div className='ocr-text'></div>
          <button className='d-none' id='btnCaptureFull' onClick={() => this.captureFullScreen(this)}>
            Capture full page
          </button>
          <CaptureIScreen handleImage={(file) => this.handleImage(file, this)} />
        </div>
      </div>
    );
  }
}

export default withStyles(Styles)(Ocr_Component);
