import { useState } from "react";
import { Modal } from "react-bootstrap";

function DeleteExperience({ id, idExp, fetchExperiences }) {

  const url = `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences/${idExp}`;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const Token = process.env.TOKEN;

  const handleElimina = () => {
    fetch(url, {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + Token,
      }
    })
    .then(response => {
      if (response.ok) {
        handleClose();
        fetchExperiences();
      } else {
        return response.json()
        .then(data => {
          console.error('Error:', data);
        });
      }
    })
    .catch(error => console.error(error));
  }

  return(
    <>
      <button 
        variant='outline-secondary' 
        className='btn__altro mx-1 mt-3'
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
            onClick={handleElimina}>
            Elimina
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteExperience;
