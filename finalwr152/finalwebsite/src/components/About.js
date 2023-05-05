import "../App.css";
import CaliMe from "../images/calime.jpg";

const About = () => {
    return (
        <div
            className="about"
            id="ab"
        >
            <h5>
                About me 
            </h5>
            <div style={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
                <img
                    style={{ width: "24vw", height: "29vw", border: ".25vw solid black" }}
                    src={CaliMe}
                />
            </div>
            <h6>
                My name is Anderson Lawrence, I'm a third-year CS major at Boston University. While I'm not coding, you'll either find me playing the piano, hanging out with friends, or binge watching the latest in Sci-Fi. Feel free
                to roam around my website <a style={{ color: "black" }}href="http://andersonlawrence.net">here</a> to learn more about me. If you're interested in discussing AI in education further, or if you're
                looking into a research project of your own on the topic, please reach out to me (andersgl@bu.edu), and I'd love to have a chat!
            </h6>
        </div>
    );
}

export default About;