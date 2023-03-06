import React from "react";
import { Helmet } from "react-helmet";
// import Payments from "./Payments";
import ServicesTile from "./ServicesTile";
import HowToOder from "./HowToOrder";
import "./app.css";

const Landing = () => {
  // const hideForm = () => {
  //   setState({
  //     showPayments: false,
  //     status: true,
  //   });
  // };
  // const [state, setState] = useState({
  //   showPayments: false,
  //   status: false,
  // });
  return (
    <div style={{ textAlign: "center" }}>
      <div className='not-container'></div>

      <ServicesTile />

      <HowToOder />
      {/* <button
        onClick={() => {
          setState({ showPayments: !state.showPayments });
        }}
        style={{ display: "block", margin: "auto", marginTop: "20px" }}
      >
        Payment Form
      </button>
      {state.showPayments ? <Payments hideForm={hideForm} /> : null}
      {state.status ? (
        <h1 style={{ color: "green" }}>Successfully added credits!</h1>
      ) : null} */}

      <Helmet>
        <title>Silk Screening and Printing</title>
        <meta name='description' content='Silk Printing App' />
      </Helmet>
    </div>
  );
};

export default Landing;
