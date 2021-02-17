import React from 'react';

//Stylesheets
import './EducationLevelContent.css';
import 'bootstrap/dist/css/bootstrap.min.css';


//Components
import ProgressBar from 'react-bootstrap/ProgressBar';

const EducationLevelContent = ({ education }) => {
  const percentage = Math.round(education.percent);
  return (
    <div className="education-block">
      <p className="education-level-text">{education.level}</p>
      <div className="percentage-bar-container">
        <ProgressBar className="education-percentage-bar" variant="custom" now={percentage}/>
      </div>
      <p className="percentage-number">{percentage}%</p>
    </div>
  );
};

export default EducationLevelContent;