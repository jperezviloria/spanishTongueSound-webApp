import React from 'react';

import Header from "./components/Header";
import Miscellaneous from "./components/Miscellaneous";
import QA from "./components/Q&A"
import Pensum from "./components/Pensum";
import Login from "./components/Login";

import {SystemBase} from "./css/style"

function App() {
  return (
    <SystemBase>
      <Header/>
      <Miscellaneous/>
      <QA/>
      <Pensum/>
      <Login/>

    </SystemBase>
  );
}

export default App;
