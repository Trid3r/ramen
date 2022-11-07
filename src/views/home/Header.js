/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function Header(t) {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/home.jpg") + ")"
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="motto text-center">
              <h1><b>{t('homeHeaderTitle')}</b></h1>
              <br />
              <h4><i>{t('homeHeaderSubtitle')}</i></h4>
              <br />
              <br />
            </div>
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/clouds.png") + ")"
          }}
        />
      </div>
    </>
  );
}

export default Header;
