import { Col, Container, Row, Spinner, Alert, Button, Card, ListGroup } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import ModalExperience from './ModalExperience';
import AddExperience from '../AddExperience';
import UpdateExperience from '../UpdateExperience';


function Experiences({ id, login }) {

  const Token = process.env.TOKEN;
  
  const [Experiences, setExperience] = useState([]);
  const [isEnableSpinner, setIsEnableSpinner] = useState(false);
  const [isError, setIsError] = useState(false);
  const params = useParams();

  const idToUse = id || params._id; // Ottieni l'id da utilizzare

  console.log(idToUse);

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
              {login === 'me' ?
                (<div className='mx-3'>
                  <AddExperience />
                  {/* <button className='mx-1 add__experiences'><i className='fa-solid fa-plus'></i></button> */}
                  {/* <button className='upgrade__profile p-0'><i className='fa-solid fa-pen'></i></button> */}
                </div>
                ) : ''}
            </div>
            <Container>
              <Row>
                <Col>
                {isEnableSpinner && <div className='text-center mt-5'><Spinner animation='grow' /></div>}
                {isError && <div className='text-center mt-5'><Alert variant='danger'>Error loading...</Alert></div>}
               
                {Experiences.length > 0 ? (
                  Experiences.map((experience) => (
                    <div key={experience._id}>
                      <Card className='p-0 mt-2'>
                        <Card.Header className='text-bold'>{experience.company}</Card.Header>
                        <Card.Body>
                          <Card.Title className='text-bold'>{experience.role}</Card.Title>
                          <div className='d-flex gap-2 justify-content-start align-items-center'>
                            <ListGroup.Item 
                              style={{border:'solid 1px #ccc', padding:'10px', borderRadius:'10px'}} 
                            >
                              Data inizio: {format(new Date(experience.startDate), 'dd/MM/yyyy')}
                            </ListGroup.Item>
                            <ListGroup.Item 
                              style={{border:'solid 1px #ccc', padding:'10px', borderRadius:'10px'}}
                            >
                              Data fine: {experience.endDate ? format(new Date(experience.endDate), 'dd/MM/yyyy') : 'Ancora in corso'} 
                            </ListGroup.Item>
                          </div>
                          <div className="card-footer mt-2">
                            <ModalExperience experience={experience} />
                            {login === 'me' ? (<UpdateExperience />) : ''}
                        </div>
                        </Card.Body>
                      </Card>
                    </div>
                      ))
                  ) : (
                    <p>Non hai ancora pubblicato nulla</p>
                  )}
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Experiences;
