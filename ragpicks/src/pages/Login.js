import React from "react";
import "./styles/Login.css";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";

class Login extends React.Component {
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
                    <LoginField
                        id="user"
                        placeholder="username"
                    />
                    <LoginField
                        id="pass"
                        placeholder="password"
                    />
                    <button
                        className="submit-button"
                        type="button"
                        onClick={() => {submitLogin()}}
                    > 
                        Log in
                    </button>
                    <DontHaveAccount/>
                </div>
            </body>
        );
    }
}

const LoginField = (props) => {

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

const DontHaveAccount = () => {
    return (
        <div
            className="dont-have-acc"
        >
            <h5>
                Don't have an account? Register <Link to={"/register"}>here</Link>.
            </h5>
        </div>
    );
}



export default Login;