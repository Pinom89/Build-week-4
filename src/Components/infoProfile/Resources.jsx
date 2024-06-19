import { Col, Container, Row } from "react-bootstrap";

function Resources() {
  return (
    <>
      <Container className='pb-4 content__risorse content__profile p-4'>
        <Row className='user__detail'>
          <Col>
            <h5 className='name mb-0'>Risorse</h5>
            <p className='my-0 connections'>solo per te</p>
              <h5>La mia rete</h5>
              <p>Salva e gestisci i tuoi collegamenti e interessi.</p>
              <h5>Elementi salvati</h5>
              <p>Monitora le tue offerte di lavoro, i corsi e gli articoli.</p>
            <div className='link__analisi'>
              <p className='text-center'>Mostra tutte le risorse</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Resources;