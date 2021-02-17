import React from 'react';

//Stylesheets
import 'bootstrap/dist/css/bootstrap.min.css';
//Components
import ProgressBar from 'react-bootstrap/ProgressBar';

const EducationLevel = ({ education }) => {
  const percentage = Math.round(education.percent);
  return (
    <div className="education-block">
      <p className="education-level-text">{education.level}</p>
      <ProgressBar variant="danger" now={percentage}/>
      <p className="percentage-number">{percentage}%</p>
    </div>
  );
};

export default EducationLevel;