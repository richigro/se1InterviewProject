import React from 'react';

//Stylesheets
import './SubCardHeader.css';

const SubCardHeader = (props) => {
 
  return(
    <div className="block-header">
      <div className="icon-container">
        {props.children}
      </div>
      <p className="header-block-text">{props.headerText}</p>
    </div>
  );
};

export default SubCardHeader;