import React, { useEffect, useState } from 'react';
import Axios from 'axios';

//JSON file data
import data from '../dist/InterviewProject_CareerData.json';

//imported components
import Card from './components/Card';

//stylesheets
import './App.css';

const App = () => {
  //un-comment if working with local JSON file
  // const careerObjectsFromJSONFile = data.data;

  const [careerObjects, setCareerObjects] = useState({});

  useEffect(() => {
    getAllObjects();
  }, []);

  const apiURL = 'https://run.mocky.io/v3/43cf8e75-b054-4ef6-9f9f-6258dcfbe5f9';

  const getAllObjects = () => {
    Axios.get(apiURL)
    .then((res) => {
      return res.data.data;
    })
    .then((data) => {
      setCareerObjects(data);
    })
    .catch((err) => {
      console.error("Error with promise", err);
    });
  };

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