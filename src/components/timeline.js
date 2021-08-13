// Import from react
import React from "react";

// Import css files 
import '../css/timeline.css';

const Timeline = ({timelineLevel}) => {
  return(
    <div className="timeline-container">
            <div>
                <div 
                className="square"
                style={{ backgroundColor: timelineLevel===1 ? "#081c4d" : "#C4C4C4" }}
                >1</div>
                <div style={{ color: timelineLevel===1 ? "#081c4d" : "#C4C4C4" }}>Choose Dataset</div>
            </div>
            <div className="line"></div>
            <div>
                <div 
                className="square"
                style={{ backgroundColor: timelineLevel===2 ? "#081c4d" : "#C4C4C4" }}
                >2</div>
                <div style={{ color: timelineLevel===2? "#081c4d" : "#C4C4C4" }}>Explore Dataset</div>
            </div>
            <div className="line"></div>
            <div>              
                <div 
                className="square"
                style={{ backgroundColor: timelineLevel===3 ? "#081c4d" : "#C4C4C4" }}
                 >3</div>
                <div style={{ color: timelineLevel===3? "#081c4d" : "#C4C4C4" }}>Clean Dataset</div>
            </div>
            <div className="line"></div>
            <div>
                <div 
                className="square"
                style={{ backgroundColor: timelineLevel===4 ? "#081c4d" : "#C4C4C4" }}
                >4</div>
                <div style={{ color: timelineLevel===4? "#081c4d" : "#C4C4C4" }}>Generate CM</div>
            </div>
    </div>
  );
}

export default Timeline;