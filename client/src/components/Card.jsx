import React from 'react';

//stylesheets
import './Card.css';

//Components
import SubCardBlock from './SubCardBlock';
import SubCardContent from './SubCardContent';
import SubCardHeader from './SubCardHeader';
import EducationLevelContent from './EducationLevelContent';
import SalaryContent from './SalaryContent';

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
            
            <SubCardBlock>
              <SubCardHeader headerText={"Median Salary"}>
                  <ion-icon className="header-icon" name="cash-outline"></ion-icon>
              </SubCardHeader>
              <SubCardContent>
                <SalaryContent medianSalary={career.medianSalary}/>
              </SubCardContent>
            </SubCardBlock>

            <SubCardBlock>
              <SubCardHeader headerText={"Top Entry-level Education"}>
                  <ion-icon className="header-icon" name="school"></ion-icon>
              </SubCardHeader>
              <SubCardContent>
                {topEntryLevelEducation.map((education, index) => {
                  return <EducationLevelContent key={index} education={education}/>;
                })}
              </SubCardContent>
            </SubCardBlock>

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