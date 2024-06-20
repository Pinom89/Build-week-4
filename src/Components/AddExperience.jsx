import { Button, Form, Modal } from "react-bootstrap";
import { useState } from 'react';

function AddExperience() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button 
        variant="primary"
        className='add__experiences p-0'
        onClick={handleShow}
      >
        <i className='fa-solid fa-plus'></i>
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Inserisci nuova esperienza</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button 
            variant="secondary"
            className='btn__altro'
            onClick={handleClose}>
            Chiudi
          </button>
          <button 
            variant='outline-primary'
            className='add__btn'
            onClick={handleClose}>
            Aggiungi Esperienza
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddExperience;