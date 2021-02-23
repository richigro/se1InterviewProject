import React from 'react';

const SubCardBlock = (props) => {
 
  return (
    <div className="subCard-block">
      {props.children}
    </div>
  );
};

export default SubCardBlock;