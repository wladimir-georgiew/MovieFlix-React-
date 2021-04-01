import React from "react";

import Banner from "./Banner/Banner";
import ContainerArea from "./Container/ContainerArea";
import "./LoggedOutPage.css";

import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";

function LoggedOutPage() {
  return (
    <div className="body-wrapper_loggedOut">
      <Banner />
      <ContainerArea />
    </div>
  );
}

export default LoggedOutPage;
