import '../style/ModalUsers.css';

import { useState } from 'react';
import { Button, Modal, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function ModalUsers({ profiles }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  return (
    <>
      <button
        variant='outline-primary'
        className='add__btn w-100' 
        onClick={handleShow}>
        Vedi tutti
      </button>

      <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Altri profili simili</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-body-scroll bg-light'>
          {profiles.map((profile) => (
            <Container onClick={() => navigate(`/profiles/${profile._id}`)} key={profile._id} className='select__user'>
              <Row className='justify-content-start my-2'>
                <Col md={3}>
                  <img
                    src={profile.image}
                    alt={`Foto del profilo di ${profile.name}`}
                    className='rounded-circle me-3'
                    width='48'
                    height='48'
                    loading='lazy'
                  />
                </Col>
                <Col md={9} className='d-column'>
                  <h5 className='mb-1 text-start'>{profile.name} {profile.surname}</h5>
                  <p className='mb-1 text-start'>{profile.title}</p>
                </Col>
              </Row>
              <div className='divider_line'></div>
            </Container>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <button 
            variant='secondary' 
            className='btn__altro'
            onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalUsers;
