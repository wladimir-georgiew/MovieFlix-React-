import React from 'react'
import "./Login.css"

function Login(props) {
    const { email, setEmail, password, setPassword, handleLogin, handleSignUp, hasAccount, setHasAccount, emailError, passwordError } = props;

    return (
        <div className="login-wrapper">
            <div className="login">
                <h1 className="login__title">{hasAccount ? "Login" : "Register"}</h1>

                {/* Email Error Messages */}
                <p className="login-error"> {emailError} </p>

                <div className="login__group">
                    <input
                        className="login__group__input"
                        type="text"
                        required="true"
                        autoFocus
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {/* <label className="login__group__label">Email or phone number</label> */}
                </div>

                {/* Password Error Messages */}
                <p className="login-error"> {passwordError} </p>

                <div className="login__group">
                    <input
                        className="login__group__input"
                        type="password"
                        required="true"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {/* <label className="login__group__label">Password</label> */}
                </div>

                <div className="buttons-container">
                    {hasAccount ? (
                        <>
                            <p>Don't have an account ? 
                                <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
                            </p>
                            <button onClick={handleLogin} className="login__sign-in" type="button">Sign In</button>
                        </>) : (
                        <>
                            <p>Already have an account ?
                                <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
                            </p>
                            <button onClick={handleSignUp} className="login__sign-in" type="button">Sign Up</button>
                        </>
                    )}
                </div>

                {/* <button className="login__sign-in" type="button">Sign In</button> */}
                {/* <div className="login__secondary-cta">
                    <a className="login__secondary-cta__text" href="#">Remember me</a>
                    <a className="login__secondary-cta__text login__secondary-cta__text--need-help" href="#">Need help?</a>
                </div> */}
            </div>
        </div>
    )
}

export default Login
