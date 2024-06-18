
// Import style css personalizzato
import '../style/Profile.css';


import React, { useEffect, useState } from 'react';
import { Alert, Col, Container, Row, Spinner, Button, ProgressBar } from 'react-bootstrap';

function UserProfile() {

  // URL dell'API per la lettura dei profili
  const url = 'https://striveschool-api.herokuapp.com/api/profile/me';

  // Recupero il token di autorizzazione
  const apiKey = process.env.TOKEN;
  
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
                <button className='profile__button open__to__btn'>
                  Disponibile per
                </button>
                <button
                  variant='outline-primary'
                  className='add__btn mx-3'
                >
                  Aggiungi sezione profilo
                </button>
                <button variant='outline-secondary' className='btn__altro'>
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

      {/* Consigliato per te */}
      <div className='border-0 content__consigliato'>
        <Container className='pb-4 content__profile'>
          <Row className='user__detail'>
            <Col>
              <h5 className='name mb-0'>Consigliato per te</h5>
              <p className='my-0 occupation'>Solo per te</p>
              <p>Intermedio</p>
              <ProgressBar variant='secondary' now={60} className='bg-light progress__bar' />
              <p className='my-0 location text-muted'>Completa 1 passaggio per raggiungere il livello <span className='connections'>Massimo</span></p>
              <div className='content__riepilogo'>
                <h5>Scrivi un riepilogo per mettere in evidenza la tua personalità o la tua esperienza lavorativa</h5>
                <p>Gli utenti che includono un riepilogo ricevono fino a 3,9 volte più visualizzazioni del profilo.</p>
                <button variant='outline-secondary' className='btn__altro'>
                  Aggiungi un riepilogo
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Analisi */}
      <div className='border-0 content__analisi'>
        <Container className='pb-4 content__profile'>
          <Row className='user__detail'>
            <Col>
              <h5 className='name mb-0'>Analisi</h5>
              <p className='my-0 occupation'>Solo per te</p>
              <Container>
                <Row>
                  <Col>
                    <p>0 visualizzazioni del profilo</p>
                    <p>Aggiorna il tuo profilo per attrarre visitatori.</p>
                  </Col>
                  <Col>
                    <p>0 impressioni del post</p>
                    <p>Crea un post per aumentare l'interesse.</p>
                    <p className='text-muted'>Ultimi 7 giorni</p>
                  </Col>
                </Row>
              </Container>
              <div className='link__analisi'>
                <p className='text-center'>Mostra tutte le analisi</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Risorse */}
      <div className='border-0 content__risorse'>
        <Container className='pb-4 content__profile'>
          <Row className='user__detail'>
            <Col>
              <h5 className='name mb-0'>Risorse</h5>
              <p className='my-0 connections'>solo per te</p>
                <h5>La mia rete</h5>
                <p>Salva e gestisci i tuoi collegamenti e interessi.</p>
                <h5>Elementi salvati</h5>
                <p>Monitora le tue offerte di lavoro, i corsi e gli articoli.</p>
              <div className='link__analisi'>
                <p className='text-center'>Mostra tutte le risorse</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Attività */}
      <div className='border-0 content__attività'>
        <Container className='pb-4 content__profile'>
          <Row className='user__detail'>
            <Col>
              <h5 className='name mb-0'>Attività</h5>
              <p className='my-0 connections'>5 followers</p>
                <h5>Non hai ancora pubblicato nulla</h5>
                <p>I post che condividi appariranno qui</p>
              <div className='link__analisi'>
                <p className='text-center'>Mostra tutte le attività</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </> 
  );
};

export default UserProfile;
