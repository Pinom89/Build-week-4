import { Form, Modal, Button } from "react-bootstrap";
import { useState, useEffect } from 'react';

function UpdateProfile({ profile, fetchProfile }) {
  console.log('Il mio profilo: ', profile);

  const Token = process.env.TOKEN;
  const url = 'https://striveschool-api.herokuapp.com/api/profile/';

  const [show, setShow] = useState(false);
  const [formDataProfile, setFormDataProfile] = useState({ 
    name: '',
    surname: '',
    email: '',
    username: '',
    area: '',
    title: '',
    bio: '',
    image: ''
  });

  useEffect(() => {
    if (profile) {
      setFormDataProfile({
        name: profile.name,
        surname: profile.surname,
        email: profile.email,
        username: profile.username,
        area: profile.area,
        title: profile.title,
        bio: profile.bio,
        image: profile.image
      });
    }
  }, [profile]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setFormDataProfile({
      ...formDataProfile,
      [name]: value
    });
  };

  const handleUpdateProfile = () => {
    fetch(url, {
      method: 'PUT',
      headers: {
        Authorization: 'Bearer ' + Token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formDataProfile),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        handleClose();
        fetchProfile();
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <button 
        variant='primary'
        className='upgrade__profile p-0'
        onClick={handleShow}
      >
        <i className='fa-solid fa-pen'></i>
      </button>

      <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Aggiorna Profilo Utente</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className='mb-3'>
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type='text'
                name='nome'
                value={formDataProfile.name}
                onChange={handleProfileChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Cognome</Form.Label>
              <Form.Control
                type='text'
                name='surname'
                value={formDataProfile.surname}
                onChange={handleProfileChange}
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type='email'
                name='email'
                value={formDataProfile.email}
                onChange={handleProfileChange}
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type='text'
                name='username'
                value={formDataProfile.username}
                onChange={handleProfileChange}
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Luogo</Form.Label>
              <Form.Control
                type='text'
                name='area'
                value={formDataProfile.area}
                onChange={handleProfileChange}
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Titolo</Form.Label>
              <Form.Control
                type='text'
                name='title'
                value={formDataProfile.title}
                onChange={handleProfileChange}
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Biografia</Form.Label>
              <Form.Control
                type='text'
                name='bio'
                value={formDataProfile.bio}
                onChange={handleProfileChange}
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Immagine del profilo</Form.Label>
              <Form.Control
                type='url'
                name='image'
                value={formDataProfile.image}
                onChange={handleProfileChange}
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
            onClick={handleUpdateProfile}
          >
            Aggiorna Profilo
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateProfile;
