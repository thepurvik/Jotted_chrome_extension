import { withStyles } from '@mui/styles';
import React from 'react';
import { ScreenCapture } from 'react-screen-capture';

const Styles = (theme) => ({
  root: {
    '& button': {
      padding: ' 14px 72px',
      fontSize: ' 24px',
      background: ' #E8CD94',
      fontWeight: ' 600',
      borderRadius: ' 8px',
      border: 'none',
      color: '#ffffff',
    },
  },
});
class CaptureIScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screenCapture: '',
    };
  }

  handleScreenCapture = (screenCapture) => {
    this.props.handleImage(screenCapture);
    this.setState({ screenCapture });
  };

  handleSave = () => {
    const screenCaptureSource = this.state.screenCapture;
    const downloadLink = document.createElement('a');
    const fileName = 'react-screen-capture.png';

    downloadLink.href = screenCaptureSource;
    downloadLink.download = fileName;
    downloadLink.click();
  };

  render() {
    const { screenCapture } = this.state;
    const { classes } = this.props;
    return (
      <ScreenCapture onEndCapture={this.handleScreenCapture}>
        {({ onStartCapture }) => (
          <div className='d-none'>
            <button id='btnCapture' onClick={onStartCapture}>
              Capture
            </button>
          </div>
        )}
      </ScreenCapture>
    );
  }
}

export default withStyles(Styles)(CaptureIScreen);
