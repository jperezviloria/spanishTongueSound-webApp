import React from 'react';

import Header from "./components/Header";
import Miscellaneous from "./components/Miscellaneous";
import QA from "./components/Q&A"
import Pensum from "./components/Pensum";
import Login from "./components/Login";
import AboutUs from "./components/AboutUs";
import PaymentBase from "./components/PaymentBase"

import {SystemBase} from "./css/style"

function App() {
  return (
    <SystemBase>
      <Header/>
      <Pensum/>
      <PaymentBase/>
      <QA/>
      <AboutUs/>
      {/* <Login/> */}
      <Miscellaneous/>
    </SystemBase>
  );
}

export default App;
