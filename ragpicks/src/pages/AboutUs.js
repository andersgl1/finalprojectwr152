import React from "react";
import Logo from "../components/Logo";
import "./styles/About.css";
import TopNav from "../components/TopNav";

class AboutUs extends React.Component {
    render() {
        return (
            <body
                id="about-full"
            >
                 <div
                    className="home-top"
                >
                    <Logo/>
                    <TopNav/>
                </div>
                <div
                    className="about top"
                >
                    <h5
                        className="headers-text"
                    >
                        Who are we?
                    </h5>
                    <h3
                        className="description who"
                    >
                        As of now, our team consists of two members: Anderson Lawrence and
                        Krish Agarwal. Both of us are students at Boston University, and we're
                        determined to build a company that can serve the community in a positive way. 
                    </h3>
                </div>
                <div
                    className="about mid"
                >
                    <h5
                        className="headers-text"
                    >
                        What is our mission?
                    </h5>
                    <h3
                        className="description mission"
                    >
                        Recto's mission is to build a more sustainable future. More specifically, 
                        we're invested in the reuse of products to avoid having them sent to a landfill.
                        If distributing goods to others who need them was an easier process, this can help lead
                        to a reduction of unneccessary waste.
                    </h3>
                </div>
                <div
                    className="about bot"
                >
                    <h5
                        className="headers-text"
                    >
                        How does it work?
                    </h5>
                    <h3
                        className="description how"
                    >
                        Firstly, you have to create a Recto™ account. Next, look up or use 
                        your current location to find distributors near you. Finally, select a 
                        distributor and list the items you have to sell. A distributor will come to
                        pick up your items soon and pay you for the items you've sold. Congratulations 
                        on completing your first Recto™ transaction!
                    </h3>
                </div>
            </body>
        );
    }
}

export default AboutUs;