import { useState } from 'react';
import './App.css';




const StudentInfo = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="sk">
      <div className="student-details">
        <h1 className="name">Rajesh S</h1>
        <p className="registration-number">212221220042</p>
      </div>
      <button className="toggle-button" onClick={toggleVisibility}>
        {isVisible ? 'Hide Details' : 'Show Details'}
      </button>
      <div className={`additional-content ${isVisible ? 'visible' : ''}`}>
        <p>Additional student information goes here. It can include bio, contact details, or any other relevant information.</p>
      </div>
    </div>
  );
};

export default StudentInfo;