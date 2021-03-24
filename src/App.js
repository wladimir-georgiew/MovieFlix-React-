import { Route, Link, NavLink, Redirect, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import fire from "./fire";
import "./App.css";

import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer"
import LoggedInPage from "./components/LoggedInPage/LoggedInPage"
import LoggedOutPage from "./components/LoggedOutPage/LoggedOutPage";

import LoginPage from "./components/LoggedOutPage/Identity/Login/Login";



function App() {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(true);

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }

  const handleLogin = () => {

    clearErrors();

    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
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
        }
      })
      ;
  };

  const handleSignUp = () => {

    clearErrors();

    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {

      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser('');
      }

    });
  };

  useEffect(() => {
    authListener();

    //  return () => {
    //   window.removeEventListener("scroll");
    // };
  }, [])



  return (
    <div className="app">
      <Navigation hasUser={user} handleLogout={handleLogout} />   

      <Switch>
        {user ? (
          <Route path="/" exact component={LoggedInPage} />
        ) : (
          <Route path="/" exact component={LoggedOutPage} />
        )
        }
        <Route path="/auth" render={(props) => !user ? (
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
          <Redirect to='/' />
        )}
        />


      </Switch>
      <Footer />
    </div>
  );
}

export default App;
