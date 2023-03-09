import "./styles/Contact.css";
import React from "react";
import Logo from "../components/Logo";

class ContactUs extends React.Component {
    render() {
        return (
            <body
                id="contact-full"
            >
                <Logo/>
                <InputForm/>
            </body>
        );
    }
}

const InputForm = () => {
    return (
        <div
            className="contact-input-div"
        >
            
            <div
                className="contact-input-field"
            >
                <label
                    className="explanation-label"
                >
                    How can we help
                    <input
                        type="text"
                        id="email"
                        className="contact-email-address"
                        placeholder="Email address"
                    /> ?
                </label>
                <textarea
                    id="explanation"
                />
                <button
                    className="submit-button-contact"
                >
                    Submit
                </button>
            </div>
        </div>
    );
}

export default ContactUs;
