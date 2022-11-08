// reactstrap components
import React from "react";

// core components
import Navbar from "components/Navbar.js";
import Header from "./Header";
import Info from "./Info";
import Gospel from "./Gospel";
import Footer from "components/Footer.js";

// translation
import { useTranslation } from 'react-i18next';

function Index() {
  const { t, i18n } = useTranslation();
  
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <Navbar t={t} i18n={i18n} />
      {Header(t)}
      <div className="main">
        {Info(t)}
        {Gospel(t)}
        {Footer(t)}
      </div>
    </>
  );
}

export default Index;
