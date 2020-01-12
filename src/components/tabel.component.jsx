import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { remakeString } from "../utils/tools.utils";

export class Tabel extends Component {
  render() {
    const { val, handleChangeTripleNested, title } = this.props;
    const { denumirea, codul, numarul, detalii } = val;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <TableContainer>
            {remakeString(title)}
            <Table aria-label="simple table" style={{ minWidth: "600px" }}>
              <TableHead>
                <TableRow>
                  <TableCell>{remakeString(denumirea)}</TableCell>
                  <TableCell align="right">{codul}</TableCell>
                  <TableCell align="right">{numarul}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody></TableBody>
            </Table>
          </TableContainer>
          <textarea
            type="text"
            rows={8}
            style={{ width: 600 }}
            onChange={handleChangeTripleNested(
              "investigatii",
              `${title}`,
              `detalii`
            )}
            defaultValue={detalii}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Tabel;
