// Import style css personalizzato
import '../style/Profile.css';

import React, { useEffect, useState } from 'react';
import { Alert, Card, Col, Container, Row, Spinner, Button } from 'react-bootstrap';


function Profile() {

  // URL dell'API per la lettura dei profili
  const url = 'https://striveschool-api.herokuapp.com/api/profile/me';

  // Recupero il token di autorizzazione
  const apiKey = process.env.TOKEN;
  console.log(apiKey);
  
  // Definizione degli stati locali
  const [profile, setProfile] = useState([]);
  const [isEnableSpinner, setIsEnableSpinner] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsEnableSpinner(true);
    fetch(url, {
      headers: {
        Authorization: 'Bearer ' + apiKey,
      },
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setProfile(data);
      setIsError(false);
    })
    .catch((error) => {
      console.error('Error loading...', error);
      setIsError(true);
    })
    .finally(() => setIsEnableSpinner(false)); 
  }, [])

  return ( 
    <>
      {isEnableSpinner && <div className='text-center'><Spinner animation='grow' /></div>}
      {isError && <div className='text-center'><Alert variant='danger'>Error loading...</Alert></div>}
      <div className='border-0 content-card'>
        <Container className='pb-4 content__profile'>
          <Row className='profile__bg'>
            <img
              src='https://media.licdn.com/dms/image/C4D16AQH3Fs7tJvTAbg/profile-displaybackgroundimage-shrink_350_1400/0/1625442218069?e=1724284800&v=beta&t=nl44PVgE69kZ53-JtB_5NDes4bVAvNJe84KSTVN8B3o'
              alt='Image backgroug profile'
            />
          </Row>
          <Row className='profile__image'>
            <img className='image__user' src={profile.image} alt={profile.name} />
          </Row>

          <Row className='user__detail'>
            <Col xs={12} md={8}>
              <h4 className='name mb-0 justify-content-start'>
                {profile.name} {profile.surname}
              </h4>
              <p className='my-0 occupation'>{profile.title}</p>
              <p className='my-0 location text-muted'>{profile.area} • <span className='connections'>Informazioni di contatto</span></p>

              <p className='my-2 connections'>
                5 collegamenti
              </p>
              <div className='d-flex justify-content-start w-100'>
                <Button className='profile__button open-to-btn'>
                  Disponibile per
                </Button>
                <Button
                  variant='outline-primary'
                  className='add__btn profile__button mx-3'
                >
                  Aggiungi sezione profilo
                </Button>
                <Button variant='outline-secondary' className='profile__button'>
                  Altro
                </Button>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <ul>
                <li className='education mb-1'>
                  <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9bSdmyPGsBkS5WQ7fjHWoPIcYcHnOUlJ1cQ&s'
                    alt='Logo Epicode'
                    className='mr-2'
                  />
                  Epicode
                </li>

                <li className='education'>
                  <img
                    src='https://www.sprovieri.it/wp-content/uploads/2023/01/logo-unical.png'
                    alt='Logo Università della Calabria'
                    className='mr-2'
                  />
                  Università degli Studi della Calabria
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </> 
  );
};

export default Profile;
