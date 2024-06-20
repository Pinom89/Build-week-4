// Import style css personalizzato
import '../style/Profile.css';
import { useParams, useNavigate } from 'react-router-dom';

import React, { useEffect, useState } from 'react';
import { Alert, Col, Container, Row, Spinner, Button, ProgressBar } from 'react-bootstrap';
import Advised from './infoProfile/Advised';
import Analyses from './infoProfile/Analyses';
import Resources from './infoProfile/Resources';
import Activity from './infoProfile/Activity';
import Experiences from './infoProfile/Experiences';
import Skills from './infoProfile/Skills';


function UserProfile() {

  const params = useParams();
  // console.log(params.user);


  // URL dell'API per la lettura dei profili
  const url = 'https://striveschool-api.herokuapp.com/api/profile/';

  // Recupero il token di autorizzazione
  const Token = process.env.TOKEN;
  
  // Definizione degli stati locali
  const [profile, setProfile] = useState([]);
  const [isEnableSpinner, setIsEnableSpinner] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsEnableSpinner(true);
    fetch(url + params._id, {
      headers: {
        Authorization: 'Bearer ' + Token,
      },
    })
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      setProfile(data);
      setIsError(false);
    })
    .catch((error) => {
      console.error('Error loading...', error);
      setIsError(true);
    })
    .finally(() => setIsEnableSpinner(false)); 
  }, [params._id])

  return ( 
    <>
      {isEnableSpinner && <div className='text-center mt-5'><Spinner animation='grow' /></div>}
      {isError && <div className='text-center mt-5'><Alert variant='danger'>Error loading...</Alert></div>}
      
      <Container className='pb-2 border-0 content__card content__profile'>
        <Row className='profile__bg'>
          <img
            src='https://img.freepik.com/free-photo/gradient-navy-blue-digital-grid-wallpaper_53876-104785.jpg?size=626&ext=jpg&ga=GA1.1.1788614524.1718755200&semt=ais_user'
            alt='Image background profile'
          />
        </Row>
        <Row className='profile__image'>
          <img className='image__user' src={profile.image} alt={profile.name} />
        </Row>
        
        <Row className='user__detail mt-5'>
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
                <i class="fa-solid fa-user-plus"></i> Collegati
              </button>
              <button
                variant='outline-primary'
                className='add__btn mx-3 mt-3'
              >
                <i class="fa-solid fa-paper-plane"></i> Messaggio
              </button>
              <button 
                variant='outline-secondary' 
                className='btn__altro mx-3 mt-3'
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
      <Experiences id={profile._id} />

      {/* Competenze */}
      <Skills />
    </> 
  );
};

export default UserProfile;
