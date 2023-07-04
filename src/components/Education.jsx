import React from 'react';
import './css/Education.css';
import img1 from '../images/uiuc.png';


class Education extends React.Component {
  render() {
    return (
      <div id="education" name="education" className="education">
        <div className="education-title">EDUCATION</div>

        <div className="education-box">
          <div className="education">
            <div className="education-content">
              <div className="eimage-container">
                <img src={img1} alt="Education 1" className="education-image" />
              </div>
              <div className="education-description">
                <ul>
                  <li className="place-title">University of Illinois at Urbana-Champaign (UIUC)</li>
                  <li >August 2020 - May 2024 (Expected)</li>
                  <li>Pursuing a B.S in Civil & Environmental Engineering (Transportation)</li>
                  <li>Pursuing a Minor in Computer Science (Artificial Intelligence & Big Data)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Education;
