import { Col, Container, Row } from 'react-bootstrap';

function Experiences() {
  return (
    <>
      <Container className='content__analisi content__info__profile p-4'>
        <Row className='user__detail'>
          <Col>
            <div className='d-flex align-items-center justify-content-between'>
              <h5 className='name mb-0'>Esperienze</h5>
              <div className='mx-3'>
                <span className='mx-3'><i className='fa-solid fa-plus'></i></span>
                <span><i className='fa-solid fa-pen'></i></span>
              </div>
            </div>
            <Container>
              <Row className='mt-4'>
                <Col>
                  <ul>
                    <li className='education mb-3'>
                      <img
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9bSdmyPGsBkS5WQ7fjHWoPIcYcHnOUlJ1cQ&s'
                        alt='Logo Epicode'
                        className='mr-2'
                      />
                      Epicode
                    </li>
                    <div className='divider_line mb-3'></div>

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