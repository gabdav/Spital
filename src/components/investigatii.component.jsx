import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Tabel from "./tabel.component";

export class Investigatii extends Component {
  render() {
    const { values, handleChangeTripleNested } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <form>
            {Object.keys(values).map(key => {
              return (
                <Tabel
                  key={key}
                  val={values[key]}
                  title={key}
                  handleChangeTripleNested={handleChangeTripleNested}
                ></Tabel>
              );
            })}
          </form>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Investigatii;
