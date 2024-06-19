import { Col, Container, Row } from 'react-bootstrap';

function Analyses() {
  return (
    <>
      <Container className='content__analisi content__info__profile p-4'>
        <Row className='user__detail'>
          <Col>
            <h5 className='name mb-0'>Analisi</h5>
            <p className='my-0 occupation text-muted'> <i className='fa-solid fa-eye'></i>Solo per te</p>
            <Container>
              <Row>
                <Col className='mt-2'>
                  <div className='d-flex gap-2'>
                    <i className='fa-solid fa-user-group'></i>
                    <div>
                      <p className='my-0'>0 visualizzazioni del profilo</p>
                      <p className='my-0'>Aggiorna il tuo profilo per attrarre visitatori.</p> 
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className='d-flex gap-2'>
                    <i className='fa-solid fa-chart-column'></i>
                    <div>
                      <p className='my-0'>0 impressioni del post</p>
                      <p className='my-0'>Crea un post per aumentare l'interesse.</p>
                      <p className='text-muted'>Ultimi 7 giorni</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
      <div className='link__analisi'>
        <p className='text-center'>Mostra tutte le analisi  <i className='fa-solid fa-arrow-right'></i></p>
      </div>
    </>
  );
};

export default Analyses;