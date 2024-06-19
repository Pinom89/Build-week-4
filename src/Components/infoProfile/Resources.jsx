import { Col, Container, Row } from 'react-bootstrap';

function Resources() {
  return (
    <>
      <Container className='pb-4 content__risorse content__info__profile p-4'>
        <Row className='user__detail'>
          <Col>
            <h5 className='name mb-0'>Risorse</h5>
            <p className='my-0 connections text-muted'> <i className='fa-solid fa-eye'></i>solo per te</p>
              <div className='d-flex gap-2'>
                <i className='fa-solid fa-user-group'></i>
                <div>
                  <h5>La mia rete</h5>
                  <p>Salva e gestisci i tuoi collegamenti e interessi.</p>
                </div>
              </div>
              <div className='divider_line'></div>
              <div className='d-flex gap-2 mt-4'>
                <i className='fa-solid fa-bookmark'></i>
                <div>
                  <h5>Elementi salvati</h5>
                  <p>Monitora le tue offerte di lavoro, i corsi e gli articoli.</p>
                </div>
              </div>
          </Col>
        </Row>
      </Container>
      <div className='link__analisi'>
        <p className='text-center'>Mostra tutte le risorse <i className='fa-solid fa-arrow-right'></i></p>
      </div>
    </>
  );
};

export default Resources;