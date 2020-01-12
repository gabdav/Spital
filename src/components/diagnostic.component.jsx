import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { remakeString } from "../utils/tools.utils";

export class Diagnostic extends Component {
  render() {
    const { values, handleChangeNested } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <form>
            {Object.entries(values).map(([key, item]) => {
              return (
                <div key={key}>
                  <p>{remakeString(key)}</p>
                  <textarea
                    type="text"
                    rows={8}
                    onChange={handleChangeNested(`diagnostic`, `${key}`)}
                    defaultValue={item}
                    style={{ width: 500 }}
                  />
                </div>
              );
            })}
          </form>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Diagnostic;
