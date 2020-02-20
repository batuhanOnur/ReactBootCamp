  
import React, { Component } from "react";
import NavBar from "./NavBar";
import Form from "./Form";
import PageContent from './PageContent';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from "./contexts/LanguageContext";

class App extends Component {
  render() {
    return (
    <ThemeProvider>
      <PageContent>
        <LanguageProvider>
           <NavBar />
           <Form />
        </LanguageProvider> 
      </PageContent>
    </ThemeProvider>
    );
  }
}

export default App;
