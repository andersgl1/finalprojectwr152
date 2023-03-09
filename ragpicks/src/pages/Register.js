import React from "react";
import "./styles/Login.css";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";

class Register extends React.Component {
    render() {
        function submitLogin() {
            let user = String(document.getElementById("user").value);
            let pass = String(document.getElementById("pass").value);

            user == "" ? alert("username cannot be null") : alert("ok");
            pass == "" ? alert("password cannot be null") : alert("ok");

        }

        return (
            <body
                id="login-full"
            >
                <Logo/>
                <div
                    className="login-popup"
                >
                    <RegisterField
                        id="user"
                        placeholder="username"
                    />
                    <RegisterField
                        id="pass"
                        placeholder="password"
                    />
                    <RegisterField
                        id="passagain"
                        placeholder="password (again)"
                    />
                    <button
                        className="submit-button"
                        type="button"
                        onClick={() => {submitLogin()}}
                    > 
                        Register
                    </button>
                    <AlreadyHaveAccount/>
                </div>
            </body>
        );
    }
}

const RegisterField = (props) => {

    return (
        <div
            className="login"
        >
            <input
                className="login-field"
                id={props.id}
                type="text"
                placeholder={props.placeholder}
            />
        </div>
    );
}

const AlreadyHaveAccount = () => {
    return (
        <div
            className="dont-have-acc"
        >
            <h5>
                Already have an account? Login <Link to={"/login"}>here</Link>.
            </h5>
        </div>
    );
}



export default Register;