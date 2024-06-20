import { useState } from "react";
import { Modal } from "react-bootstrap";

function DeleteExperience() {

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
        Elimina
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Elimina esperienza</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Vuoi confermare l'eliminazione di questa esperienza?
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
            Elimina
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteExperience;