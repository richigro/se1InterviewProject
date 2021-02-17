import React from 'react';

const SubCardHeader = ({ salary }) => {
  return(
    <div className="block-header">
      <div className="icon-container">
        {salary ? <ion-icon name="cash-outline"></ion-icon>: <ion-icon name="school"></ion-icon>}
      </div>
      <p className="header-block-text">{salary ? "Median Salary":"Top Entry-level Education"}</p>
    </div>
  );
};

export default SubCardHeader;