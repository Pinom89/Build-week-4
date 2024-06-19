// Import style css personalizzato
import '../style/Profile.css';

import React, { useEffect, useState } from 'react';
import { Alert, Col, Container, Row, Spinner, Button, ProgressBar } from 'react-bootstrap';
import Advised from './infoProfile/Advised';
import Analyses from './infoProfile/Analyses';
import Resources from './infoProfile/Resources';
import Activity from './infoProfile/Activity';
import Experiences from './infoProfile/Experiences';
import Skills from './infoProfile/Skills';
import { useNavigate } from 'react-router-dom';

function Profile() {

  // URL dell'API per la lettura dei profili
  const url = 'https://striveschool-api.herokuapp.com/api/profile/me';

  // Recupero il token di autorizzazione
  const Token = process.env.TOKEN;
  
  // Definizione degli stati locali
  const [profile, setProfile] = useState([]);
  const [isEnableSpinner, setIsEnableSpinner] = useState(false);
  const [isError, setIsError] = useState(false);



  useEffect(() => {
    setIsEnableSpinner(true);
    fetch(url, {
      headers: {
        Authorization: 'Bearer ' + Token,
      },
    })
    .then((response) => response.json())
    .then((data) => {
      
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
      {isEnableSpinner && <div className='text-center mt-5'><Spinner animation='grow' /></div>}
      {isError && <div className='text-center mt-5'><Alert variant='danger'>Error loading...</Alert></div>}
     
      <Container className='pb-2 border-0 content__card content__profile'>
        <Row className='profile__bg'>
          <img
            src='https://media.licdn.com/dms/image/C4D16AQH3Fs7tJvTAbg/profile-displaybackgroundimage-shrink_350_1400/0/1625442218069?e=1724284800&v=beta&t=nl44PVgE69kZ53-JtB_5NDes4bVAvNJe84KSTVN8B3o'
            alt='Image backgroug profile'
            className='shadow'
          />
        </Row>
        <Row className='profile__image'>
          <img className='image__user' src={profile.image} alt={profile.name} />
        </Row>
        <div className='d-flex justify-content-end '>
          <button className='upgrade__profile p-0'><i className='fa-solid fa-pen'></i></button>
        </div>
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
            <div className='d-column justify-content-start'>
              <button 
                className='profile__button open__to__btn mx-3 mt-3'
              >
                Disponibile per
              </button>
              <button
                variant='outline-primary'
                className='add__btn mx-3 mt-3'
              >
                Aggiungi sezione profilo
              </button>
              <button 
                variant='outline-secondary' 
                className='btn__altro mt-3'
              >
                Altro
              </button>
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
                  src='https://cdn.stocksnap.io/img-thumbs/960w/woman-developer_HMPNPRBUJ7.jpg'
                  alt='Logo FullStack Web Developer'
                  className='mr-2'
                />
                FullStack Web Developer
              </li>
            </ul>
          </Col>

          <div className='d-flex justify-content-center gap-4 p-4'>
            <div className='content__info_1 w-75 p-2'>
              <Col>
                <p className='my-0 occupation'>Disponibile a lavorare</p>
                <p className='my-0 occupation'>Ruoli Developer</p>
                <a className='connections'>Mostra dettagli</a>
              </Col>
            </div>
            <div className='content__info_2 w-75 p-2'>
              <Col>
                <p className='my-0 occupation'>Fai sapere che stai facendo selezione e attrai candidati qualificati</p>
                <a className='connections'>Inizia</a>
              </Col>
            </div>
          </div>
        </Row>
      </Container>

      {/* Consigliato per te */}
      <Advised />
      
      {/* Analisi */}
      <Analyses />

      {/* Risorse */}
      <Resources />
      
      {/* Attività */}
      <Activity />

      {/* Esperienze */}
      <Experiences />

      {/* Competenze */}
      <Skills />
    </> 
  );
};

export default Profile;
