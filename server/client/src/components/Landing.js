import React, { useState } from "react";
import Payments from "./Payments";

const Landing = () => {
  const hideForm = () => {
    setState({
      showPayments: false,
      status: true,
    });
  };
  const [state, setState] = useState({
    showPayments: false,
    status: false,
  });
  return (
    <div style={{ textAlign: "center" }}>
      <h1>APP-SILK-SCREENING!</h1>
      Collect feedback from your users
      <button
        onClick={() => {
          setState({ showPayments: !state.showPayments });
        }}
        style={{ display: "block", margin: "auto", marginTop: "20px" }}
      >
        Payment Form
      </button>
      {state.showPayments ? <Payments hideForm={hideForm} /> : null}
      {state.status ? (
        <h1 style={{ color: "green" }}>Succesfully added credits!</h1>
      ) : null}
    </div>
  );
};

export default Landing;
