import concluding from "../images/concluding.png";
import collecting from "../images/collecting.png";
import analyzing from "../images/analyzing.png";
import {useState} from 'react';

const Methods = () => {
    return (
        <div
            className="methods"
            id="methods"
        >
             <h5>
                My Research: Methods
            </h5>
            <h6>
                To gain an understanding of how students perceive ChatGPT and how it compares to previous homework-aids (like Chegg, Coursehero, etc...), I posed a set of questions. Some questions were aimed to see whether students had used ChatGPT in the first place, in which case they were asked to recall their experience.
                Other questions were asked to see if students felt that ChatGPT was either: <br/> <br/>&emsp;&emsp;&emsp;&emsp;1. More risky to cheaters than other homework-aids, or: <br/>&emsp;&emsp;&emsp;&emsp;2. More rewarding to cheaters than other homework aids<br/><br/> 
                My process for this research can be seen below: feel free to click the cards to gain some additional information!
            </h6>
            <div
                className="blocks-section"
            >
                <Block
                    source={collecting}
                    text={"Collecting the data"}
                    explanation={"Students were asked to answer a number of questions about ChatGPT given to them in the form of a Qualtrics survey. The results were collected and transfered into a spreadsheet."}
                />
                <div className="arrow-right"/>
                 <Block
                    source={analyzing}
                    text={"Analyzing the data"}
                    explanation={"14 of the students were from BU, while 4 were from other colleges in the US. A few distinct ChatGPT categories were presented: never used, used for hw, and used outside school."}
                />
                <div className="arrow-right"/>
                 <Block
                    source={concluding}
                    text={"Drawing conclusions"}
                    explanation={"After the data was collected, I tried to draw conclusions on what the data could mean. Below you'll see some of the responses given by students!"}
                />
            </div>
        </div>
    );
}

const Block = (props) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    }

    return (
        <div
            className={`card ${isFlipped ? 'flipped' : ''}`} 
            onClick={handleClick}
            id={props.source}
        >
            <div
                className="card-front"
            >
                <img
                    className="blocks-image"
                    src={props.source}
                />
                <h7>
                    {props.text}
                </h7>
            </div>
            <div
                className="card-back"
            >
                <h7>
                    {props.explanation}
                </h7>
            </div>
        </div>
    );
}

export default Methods;
