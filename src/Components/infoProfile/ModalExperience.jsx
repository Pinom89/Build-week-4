import React, { useState } from 'react';
import { format } from 'date-fns';
import { Modal, Card, ListGroup, Button } from 'react-bootstrap';

function ModalExperience({ experience }) {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button 
        variant='outline-primary'
        className='add__btn'
        onClick={handleShow}
      >
        Visualizza Esperienza
      </button>
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Esperienza lavorativa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card className='m-0'>
            <ListGroup variant='flush'>
              <ListGroup.Item>Ruolo: {experience.role}</ListGroup.Item>
              <ListGroup.Item>Compagnia: {experience.company}</ListGroup.Item>
              <ListGroup.Item>
                Data inizio: {format(new Date(experience.startDate), 'dd/MM/yyyy')}
              </ListGroup.Item>
              <ListGroup.Item>
                Data fine: {experience.endDate ? format(new Date(experience.endDate), 'dd/MM/yyyy') : 'Ancora in corso'} 
              </ListGroup.Item>
              <ListGroup.Item>Descrizione: {experience.description}</ListGroup.Item>
              <ListGroup.Item>Zona: {experience.area}</ListGroup.Item>
            </ListGroup>
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <button
            variant='outline-secondary' 
            className='btn__altro' 
            onClick={handleClose}
          >
            Chiudi
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalExperience;