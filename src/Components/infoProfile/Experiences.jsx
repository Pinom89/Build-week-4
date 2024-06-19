import { Col, Container, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';


function Experiences({id}) {
  const Token = process.env.TOKEN;
  console.log(Token);
  const [Experiences, setExperience] = useState([]);
  const [isEnableSpinner, setIsEnableSpinner] = useState(false);
  const [isError, setIsError] = useState(false);
  const params = useParams();

  console.log(id);
  const idToUse = id || params._id; // Ottieni l'id da utilizzare

  const urlExperiences = 'https://striveschool-api.herokuapp.com/api/profile';
  useEffect(() => {
    setIsEnableSpinner(true);
    fetch(`${urlExperiences}/${idToUse}/experiences`, {
      headers: {
        Authorization: 'Bearer ' + Token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setExperience(data);
        setIsError(false);
      })
      .catch((error) => {
        console.error('Error loading...', error);
        setIsError(true);
      })
      .finally(() => setIsEnableSpinner(false));
  }, [id, params._id]);

  console.log(Experiences);

  return (
  
    <>
      <Container className='content__analisi content__info__profile p-4'>
        <Row className='user__detail'>
          <Col>
            <div className='d-flex align-items-center justify-content-between'>
              <h5 className='name mb-0'>Esperienze</h5>
              <div className='mx-3'>
                <button className='mx-1 add__experiences'><i className='fa-solid fa-plus'></i></button>
                <button className='upgrade__profile p-0'><i className='fa-solid fa-pen'></i></button>
              </div>
            </div>
            <Container>
              <Row className='mt-4'>
                <Col>
                {isEnableSpinner && <div className='text-center mt-5'><Spinner animation='grow' /></div>}
                {isError && <div className='text-center mt-5'><Alert variant='danger'>Error loading...</Alert></div>}
               <ul>
               {Experiences.length > 0 ? (
                Experiences.map((experience) => (
                  <div key={experience.id}>
                    <li>{experience.company}</li>
                    <li>{experience.description}</li>
                    <li>{experience.startDate}</li>
                    <li>{experience.endDate}</li>
                  </div>
                     ))
                ) : (
                  <p>Non hai ancora pubblicato nulla</p>
                )}
             </ul>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
      <div className='link__analisi'>
        <p className='text-center'>Mostra tutti i titoli di studio (3) <i className='fa-solid fa-arrow-right'></i></p>
      </div>
    </>
  );
};

export default Experiences;