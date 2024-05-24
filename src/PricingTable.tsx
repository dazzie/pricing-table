import React, { useState } from "react";
import "./PricingTable.css";

interface Plan {
  name: string;
  price: string;
  description: string;
}

interface Feature {
  name: string;
  included: boolean[];
}

interface PricingTableProps {
  plans: Plan[];
  features: Feature[];
}

const PricingTable: React.FC<PricingTableProps> = ({ plans, features }) => {
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);

  const handlePlanSelect = (index: number) => {
    setSelectedPlan(index);
  };

  return (
    <div className="pricing-table">
      <h2>Please select your plan</h2>
      <p>you have the following options to choose from...</p>
      <div className="table">
        <div className="header">
          <div className="cell"></div>
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`cell ${selectedPlan === index ? "selected" : ""}`}
              onClick={() => handlePlanSelect(index)}
            >
              <h2>{plan.name}</h2>
              <p>{plan.price}</p>
              <p>{plan.description}</p>
            </div>
          ))}
        </div>
        {features.map((feature, index) => (
          <div key={index} className="row">
            <div className="cell">{feature.name}</div>
            {plans.map((plan, planIndex) => (
              <div
                key={planIndex}
                className={`cell ${selectedPlan === planIndex ? "selected" : ""}`}
              >
                {feature.included[planIndex] ? (
                  <span>&#10003;</span>
                ) : (
                  <span>&#10007;</span>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingTable;
