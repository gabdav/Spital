import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import { remakeString } from "../utils/tools.utils";
export class Tratament extends Component {
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
                    <p>{remakeString(key)}</p>
                    <textarea
                      type="text"
                      rows={8}
                      onChange={handleChangeNested(`tratament`, `${key}`)}
                      defaultValue={item}
                      style={{ width: 500 }}
                    />
                  </div>
                );
              } else {
                return Object.entries(item).map(([k, i]) => (
                  <div key={k}>
                    <TextField
                      hintText="Enter stuff"
                      floatingLabelText={`${remakeString(k)}`}
                      onChange={handleChangeTripleNested(
                        "tratament",
                        `${key}`,
                        `${k}`
                      )}
                      defaultValue={i}
                    />
                    <br />
                  </div>
                ));
              }
            })}
          </form>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Tratament;
