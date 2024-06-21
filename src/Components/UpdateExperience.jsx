import { useEffect, useState } from "react";
import { Form, Modal } from "react-bootstrap";
import { format } from 'date-fns';

function UpdateExperience({ id, idExp, experience, fetchExperiences }) {
  console.log('La mia esperienza: ', experience);

  const Token = process.env.TOKEN;
  const url = `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences/${idExp}`;

  const [show, setShow] = useState(false);
  const [formDataExperience, setFormDataExperience] = useState({ 
    role: '',
    company: '',
    startDate: '',
    endDate: '',
    description: '',
    area: ''
  });

  useEffect(() => {
    if (experience) {
      setFormDataExperience({
        role: experience.role,
        company: experience.company,
        startDate: experience.startDate ? experience.startDate.split('T')[0] : '',
        endDate: experience.endDate ? experience.endDate.split('T')[0] : '',
        description: experience.description,
        area: experience.area
      });
    }
  }, [experience]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleExperienceChange = (e) => {
    const { name, value } = e.target;
    setFormDataExperience({
      ...formDataExperience,
      [name]: value
    });
  };

  const handleUpdateExperience = () => {
    fetch(url, {
      method: 'PUT',
      headers: {
        Authorization: 'Bearer ' + Token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formDataExperience),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        handleClose();
        fetchExperiences();
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <button 
        variant='primary'
        className='btn__altro mx-3 mt-3'
        onClick={handleShow}
      >
        Modifica
      </button>

      <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Aggiorna Esperienza</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className='mb-3'>
              <Form.Label>Ruolo</Form.Label>
              <Form.Control
                type='text'
                name='role'
                value={formDataExperience.role}
                onChange={handleExperienceChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Azienda</Form.Label>
              <Form.Control
                type='text'
                name='company'
                value={formDataExperience.company}
                onChange={handleExperienceChange}
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Data inizio</Form.Label>
              <Form.Control
                type='date'
                name='startDate'
                value={formDataExperience.startDate}
                onChange={handleExperienceChange}
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Data fine</Form.Label>
              <Form.Control
                type='date'
                name='endDate'
                value={formDataExperience.endDate}
                onChange={handleExperienceChange}
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Descrizione</Form.Label>
              <Form.Control
                type='text'
                name='description'
                value={formDataExperience.description}
                onChange={handleExperienceChange}
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Luogo</Form.Label>
              <Form.Control
                type='text'
                name='area'
                value={formDataExperience.area}
                onChange={handleExperienceChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button 
            variant='secondary'
            className='btn__altro'
            onClick={handleClose}
          >
            Chiudi
          </button>
          <button
            variant='outline-primary'
            className='add__btn'
            onClick={handleUpdateExperience}
          >
            Aggiorna Profilo
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateExperience;