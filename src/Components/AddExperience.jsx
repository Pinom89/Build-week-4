import { Button, Form, Modal } from "react-bootstrap";
import { useState } from 'react';

function AddExperience({ id ,handleCommentChange,FormDataExperience, setFormDataExperience, idToUse}) {
  

  const superid = "6670713751a3a20015f06305";
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const Token = process.env.TOKEN;
  const url = `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`;

  
  
console.log(id);
console.log(idToUse);
  
  const sendComment = () => {
    console.log(FormDataExperience)
    fetch(url, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + Token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(FormDataExperience),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setFormDataExperience(data);
      handleClose();
    })
    .catch((error) => console.error(error))
  };

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
              <Form.Label>Ruolo</Form.Label>
              <Form.Control
                name="role"
                type="text"
                placeholder="Inserisci ruolo..."
                autoFocus
                onChange={handleCommentChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Azienda</Form.Label>
              <Form.Control
                name="company"
                type="text"
                placeholder="Inserisci azienda..."
                onChange={handleCommentChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Data inizio</Form.Label>
              <Form.Control
                name="startDate"
                type="date"
                placeholder="Data inizio"
                onChange={handleCommentChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Data fine</Form.Label>
              <Form.Control
                name="endDate"
                type="date"
                placeholder="Data fine"
                onChange={handleCommentChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Descrizione</Form.Label>
              <Form.Control
                name="description"
                type="text"
                placeholder="Descrivi la tua esperienza..."
                onChange={handleCommentChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Area</Form.Label>
              <Form.Control
                name="area"
                type="text"
                placeholder="Inserisci zona..."
                onChange={handleCommentChange}
              />
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
            onClick={ () => sendComment}>
            Aggiungi Esperienza
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddExperience;