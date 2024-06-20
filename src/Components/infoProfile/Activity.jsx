import { Button, Col, Container, Row } from 'react-bootstrap';

function Activity({ login }) {
  return (
    <>
      <Container className='content__attività content__info__profile p-4'>
        <Row className='user__detail'>
          <Col>
          <div className='d-flex align-items-center justify-content-between'>
            <h5 className='name mb-0'>Attività</h5>
            {login === 'me' ? 
              (<div className='mx-3'>
              <button
                  variant='outline-primary'
                  className='add__btn mx-1 mt-3'
                >
                  Crea un post
                </button>
                <button className='upgrade__profile p-0'><i className='fa-solid fa-pen'></i></button>
              </div>
            ) : ''}
          </div>
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