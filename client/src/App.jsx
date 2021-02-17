import React, { useState } from 'react';
import data from '../dist/InterviewProject_CareerData.json';

//imported components
import Card from './components/Card';

//stylesheets
import './App.css';



const App = () => {
  // const careerObjects = data.data;
  const [careerObjects, setCareerObjects] = useState(data.data);
  console.log("career object: ", careerObjects);
  return (
    <div className="app-container">
    
      <ul>
        {
          Object.keys(careerObjects).map((career, index, array) => {
            return <Card key={array[index]} career={careerObjects[career]}/>;
          })
        }
      </ul>
    </div>
  );
};

export default App;