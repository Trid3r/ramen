
import React, { useState, useRef } from 'react';

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col
} from "reactstrap";
import { usePdf } from '@mikecousins/react-pdf';

function Gospel(t) {
  const [page, setPage] = useState(1);
  const canvasRef = useRef(null);

  const { pdfDocument } = usePdf({
    file: t('gospelFile'),
    page,
    canvasRef,
  });

  return (
    <>
      <div
        className="section section-image section-login"
        style={{
          backgroundImage: "url(" + require("assets/img/home2.jpg") + ")"
        }}
      >
        <Container>
          <div className="col text-center">
            <Button
              className="btn-round"
              outline
              color="neutral"
              href={t('gospelFile')}
              download
              size="lg"
              target="_blank"
            >
              {t('download')}
            </Button>
          </div>
          <br/>
          <Row>
            <Col className="mx-auto" lg="5" md="6">
              <div>
                {!pdfDocument && <span>Loading...</span>}
                <canvas ref={canvasRef} style={{maxWidth: '100%'}} />
                {Boolean(pdfDocument && pdfDocument.numPages) && (
                    <table style={{ width: '100%'}}>
                      <tbody>
                        <tr>
                          <th style={{ textAlign: 'center'}} className="description">
                              <Button
                                  className="btn-round mr-1"
                                  color="default"
                                  type="button"
                                  disabled={page === 1} onClick={() => setPage(page - 1)}
                              >
                                  <i className="fa-solid fa-arrow-left" /> {t('previous')}
                              </Button>
                          </th>
                          <th style={{ textAlign: 'center'}} className="description">
                              <Button
                                  className="btn-round mr-1"
                                  color="default"
                                  type="button"
                                  disabled={page === pdfDocument.numPages}
                                  onClick={() => setPage(page + 1)}
                              >
                                  {t('next')} <i className="fa-solid fa-arrow-right" />
                              </Button>
                          </th>
                        </tr>
                      </tbody>                   
                    </table> 
                )}
              </div> 
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default Gospel;
