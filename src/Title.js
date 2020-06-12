import React, {useState} from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import './jekyll-theme-cayman.scss';

function Title(){

  return(
    <div className="page-header">
      <h1>Classification of Mathematical Videos</h1>
      <h4 className="project-tagline">Epsilon Stream Project, by Angelique Husson</h4>
      {/* <button className="btn" >View on GitHub</button> */}
      <form action="https://github.com/AngeliqueHusson/InternshipOneOnEpsilon">
        <input className="btn" type="submit" value="View project on Github" />
      </form>
    </div>
  )
}

export default Title;