import "../App.css";
import { useState, useEffect, } from "react";

const Tab = () => {
    const [selected, setSelected] = useState("Introduction");
    const [closed, setClosed] = useState(false);
   
    useEffect(() => {
        const handleScroll = () => {
            var height = document.documentElement.scrollHeight;
            if (window.scrollY >= 2*height/11 && window.scrollY < 9*height/24) {
                setSelected("Methods");
                setClosed(true);
            } else if (window.scrollY >= 9*height/24 && window.scrollY < 55*height/80) {
                setSelected("Data");
            } else if (window.scrollY >= 55*height/80 && window.scrollY < (height -2)) {
                setSelected("Conclusion");
            } else if (window.scrollY >= height - 2) {
                setSelected("About");
            } else {
                setSelected("Introduction");
            }

    };

    const tab = document.getElementById("tabDiv");

    tab.addEventListener('mouseover', function() {
        setClosed(false);
    });

    tab.addEventListener('mouseleave', function() {
        setClosed(true);
    });


    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return (
        <div
            id="tabDiv"
            className="tab"
            style={{ width: closed ? "20vw" : "60vw", justifyContent: closed ? "center" : "space-evenly" }}
        >
           
            <Sections
                name={!closed || selected == "Introduction" ? "Introduction" : null}
                id="intro"
                selected={selected == "Introduction" ? true : false}
            />
            <Sections
                name={!closed || selected == "Methods" ? "Methods" : null}
                id="method"
                selected={selected == "Methods" ? true : false}
            />
            <Sections
                name={!closed || selected == "Data" ? "Data" : null}
                id="data"
                selected={selected == "Data" ? true : false}
            />
            <Sections
                name={!closed || selected == "Conclusion" ? "Conclusion" : null}
                id="conclusion"
                selected={selected == "Conclusion" ? true : false}
            />
            <Sections
                name={!closed || selected == "About me" ? "About me" : null}
                id="about"
                selected={selected == "About me" ? true : false}
            />
        </div>
    );
}

const Sections = (props) => {
    const [scrolling, setScrolling] = useState(0);

    const scrollToTop = () => {
        let place = "";
        if (props.id === "intro") {
            place = "introduction";
        } else if (props.id === "method") {
            place = "methods";
        } else if (props.id === "data") {
           place = "datum";
        } else if (props.id === "conclusion") {
          place = "concl";
        } else {
           place = "ab";
        }

        const element = document.getElementById(place);
        element.scrollIntoView({ behavior: 'smooth' });
    };


    return (
        <div
            className="sections"
            onClick={() => scrollToTop()}
        >
            <h3
                style={{ textDecoration: props.selected == true ? "underline" : "none" }}
            >
                {props.name}
            </h3>
        </div>
    );
}  

export default Tab;