import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import PricingTable from "./PricingTable";

const plans = [
  {
    name: "Basic",
    price: "$8.55 /month",
    description: "Protect your vehicle from breakdowns and road hazards",
  },
  {
    name: "Standard",
    price: "$9.99 /month",
    description: "Protect your vehicle and your loan",
  },
  {
    name: "Premium",
    price: "$12.99 /month",
    description: "Protect your vehicle and get a new vehicle replacement",
  },
];

const features = [
  {
    name: "Disability",
    included: [true, false, true],
  },
  {
    name: "Life",
    included: [false, true, true],
  },
  {
    name: "Coverage Type",
    included: [false, true, true],
  },
  {
    name: "Term",
    included: [false, true, true],
  },
  {
    name: "Deductible",
    included: [true, false, true],
  },
  {
    name: "24/7 Roadside and Rental",
    included: [false, true, true],
  },
  {
    name: "Seals and Gaskets",
    included: [false, true, true],
  },
  {
    name: "CFR (Max $1,500)",
    included: [false, true, true],
  },
];

ReactDOM.render(
  <PricingTable plans={plans} features={features} />,
  document.getElementById("root"),
);
