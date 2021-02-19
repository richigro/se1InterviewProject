import React from 'react';

//stylesheets
import './Card.css';

//Components
import SubCardBlock from './SubCardBlock';

const Card = ({ career }) => { 
  const topEntryLevelEducation = career.educationAttainmentLevels.filter((education) => {
    return education.percent > 0;
  }).sort((a,b) => b.percent - a.percent).slice(0,3);
  
  return (
    <div className="card">
      <div className="card-content">
        <div>
          <p className="career-title">{career.title}</p>
          <p className="career-desc">{career.description}</p>
          <div className="subCard-block-container">
            <SubCardBlock medianSalary={career.medianSalary}/>
            <SubCardBlock topEntryLevelEducation={topEntryLevelEducation}/>
          </div>
        </div>
        <div className="img-container">
          <img  className="image" src={career.thumbnailUrl} alt={`Image of ${career.title}`}/>
        </div>
      </div>
    </div>
  );
};

export default Card;