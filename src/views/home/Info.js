import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import Message from "./Message";

function Info(t) {
  return (
    <>
      <div className="section section-dark">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="10">
              <h3 className="title"><b>{t('homeWelcome')}</b></h3>
              <h5 className="description">{t('homePhrase1')}</h5>
              <br/>
              <Message t={t} />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section section-dark section-nucleo-icons">
        <Container>
          <Row>
            <Col lg="6" md="12">
              <h5 className="description">{t('homePhrase2')}</h5>
              <br />
                <table style={{ width: '100%'}}>
                  <tbody>
                      <tr>
                        <th style={{ textAlign: 'center'}} className="description">{t('homeQuestion1')}</th>
                        <th style={{ textAlign: 'center'}} className="description">{t('homeQuestion2')}</th>
                      </tr>
                      <tr>
                        <td style={{ textAlign: 'center'}}><b>{t('homeAnswer1')}</b></td>
                        <td style={{ textAlign: 'center'}}><b>{t('homeAnswer2')}</b></td>
                      </tr>
                  </tbody>
                </table> 
              <br />
              <h5 className="description">
                {t('homePhrase3')} <br /> {t('homePhrase4')} <br /> {t('homePhrase5')}
              </h5>
            </Col>
            <Col lg="6" md="12">
              <div className="icons-container">
                <i className="fa-brands fa-youtube" />
                <i className="fa-solid fa-peace" />
                <i className="fa-brands fa-facebook-f" />
                <i className="fa-solid fa-star-of-david" />
                <i className="fa-brands fa-tiktok" />
                <i className="fa-solid fa-spaghetti-monster-flying" />
                <i className="fa fa-yin-yang" />
                <i className="fa fa-ankh" />
                <i className="fa fa-dove" />
                <i className="fa-brands fa-twitter" />
                <i className="fa fa-republican" />
                <i className="fa-brands fa-galactic-republic" />
                <i className="fa fa-democrat" />
                <i className="fa fa-jedi" />
                <i className="fa-solid fa-cross" />  
              </div>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default Info;
