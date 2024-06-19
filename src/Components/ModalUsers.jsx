import { useState } from 'react';
import {Button, Modal, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

function ModalUsers({profiles} ) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Vedi tutti
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {profiles.map((profile) => (
            <Container onClick={() => navigate(`/profiles/${profile._id}`)} key={profile._id}>
              <Row className='justify-content-start my-2' >
              <Col md={3}>
              <img
                src={profile.image}
                alt={`Foto del profilo di ${profile.name}`}
                className="rounded-circle me-3"
                width="48"
                height="48"
                loading="lazy"
              />
              </Col>
              <Col md={9} className='d-column'>
                <h5 className="mb-1 text-start">{profile.name} {profile.surname}</h5>
                <p className="mb-1 text-start">{profile.title}</p>
              </Col>
              </Row>
              <div className='divider_line'></div>
            </Container >
          ))}



        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalUsers;