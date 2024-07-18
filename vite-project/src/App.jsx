import { useState } from 'react';
import './App.css';
// import Screen from './Screen';
import S2 from './Screens/OnBoarding/S2';
import Layout from './Screens/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPageSuccess from './Screens/Reg/Reg';
import S1 from './Screens/OnBoarding/S1';
import S3 from './Screens/OnBoarding/S3';
// import Screen5 from '../src/Screens/ErrorMsgScreen/ErrorMsg';

function App() {
  const [count, setCount] = useState(0);

  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<LoginPageSuccess />} />
    //     <Route path="/S1" element={<S1 />} />
    //     <Route path="/S2" element={<S2 />} />
    //     <Route path="/S3" element={<S3 />} />


    //   </Routes>

    //   </BrowserRouter>
    <Layout/>  
  );

}

      export default App;
