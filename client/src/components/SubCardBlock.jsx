import React from 'react';

//Stylesheets

//Components
import SubCardHeader from './SubCardHeader';
import SubCardContent from './SubCardContent';

const SubCardBlock = ({ medianSalary, topEntryLevelEducation }) => {
 
  return (
    <div className="subCard-block">
      <SubCardHeader medianSalary={medianSalary}/>
      <SubCardContent medianSalary={medianSalary} topEntryLevelEducation={topEntryLevelEducation}/>
    </div>
  );
};

export default SubCardBlock;