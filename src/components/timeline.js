// Import from react
import React from "react";

// Import css files 
import '../css/timeline.css';

const Timeline = ({timelineLevel}) => {
  return(
    <div className="timeline-container">
            <div className="square-container">
                <div 
                className="square"
                style={{ 
                  backgroundColor: timelineLevel>1 ? "#081c4d" : null, 
                  border: timelineLevel===1 ? "2px solid #081c4d" : "2px solid #C4C4C4",
                  display:'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: timelineLevel>1 ? "#FFFFFF" : "#081c4d"
                }}
                >1</div>
                <div style={{ 
                  color: timelineLevel>0 ? "#081c4d" : "#C4C4C4",
                  textAlign:"center" }}>Choose Dataset</div>
            </div>
            <div className="line-container">
            <div className="line"
              style={{
                color: timelineLevel>1? "#081c4d" : "#C4C4C4",
                border: timelineLevel>1? "2px solid #081c4d" : "1px solid #C4C4C4",
                backgroundColor: timelineLevel>1? "#081c4d" : "#C4C4C4",
              }}>
              </div>
              </div>
            <div className="square-container">
                <div 
                className="square"
                style={{ 
                  backgroundColor: timelineLevel>2 ? "#081c4d" : null, 
                  border: timelineLevel>1 ? "2px solid #081c4d" : "2px solid #C4C4C4",
                  display:'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: timelineLevel>2 ? "#FFFFFF" : "#081c4d"
                }}
                >2</div>
                <div style={{ color: timelineLevel>1? "#081c4d" : "#C4C4C4",
                              textAlign:"center" }}>Explore dataset</div>
            </div>
            <div className="line-container">
            <div className="line"
              style={{
                color: timelineLevel>2? "#081c4d" : "#C4C4C4",
                border: timelineLevel>2? "2px solid #081c4d" : "1px solid #C4C4C4",
                backgroundColor: timelineLevel>2? "#081c4d" : "#C4C4C4" 
              }}>
              </div>
              </div>
            <div className="square-container">              
                <div 
                className="square"
                style={{ 
                  backgroundColor: timelineLevel>3 ? "#081c4d" : null, 
                  border: timelineLevel>2 ? "2px solid #081c4d" : "2px solid #C4C4C4",
                  display:'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: timelineLevel>3 ? "#FFFFFF" : "#081c4d"
                }}
                 >3</div>
                <div style={{ color: timelineLevel>2? "#081c4d" : "#C4C4C4",
                              textAlign:"center" }}>Chose Target</div>
            </div>
            <div className="line-container">
            <div className="line"
              style={{
                color: timelineLevel>3? "#081c4d" : "#C4C4C4",
                border: timelineLevel>3? "2px solid #081c4d" : "1px solid #C4C4C4",
                backgroundColor: timelineLevel>3? "#081c4d" : "#C4C4C4" 
              }}>
              </div>
              </div>
            <div className="square-container">
                <div 
                className="square"
                style={{ 
                  border: timelineLevel>3 ? "2px solid #081c4d" : "2px solid #C4C4C4", 
                  backgroundColor: timelineLevel>4? "#081c4d" : null,
                  display:'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: timelineLevel>4 ? "#FFFFFF" : "#081c4d"
                }}
                >4</div>
                <div style={{ color: timelineLevel>3? "#081c4d" : "#C4C4C4",
                              textAlign:"center" }}>Predict</div>
            </div>
    </div>
  );
}

export default Timeline;