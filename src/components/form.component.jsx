import React, { Component } from "react";
import DatePacient from "./date-pacient.component";
import Diagnostic from "./diagnostic.component";
import PortalModal from "./portal-modal.component";
import Investigatii from "./investigatii.component";
import Interventie from "./interventie.component";
import Tratament from "./tratament.component";
import { base } from "../firebase/firebase.utils";
export class Form extends Component {
  state = {
    data: ""
    // nume: "",
    // prenume: "",
    // sex: "",
    // domiciliu: {
    //   localitate: "",
    //   judet: "",
    //   strada: "",
    //   nr: "",
    //   bloc: "",
    //   scara: "",
    //   etaj: "",
    //   apartament: ""
    // },
    // dataNasterii: {
    //   an: "",
    //   luna: "",
    //   ziua: ""
    // },
    // email: "",
    // dateFizice: {
    //   grupaSanguina: "",
    //   alergie: "",
    //   greutate: "",
    //   inaltime: ""
    // },
    // ocupatie: "",
    // identitate: {
    //   ci: "",
    //   seria: "",
    //   nr: ""
    // },
    // statut: {
    //   salariat: false,
    //   asigurat: false,
    //   pensionar: false,
    //   copil: false,
    //   elev: false,
    //   gravida: false,
    //   veteran: false,
    //   revolutionar: false,
    //   handicap: false,
    //   pns: false,
    //   ajutorSocial: false,
    //   somaj: false,
    //   alte: false
    // },
    // diagnostic: {
    //   diagnosticDeTrimitere: "",
    //   diagnosticLaInternare: "",
    //   boliConcomitente: "",
    //   semneSiSimpt: "",
    //   antecedenteHered: "",
    //   antecedentePers: ""
    // },
    // investigatii: {
    //   explorariFuntionale: {
    //     denumirea: "denumirea",
    //     codul: "codul",
    //     numarul: "numarul",
    //     detalii: ""
    //   },
    //   investigatiiRadiologice: {
    //     denumirea: "denumirea",
    //     codul: "codul",
    //     numarul: "numarul",
    //     detalii: ""
    //   },
    //   alteProceduri: {
    //     denumirea: "denumirea",
    //     codul: "codul",
    //     numarul: "numarul",
    //     detalii: ""
    //   },
    //   analizeLaborator: {
    //     denumirea: "denumirea",
    //     codul: "codul",
    //     numarul: "numarul",
    //     detalii: ""
    //   }
    // },
    // interventie: {
    //   tehnicaOperatorie: "",
    //   boala: "",
    //   echipa: {
    //     medicPrincipal: "",
    //     medicOperatorII: "",
    //     medicOperatorIII: "",
    //     medicAti: "",
    //     asistenta: ""
    //   },
    //   dataInterventiei: ""
    // },
    // tratament: {
    //   tratamentEfectuat: "",
    //   stareExternare: {
    //     vindecat: "",
    //     ameliorat: "",
    //     cevatationar: "",
    //     agravat: "",
    //     transferatLa: "",
    //     decedat: "",
    //     total: ""
    //   }
    // }
  };
  componentWillMount() {
    this.ref = base.syncState("data", {
      context: this,
      state: "data"
    });
  }
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  checkValid(val) {
    let validator = false;
    if (val !== undefined) {
      Object.entries(val).map(([key, item]) => {
        if (item === "" || item === undefined) {
          validator = true;
        }
        if (item instanceof Object) {
          Object.entries(item).map(([k, i]) => {
            if (i === "" || i === undefined) {
              validator = true;
            }
            if (i instanceof Object) {
              Object.entries(i).map(([kj, it]) => {
                if (it === "" || it === undefined) {
                  validator = true;
                }
              });
            }
          });
        }
      });
    }
    return validator;
  }

  handleChange = input => e => {
    this.setState({ data: { [input]: e.target.value } });
  };
  handleChangeCheck = (input, subInput) => e => {
    const check = e.target.checked;
    const propr = { ...this.state.data };
    propr[input][subInput] = check;
    this.setState({ data: propr });
  };
  handleChangeNested = (input, subInput) => e => {
    const val = e.target.value;
    const propr = { ...this.state.data };
    propr[input][subInput] = val;
    this.setState({ data: propr });
  };
  handleChangeTripleNested = (first, input, subInput) => e => {
    const val = e.target.value;
    const propr = { ...this.state.data };
    propr[first][input][subInput] = val;
    this.setState({ data: propr });
  };
  render() {
    const {
      nume,
      prenume,
      sex,
      dataNasterii,
      domiciliu,
      email,
      dateFizice,
      ocupatie,
      identitate,
      statut,
      diagnostic,
      investigatii,
      interventie,
      tratament
    } = this.state.data;
    const values = {
      nume,
      prenume,
      sex,
      dataNasterii,
      domiciliu,
      email,
      dateFizice,
      ocupatie,
      identitate,
      statut
    };
    const diag = diagnostic;
    const invest = investigatii;
    const inter = interventie;
    const trat = tratament;
    return (
      <div>
        <PortalModal label="Date Pacienti">
          <DatePacient
            handleChange={this.handleChange}
            handleChangeCheck={this.handleChangeCheck}
            handleChangeNested={this.handleChangeNested}
            values={values}
          />
        </PortalModal>
        <PortalModal label="Diagnostic" valid={this.checkValid(values)}>
          <Diagnostic
            handleChange={this.handleChange}
            handleChangeCheck={this.handleChangeCheck}
            handleChangeNested={this.handleChangeNested}
            values={diag}
          />
        </PortalModal>

        <PortalModal
          label="Investigatii"
          valid={this.checkValid(diag) || this.checkValid(values)}
        >
          <Investigatii
            handleChange={this.handleChange}
            handleChangeCheck={this.handleChangeCheck}
            handleChangeTripleNested={this.handleChangeTripleNested}
            values={invest}
          />
        </PortalModal>
        <PortalModal
          label="Interventie"
          valid={
            this.checkValid(invest) ||
            this.checkValid(diag) ||
            this.checkValid(values)
          }
        >
          <Interventie
            handleChange={this.handleChange}
            handleChangeTripleNested={this.handleChangeTripleNested}
            handleChangeNested={this.handleChangeNested}
            values={inter}
          />
        </PortalModal>
        <PortalModal
          label="Tratament"
          valid={
            this.checkValid(inter) ||
            this.checkValid(invest) ||
            this.checkValid(diag) ||
            this.checkValid(values)
          }
        >
          <Tratament
            handleChange={this.handleChange}
            handleChangeTripleNested={this.handleChangeTripleNested}
            handleChangeNested={this.handleChangeNested}
            values={trat}
          />
        </PortalModal>
      </div>
    );
  }
}

export default Form;
