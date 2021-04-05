import { Route, Redirect, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import fire from "./fire";
import "./App.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import StartPage from "./components/StartPage";

import LoginPage from "./components/LoggedOutPage/Identity/Login/Login";

function App() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(true);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogin = () => {
    clearErrors();

    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        if (user) {
          toast.success(`Hello, ${user.email}`);
        }
        // ...
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
          default:
            break;
        }
      });
  };

  const handleSignUp = () => {
    clearErrors();

    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        if (user) {
          toast.success(`Successfully created ${user.email}`);
        }
        // ...
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
          default:
            break;
        }
      });

    var user = fire.auth().currentUser;

    if (user) {
      toast.success(`Welcome ${user.email}`);
    }
  };

  const handleLogout = () => {
    fire
      .auth()
      .signOut()
      .then(toast.success("You have successfully logged out"));
  };

  useEffect(() => {
    const authListener = () => {
      fire.auth().onAuthStateChanged((user) => {
        if (user) {
          clearInputs();
          setUser(user);
        } else {
          setUser("");
        }
      });
    };

    authListener();

    // return () => {
    //   window.removeEventListener("scroll");
    // };
  }, []);

  // Toastify Appearance
  const contextClass = {
    success: "red",
    error: "bg-red-600",
    info: "bg-gray-600",
    warning: "bg-orange-400",
    default: "bg-indigo-600",
    dark: "bg-white-600 font-gray-300",
  };

  return (
    <>
      <div className="app">
        <ToastContainer />
        <Navigation hasUser={user} handleLogout={handleLogout} />
        <Switch>
          <Route path="/" exact render={() => <StartPage hasUser={user} />} />
          <Route
            path="/auth"
            render={() =>
              !user ? (
                <LoginPage
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                  handleLogin={handleLogin}
                  handleSignUp={handleSignUp}
                  hasAccount={hasAccount}
                  setHasAccount={setHasAccount}
                  emailError={emailError}
                  passwordError={passwordError}
                />
              ) : (
                <Redirect to="/" />
              )
            }
          />
        </Switch>
        <Footer />
      </div>
    </>
  );
}

export default App;
