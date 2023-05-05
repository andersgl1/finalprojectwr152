import React, { useState } from 'react';
import "../App.css";

const Intro = (props) => {
    const [selectedNode, setSelectedNode] = useState(null);

    return (
        <div
            className="intro"
            id="introduction"
        >    
            <div>
                <h5>
                    Cheating: a timeline
                </h5>
                <h6>
                    Below we can see a timeline of cheating - which includes information presented from previous research, as well as some important
                    dates to keep track of when thinking about the future of cheating in higher education. Click on the nodes of the timeline to see more!
                </h6>
            </div>
        <div className="timeline">
            <div className="timeline-line"/>
            <div className="timeline-nodes">
            {props.data.map((item, index) => (
                <div
                key={index}
                className={`timeline-node ${
                    selectedNode === index ? 'selected' : ''
                }`}
                onClick={() => setSelectedNode(index)}
                >
                    <div
                        className="timeline-date"
                    >
                        {item.date}
                        <div className={`timeline-dropline ${
                            selectedNode === index ? 'selected' : ''
                }`}/>
                    </div>
                </div>
            ))}
            </div>
            {selectedNode !== null && (
            <div className="timeline-description">
                <h6>
                    {props.data[selectedNode].description}
                </h6>
                <h6>
                    Source: {props.data[selectedNode].source}
                </h6>
            </div>
            )}
        </div>
    </div>
    );
}

export default Intro;

