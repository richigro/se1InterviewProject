import React from 'react';

//stylesheets
import './Card.css';

//Components
import EducationLevel from './EducationLevel';

const Card = ({ career }) => {
  console.log("career: ", career);
  // filters out education levels where the percentage is zero and return a new array and saved into variable
  //sorts the new array in descending order by the percentage number
  //slices the new array and return a copy of part of the array (the first three elements) 
  const topEntryLevelEducation = career.educationAttainmentLevels.filter((education) => {
    //filter out education levels where their percentage its zero
    return education.percent > 0;
  }).sort((a,b) => b.percent - a.percent).slice(0,3);
  console.log("top: ", topEntryLevelEducation);
  return (

    <div className="card">

      <div className="card-content">
        <h2>{career.title}</h2>
        <p>{career.description}</p>

        <div className="subCard-block-container">

          {/* First sub Block with Median Salary info*/}
          <div className="subCard-block">
            <div className="block-header">
              <div className="icon-container">
                <ion-icon name="cash-outline"></ion-icon>
              </div>
              <p className="header-block-text">Median Salary</p>
            </div>
            <div className="block-content">
              <div>
                {/*Intl NumberFormat constrcutor */}
                <p>${ new Intl.NumberFormat().format(Math.round(career.medianSalary))}</p>
              </div>
            </div>
          </div>

          {/*Second and last sub block with Top Entry Level Education info */}
          <div className="subCard-block">
            <div className="block-header">
              <div className="icon-container">
                <ion-icon name="school"></ion-icon>
              </div>
              <p className="header-block-text">Top Entry-level Education</p>
            </div>
            <div className="block-content">
              {topEntryLevelEducation.map((education, index) => {
                return <EducationLevel key={index} education={education}/>;
              })}
            </div>
          </div>

        </div>

        <img className="img-container" src={career.thumbnailUrl}/>
      </div>

    </div>
  );
};

export default Card;