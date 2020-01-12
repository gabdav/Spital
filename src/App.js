import React from "react";
import "./App.css";
import Form from "./components/form.component";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import AppBar from "material-ui/AppBar";

function App() {
  return (
    <MuiThemeProvider>
      <div className="App">
        <AppBar title="Spital" showMenuIconButton={false} />

        <Form></Form>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
