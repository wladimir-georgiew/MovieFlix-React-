import React from 'react'
import "./Login.css"

function Login() {
    return (
        <div className="login-wrapper">
            <div className="login">
                <h1 className="login__title">Sign In</h1>
                <div className="login__group">
                    <input className="login__group__input" placeholder="Email or phone number" type="text" required="true" />
                    {/* <label className="login__group__label">Email or phone number</label> */}
                </div>
                <div className="login__group">
                    <input className="login__group__input" placeholder="Sign In" type="password" required="true" />
                    {/* <label className="login__group__label">Password</label> */}
                </div>
                <button className="login__sign-in" type="button">Sign In</button>
                <div className="login__secondary-cta"><a className="login__secondary-cta__text" href="#">Remember me</a><a className="login__secondary-cta__text login__secondary-cta__text--need-help" href="#">Need help?</a></div>
            </div>
        </div>
    )
}

export default Login
