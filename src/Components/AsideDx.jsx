import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa i CSS di Bootstrap
import { Container, Row, Col, Spinner, Alert } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const AsideDx = () => {

  const url = 'https://striveschool-api.herokuapp.com/api/profile/';

  const [profiles, setProfiles] = useState([]);
  const Token = process.env.TOKEN; // Assicurati che la variabile d'ambiente sia correttamente configurata
  const [isEnableSpinner, setIsEnableSpinner] = useState(false);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfiles = async () => {
      setIsEnableSpinner(true);
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + Token,
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setProfiles(data);
        setIsEnableSpinner(false);
        setIsError(false);
        console.log(data);
      }    
      catch (error) {
        console.error('Errore nella richiesta:', error);
        setIsError(true);
      }
    };

    fetchProfiles();
  }, []);

  return (
    <section className="card" tabIndex="-1" data-view-name="profile-card">
      <div className="card-header">
        <h4 className="card-title">Altri profili simili</h4>
      </div>
      {isEnableSpinner && <div className='text-center mt-1'><Spinner animation='grow' /></div>}
      {isError && <div className='text-center mt-1'><Alert variant='danger'>Error loading...</Alert></div>}
      <div className="list-group list-group-flush p-4">
        {profiles.length > 0 ? (
          profiles.map((profile) => (
            <Container onClick={() => navigate(`/profiles/${profile._id}`)} key={profile._id}>
              <Row className='justify-content-start my-2' >
              <Col md={3}>
              <img
                src={profile.image}
                alt={`Foto del profilo di ${profile.name}`}
                className="rounded-circle me-3"
                width="48"
                height="48"
                loading="lazy"
              />
              </Col>
              <Col md={9} className='d-column'>
                <h5 className="mb-1 text-start">{profile.name} {profile.surname}</h5>
                <p className="mb-1 text-start">{profile.title}</p>
              </Col>
              </Row>
              <div className='divider_line'></div>
            </Container >
          ))
        ) : (
          <p className="list-group-item">Nessun profilo trovato</p>
        )}
      </div>
      <div className="card-footer">
       {/* <a
          className="btn btn-secondary btn-sm w-100"
           href="https://www.linkedin.com" 
          target="_self"
        >
          Mostra tutto
        </a> */}

      </div>
    </section>
  );
}

export default AsideDx;

