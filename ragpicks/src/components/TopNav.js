import "../pages/styles/Home.css";
import { Link } from "react-router-dom";

export default function TopNav() {
    return (
        <div
            className="top-nav"
        >
            <TopNavComponents
                name="Log in"
            />
             <TopNavComponents
                name="Register"
            />
            <TopNavComponents
                name="About us"
            />
            <TopNavComponents
                name="Contact us"
            />
        </div>
    );
}

const TopNavComponents = (props) => {
    function returnPage() {
        if (props.name === "About us") {
            return "/about";
        } else if (props.name === "Contact us") {
            return "/contact"
        }

        let page = "/" + String(props.name).toLowerCase().replace(" ", "");
        return page;
    }

    return (
        <div
            className="top-nav-components"
        >
            <Link
                to={returnPage()}
                className="top-nav-text"
            >
                {props.name}
            </Link>
        </div>
    );
}
