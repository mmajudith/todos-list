import React from "react";

export const InfoAccordion = () => {

  return (
    <ul className="collapsible active">
      <li>
        <div className="collapsible-header">
          Click to reveal test login details: 
        </div>
        <div className="collapsible-body">
            <p>email: test@gmail.com</p>
            <p>password: test123</p>
        </div>
      </li>
    </ul>
  );
};

export default InfoAccordion;
