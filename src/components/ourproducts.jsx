import React, { useState } from "react";
import "./ourproducts.css";

const InvestmentPlanner = () => {
  const [formData, setFormData] = useState({
    myindustry: "",
    myincome: "",
    longshort: "",
    timeperiod: "",
    wantinsurance: "",
    nomembers: "",
  });

  const [output, setOutput] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const calculateValues = () => {
    const { myincome, timeperiod, wantinsurance } = formData;
    let taxamount = 0;

    if (myincome <= 250000) taxamount = 0;
    else if (myincome <= 500000) taxamount = myincome * 0.05;
    else if (myincome <= 750000) taxamount = myincome * 0.1;
    else if (myincome <= 1000000) taxamount = myincome * 0.15;
    else if (myincome <= 1250000) taxamount = myincome * 0.2;
    else if (myincome <= 1500000) taxamount = myincome * 0.25;
    else taxamount = myincome * 0.3;

    let investmentPercent = myincome > 1500000 ? 0.3 : myincome > 750000 ? 0.2 : 0.1;
    let assumedGrowth = timeperiod <= 5 ? 4.5 : timeperiod <= 10 ? 8 : timeperiod <= 15 ? 11.5 : timeperiod <= 20 ? 13.8 : 16;
    let totalInvestment = (investmentPercent * myincome) * Math.pow(1 + assumedGrowth / 100, timeperiod);

    let insuranceMessage = "No insurance selected";
    if (wantinsurance === "Y") {
      insuranceMessage = myincome <= 500000 ? "300Rs - 500Rs" : myincome <= 1000000 ? "1000Rs - 2500Rs" : "2500Rs - 5000Rs";
    }

    let emergencyFunds = myincome <= 500000 ? "1000Rs Monthly" : myincome <= 1000000 ? "1000 - 3000Rs Monthly" : "3000 - 5000Rs Monthly";

    setOutput({
      tax: `Tax Amount: ${taxamount} Rs`,
      investment: `Investment Growth Assumed: ${assumedGrowth}% | Monthly: ${(investmentPercent * myincome) / 12} Rs | Total: ${totalInvestment} Rs`,
      insurance: `Recommended Insurance: ${insuranceMessage}`,
      emergencyFunds: `Emergency Savings: ${emergencyFunds}`,
    });
  };

  return (
    <div className="container">
      <h1 className="information">Enter Details</h1>
      <div className="content">
        <form>
          <div className="user-details">
            <input type="text" name="myindustry" placeholder="Industry" onChange={handleChange} />
            <input type="number" name="myincome" placeholder="Income" onChange={handleChange} />
            <input type="text" name="longshort" placeholder="L/S" onChange={handleChange} />
            <input type="number" name="timeperiod" placeholder="Time period" onChange={handleChange} />
            <input type="text" name="wantinsurance" placeholder="Y/N" onChange={handleChange} />
            <input type="number" name="nomembers" placeholder="Family Members" onChange={handleChange} />
          </div>
        </form>
      </div>
      <button className="button-23" onClick={calculateValues}>Submit</button>
      <div className="output-div">
        <h1 className="output-head">Results</h1>
        <p className="output">{output.tax}</p>
        <p className="output">{output.investment}</p>
        <p className="output">{output.insurance}</p>
        <p className="output">{output.emergencyFunds}</p>
      </div>
    </div>
  );
};

export default InvestmentPlanner;
