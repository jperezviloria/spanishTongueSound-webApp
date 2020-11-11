import React from 'react';

import Header from "./components/Header";
import Miscellaneous from "./components/Miscellaneous";
import QA from "./components/Q&A"
import Pensum from "./components/Pensum";
import Login from "./components/Login";
import AboutUs from "./components/AboutUs";
import PaymentBase from "./components/PaymentBase"
import Navbar from "./components/Nav"

import Index from "./components/Index";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import {SystemBase} from "./css/style"

function App() {
  return (
    <SystemBase>
      <Router>
      <Navbar/>
      {/* <Header/> */}
      {/* <Pensum/>
      <PaymentBase/>
      <QA/>
      <AboutUs/>
      <Miscellaneous/> */}
      <Switch>
      <Route path="/" exact component = {Index}/> 
      <Route path = "/login" component = {Login}/>
        
      </Switch>
      </Router>
    </SystemBase>
  );
}

// <Router>
// <Fondo className="App">
//    {/* <Header/> */}
//    <Navbar/>
//    <Switch>
//     <Route path="/" exact component = {Inicio}/>
//     <Route path = "/equipo" component = {Psicologos}/> 
//     <Route path = "/formulario" component = {Formulario}/>  
//     <Route path = "/nosotros" component = {Nosotros}/>
//     <Route path = "/contacto" component = {Contacto}/> 
//   </Switch>
// </Fondo>
// </Router>

export default App;
