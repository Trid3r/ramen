
import React from "react";

// reactstrap components
import {
  Button,
  Modal, 
  ModalFooter,
  Container,
  Row,
  Col
} from "reactstrap";

function Message({t}) {

  const [modal, setModal] = React.useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div className="text-center">
      <Button
        size="lg"
        className="btn-round mr-1"
        color="danger"
        type="button"
        onClick={toggle}
      >
        {t('homeWhy')}
      </Button>
      <Modal size="lg" isOpen={modal} toggle={toggle}>
        <div className="modal-header section-dark">
            <Button
              aria-label="Close"
              className="btn-link close"
              color="neutral"
              onClick={toggle}
            >
              <span aria-hidden={true}>X</span>
            </Button>
            <b className="h3 text-white fw-normal">{t('homeModalTitle')}</b>
            <p className="h4 text-white text-left fw-normal">{t('homeModalContent')}<br/>{t('homeModalContent2')}</p>
            <p class="h3 text-white fw-bold"><b>{t('homeModalPhraseL')}</b></p>
            <p className="text-dark fw-light" style={{fontSize: "8px"}}>
              {t('homeModalFact')}
            </p>
        </div>
        <ModalFooter>
          <Container>
            <Row className="align-items-center">
              <Col style={{ textAlign: 'center'}}>
                <Button
                  href="https://www.washingtonpost.com/nation/2019/09/20/pastafarian-opened-council-meeting-wearing-spaghetti-strainer-he-says-its-about-separation-church-state/"
                  color="neutral"
                  target="_blank">
                  Washington Post
                </Button>
              </Col>
              <Col style={{ textAlign: 'center'}}>
                <Button
                  href="https://www.dw.com/en/german-courts-take-on-the-flying-spaghetti-monster/a-39943249"
                  color="neutral"
                  target="_blank">
                  DW
                </Button>
              </Col>
              <Col style={{ textAlign: 'center'}}>
                <Button
                  href={t('wiki')}
                  color="neutral"
                  target="_blank">
                  Wikipedia
                </Button>
              </Col>
            </Row>
          </Container>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Message;
