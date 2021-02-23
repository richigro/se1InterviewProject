import React from 'react';

//Stylesheets
import './SubCardContent.css';

const SubCardContent = (props) => {
  
  return (
    <div className="block-content">
      {props.children}
    </div>
  );
};

export default SubCardContent;