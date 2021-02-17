import React, { useState } from 'react';
import data from '../dist/InterviewProject_CareerData.json';



const App = () => {
  // const careerObjects = data.data;
  const [careerObjects, setCareerObjects] = useState(data.data);
  console.log("career object: ", careerObjects);
  return (
    <div>
      <ul>
        {
          Object.keys(careerObjects).map((career, index, array) => {
            return <h1 key={index}>Hello</h1>;
          })
        }
      </ul>
    </div>
  );
};

export default App;