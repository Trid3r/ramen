/*eslint-disable*/
import React from "react";

// reactstrap components
import { Button } from "reactstrap";

// core components
import Message from "./Message";

function Links(t) {
  const [modal, setModal] = React.useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <div className="section section-dark">
        <table style={{ width: '100%'}}>
          <tbody>
              <tr>
                <th style={{ textAlign: 'center'}} className="description">
                  <Button
                    className="mr-1"
                    color="link"
                    href={t('wiki')}
                    target="_blank"
                  >
                    <i className="fa fa-wikipedia-w fa-2xl"></i>
                  </Button>
                </th>
                <th style={{ textAlign: 'center'}} className="description">
                  <Button
                    className="btn-round mr-1"
                    color="default"
                    type="button"
                    onClick={toggleModal}
                  >
                    {t('homeWhy')}
                  </Button>
                  {Message(t,modal,toggleModal)}
                </th>
                <th style={{ textAlign: 'center'}} className="description">
                  <Button
                    className="mr-1"
                    color="link"
                    href="https://github.com/Trid3r/ramen"
                    target="_blank"
                  >
                    <i className="fa-solid fa fa-github fa-2xl"></i>
                  </Button>
                </th>
              </tr>
          </tbody>
        </table> 
      </div>
    </>
  );
}

export default Links;
