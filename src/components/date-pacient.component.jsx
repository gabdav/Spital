import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import { remakeString } from "../utils/tools.utils";

export class DatePacient extends Component {
  render() {
    const {
      values,
      handleChange,
      handleChangeCheck,
      handleChangeNested
    } = this.props;

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
                      onChange={handleChange(`${key}`)}
                      defaultValue={item}
                    />
                    <br />
                  </div>
                );
              } else {
                if (key === "statut") {
                  return Object.entries(item).map(([k, i]) => (
                    <div key={k}>
                      <br />
                      {remakeString(k)}
                      <input
                        type="checkbox"
                        defaultChecked={i}
                        onClick={handleChangeCheck(`${key}`, `${k}`)}
                        label={`${k}`}
                      />
                    </div>
                  ));
                } else {
                  return Object.entries(item).map(([k, i]) => (
                    <TextField
                      key={k}
                      hintText="Enter stuff"
                      floatingLabelText={`${remakeString(k)}`}
                      onChange={handleChangeNested(`${key}`, `${k}`)}
                      defaultValue={i}
                    />
                  ));
                }
              }
            })}
          </form>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default DatePacient;
