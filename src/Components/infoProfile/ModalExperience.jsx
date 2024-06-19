import { useState } from 'react';
import {Button, Modal, Card, ListGroup  } from 'react-bootstrap';


function ModalExperience({experience} ) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Vedi tutti
      </Button>
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Esperienza lavorativa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      
        <Card >
      <ListGroup variant="flush">
        <ListGroup.Item>Ruolo: {experience.role}</ListGroup.Item>
        <ListGroup.Item>Compagnia: {experience.company}</ListGroup.Item>
        <ListGroup.Item>Data inizio: {experience.starDate}</ListGroup.Item>
        <ListGroup.Item>Data fine: {experience.endDate}</ListGroup.Item>
        <ListGroup.Item>Descrizione: {experience.description}</ListGroup.Item>
        <ListGroup.Item>Zona: {experience.area}</ListGroup.Item>
      </ListGroup>
    </Card>

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

export default ModalExperience;