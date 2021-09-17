import React from "react";

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
<<<<<<< HEAD
                <div style={{ color: timelineLevel>2? "#081c4d" : "#C4C4C4",
                              textAlign:"center" }}>Choose Target</div>
=======
                <div style={{ color: timelineLevel===3? "#081c4d" : "#C4C4C4" }}>Choose Target</div>
>>>>>>> choose-target
            </div>
            <div className="line"></div>
            <div>
                <div 
                className="square"
                style={{ backgroundColor: timelineLevel===4 ? "#081c4d" : "#C4C4C4" }}
                >4</div>
<<<<<<< HEAD
                <div style={{ color: timelineLevel>3? "#081c4d" : "#C4C4C4",
                              textAlign:"center" }}>Predict results</div>
=======
                <div style={{ color: timelineLevel===4? "#081c4d" : "#C4C4C4" }}>Predict</div>
>>>>>>> choose-target
            </div>
    </div>
  );
}

export default Timeline;