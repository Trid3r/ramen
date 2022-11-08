
import React from "react";

// reactstrap components
import {
  Button,
  Modal
} from "reactstrap";

function Message(t,modal,toggleModal) {
  return (
    <Modal isOpen={modal} toggle={toggleModal}>
    <div className="modal-header section-dark">
        <Button
          aria-label="Close"
          className="btn-link close"
          color="neutral"
          onClick={toggleModal}
        >
          <span aria-hidden={true}>X</span>
        </Button>
        <h3 className="modal-title text-center" id="exampleModalLabel">
          <b>{t('homeModalTitle')}</b>
        </h3>
        <h4 className="modal-title text-center" id="exampleModalLabel">
           {t('homeModalContent')}
        </h4>
    </div>
    <div className="modal-footer">
      <b className="text-center" style={{fontSize: "clamp(10px, 4vw, 10px)"}}>{t('homeModalAPA')}</b>
    </div>
    </Modal>
  );
}

export default Message;
