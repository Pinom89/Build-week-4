import { Col, Container, ProgressBar, Row } from "react-bootstrap";

function Advised() {
  return (
    <>
      {/* Consigliato per te */}
      <Container className='content__consigliato content__profile p-4'>
        <Row className='user__detail'>
          <Col>
            <h5 className='name mb-0'>Consigliato per te</h5>
            <p className='my-0 occupation'>Solo per te</p>
            <p>Intermedio</p>
            <ProgressBar variant='secondary' now={60} className='bg-light progress__bar' />
            <p className='my-0 location text-muted'>Completa 1 passaggio per raggiungere il livello <span className='connections'>Massimo</span></p>
            <div className='content__riepilogo'>
              <h5>Scrivi un riepilogo per mettere in evidenza la tua personalità o la tua esperienza lavorativa</h5>
              <p>Gli utenti che includono un riepilogo ricevono fino a 3,9 volte più visualizzazioni del profilo.</p>
              <button variant='outline-secondary' className='btn__altro'>
                Aggiungi un riepilogo
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Advised;