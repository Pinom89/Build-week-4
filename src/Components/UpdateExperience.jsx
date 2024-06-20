import { useState } from "react";
import { Form, Modal } from "react-bootstrap";

function UpdateExperience() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return(
    <>
      <button 
        variant='outline-secondary' 
        className='btn__altro mx-3 mt-3'
        onClick={handleShow}
      >
        Aggiorna
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Aggiorna esperienza</Modal.Title>
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
            Aggiorna Profilo
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UpdateExperience;