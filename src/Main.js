import React, {useState} from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import './jekyll-theme-cayman.scss';

function Main(){

  return(
    <div className="main-content" id="main1">
      <h1>How it works</h1>
      <p>On this webpage you can insert a mathematical video and let our classifcation algorithm categorize it into one of the 11 Math categories. 
        The 11 categories in math are defined as: </p>
      <p> 'Exploding Dots', 'Statistics and probability',  'Geometry', 'Numbers','Polygons lines and quadrilaterals', 'Arithmetic', 'Algebra',
          'Logic and discrete maths', 'Measurement','Trigonometry' and 'Calculus'. 
      </p>
      <p>Disclaimer: The classification algorithms are only around 72% accurate. </p>
    </div>
  )
}

export default Main;