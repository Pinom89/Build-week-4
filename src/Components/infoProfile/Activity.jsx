import { Button, Col, Container, Row } from 'react-bootstrap';

function Activity() {
  return (
    <>
      <Container className='content__attività content__info__profile p-4'>
        <Row className='user__detail'>
          <Col>
            <h5 className='name mb-0'>Attività</h5>
            <p className='my-0 connections'>5 followers</p>
              <h5>Non hai ancora pubblicato nulla</h5>
              <p>I post che condividi appariranno qui</p>
          </Col> 
        </Row>
      </Container>
      <div className='link__analisi'>
        <p className='text-center'>Mostra tutte le attività <i className='fa-solid fa-arrow-right'></i></p>
      </div>
    </>
  );
};

export default Activity;