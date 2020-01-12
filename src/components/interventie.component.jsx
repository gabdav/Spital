import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import { remakeString } from "../utils/tools.utils";

export class Interventie extends Component {
  render() {
    const { values, handleChangeNested, handleChangeTripleNested } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <form>
            {Object.entries(values).map(([key, item]) => {
              const isObj = item instanceof Object;
              if (!isObj) {
                return (
                  <div key={key}>
                    <TextField
                      hintText="Enter stuff"
                      floatingLabelText={`${remakeString(key)}`}
                      onChange={handleChangeNested(`interventie`, `${key}`)}
                      defaultValue={item}
                    />
                    <br />
                  </div>
                );
              } else {
                return Object.entries(item).map(([k, i]) => (
                  <TextField
                    key={k}
                    hintText="Enter stuff"
                    floatingLabelText={`${remakeString(k)}`}
                    onChange={handleChangeTripleNested(
                      `interventie`,
                      `${key}`,
                      `${k}`
                    )}
                    defaultValue={i}
                  />
                ));
              }
            })}
          </form>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Interventie;
