import "../App.css";
import { useState, useEffect, } from "react";

const Tab = () => {
    const [selected, setSelected] = useState("Introduction");
    const [closed, setClosed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            var height = document.documentElement.scrollHeight;
            if (window.scrollY >= height/5 && window.scrollY < 2*height/5) {
                setSelected("Methods");
                setClosed(true);
            } else if (window.scrollY >= 2*height/5 && window.scrollY < 3*height/5) {
                setSelected("Data");
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

    function transport() {
        var height = document.documentElement.scrollHeight;
        var element = document.getElementById("about");
        element.scrollIntoView();
        //window.scrollTo(0, height);
    }

    return (
        <div
            className="sections"
            onClick={() => transport()}
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