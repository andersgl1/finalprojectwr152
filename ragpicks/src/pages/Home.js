import React from "react";
import "./styles/Home.css";
import TopNav from "../components/TopNav.js";
import Logo from "../components/Logo.js";
import Search from "../components/Search.js";
import recycle from "./images/recycle.jpg";

class Home extends React.Component {
    render() {
        return (
            <body
                id="home-full"
            >
                <div
                    className="home-top"
                >
                    <Logo/>
                    <TopNav/>
                </div>
                <Search/>
                <div
                    className="home-mid"
                >
                    <ImageText
                        pic={recycle}
                        name="recycling"
                        text="Our purpose is to recycle"
                    />
                    <ImageText
                        pic={recycle}
                        name="recycling"
                        text="Our purpose is to recycle"
                    />
                    <ImageText
                        pic={recycle}
                        name="recycling"
                        text="Our purpose is to recycle"
                    />
                </div>
            </body>
        );
    }
}

const ImageText = (props) => {
    return (
        <div
            className="images-div"
        >   
            <img
                className="image"
                src={props.pic}
                alt={props.name}
            />
            <h5
                className="images-text"
            >
                {props.text}
            </h5>
        </div>
    );
}

export default Home;