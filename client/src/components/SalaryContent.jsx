import React from 'react';

const SalaryContent = ({ medianSalary }) => {
  return (
    <div>
      <p>${new Intl.NumberFormat().format(Math.round(medianSalary))}</p>
    </div>
  );
};

export default SalaryContent;