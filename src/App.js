/*global chrome*/
import logo from './logo.svg';
import './App.css';
import Jotted_Page from './Jotted_Extension/Jotted_Page';
import Jotted_Page1 from './Jotted_Extension/Jotted_Page1';
import Jotted_Learningmode from './Jotted_Extension/Jotted_Learningmode';
import { useState } from 'react';
import Jotted_Page2 from './Jotted_Extension/Jotted_Page2';
import Jotted_Page3 from './Jotted_Extension/Jotted_Page3';
import Jotted_Page4 from './Jotted_Extension/Jotted_Page4';
import Ocr_Component from './Screen_Capture/Ocr_Component';

function App() {
  const [tab, setTab] = useState(0);
  return (
    <>
      {tab === 0 && <Jotted_Page onSuccess={() => setTab(1)} />}
      {/* {tab === 1 && <Jotted_Page1 onSuccess={() => setTab(2)} />} */}
      {tab === 1 && <Jotted_Learningmode onSuccess={() => setTab(2)} />}
      {tab === 2 && <Jotted_Page2 onSuccess={() => setTab(3)} />}
      {/* {tab === 3 && <Jotted_Page3 onSuccess={() => setTab(4)} />} */}
      {tab === 3 && <Jotted_Page4 onSuccess={() => setTab(4)} />}
    </>
  );
}

export default App;
