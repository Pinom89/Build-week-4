import { Col, Container, Row } from "react-bootstrap";

function Analyses() {
  return (
    <>
      <Container className='content__analisi content__profile p-4'>
        <Row className='user__detail'>
          <Col>
            <h5 className='name mb-0'>Analisi</h5>
            <p className='my-0 occupation'>Solo per te</p>
            <Container>
              <Row>
                <Col>
                  <p>0 visualizzazioni del profilo</p>
                  <p>Aggiorna il tuo profilo per attrarre visitatori.</p>
                </Col>
                <Col>
                  <p>0 impressioni del post</p>
                  <p>Crea un post per aumentare l'interesse.</p>
                  <p className='text-muted'>Ultimi 7 giorni</p>
                </Col>
              </Row>
            </Container>
            <div className='link__analisi'>
              <p className='text-center'>Mostra tutte le analisi</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Analyses;