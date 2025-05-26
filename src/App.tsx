import React from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import Routers from "./router"
import i18n from "./translation";

function App() {
  return (
    <BrowserRouter>
    <I18nextProvider i18n={i18n}>
      <Routers />
    </I18nextProvider>
    
    </BrowserRouter>
 
  );
}

export default App;
