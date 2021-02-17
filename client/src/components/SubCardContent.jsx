import React from 'react';

//Stylesheets
import './SubCardContent.css';

//Components
import EducationLevelContent from './EducationLevelContent';
import SalaryContent from './SalaryContent';


const SubCardContent = ({ medianSalary, topEntryLevelEducation }) => {
  
  let content;
  //decides which content should be rendered
  if(medianSalary && !topEntryLevelEducation){
    content = <SalaryContent medianSalary={medianSalary}/>;
  } else if(topEntryLevelEducation && !medianSalary){
    content = topEntryLevelEducation.map((education, index) => {
      return <EducationLevelContent key={index} education={education}/>;
    });
  } else {
    content = <h1>There was an error</h1>;
  }
  
  return (
    <div className="block-content">
      {content}
    </div>
  );
};

export default SubCardContent;