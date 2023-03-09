import "../pages/styles/Home.css";
import { Link } from "react-router-dom";

export default function Logo() {
    return (
        <div
            className="logo"
        >
            <Link
                className="logo-link"
                to={"/"}
            >
                Recto
            </Link>
        </div>
    );
}