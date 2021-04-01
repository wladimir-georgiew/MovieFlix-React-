import React from "react";
import LoggedInPage from "./LoggedInPage/LoggedInPage";
import LoggedOutPage from "./LoggedOutPage/LoggedOutPage";

function StartPage({ hasUser }) {
  return <div>{hasUser ? <LoggedInPage /> : <LoggedOutPage />}</div>;
}

export default StartPage;
