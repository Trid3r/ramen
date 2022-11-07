
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Container, Button } from "reactstrap";

function Footer(t) {
  return (
    <footer className="footer footer-black footer-white" style={{background: 'black'}}>
      <Container>
        <Row>
          <div className="credits ml-auto">
            <span className="copyright">
              {t('created')} &emsp;
                <a
                  href="https://twitter.com/trid3r"
                  target="_blank"
                >
                  TRID3R
                </a>
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
