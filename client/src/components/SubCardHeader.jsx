import React from 'react';

const SubCardHeader = ({ medianSalary }) => {
  return(
    <div className="block-header">
      <div className="icon-container">
        {medianSalary ? <ion-icon name="cash-outline"></ion-icon>: <ion-icon name="school"></ion-icon>}
      </div>
      <p className="header-block-text">{medianSalary ? "Median Salary":"Top Entry-level Education"}</p>
    </div>
  );
};

export default SubCardHeader;