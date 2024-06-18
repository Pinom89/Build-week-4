import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import  UserProfile from '../Components/UserProfile';
import AsideDx from '../Components/AsideDx';
 
 function OtherProfile() {
  return (
   
<Container>
            <Row>
                <Col md={8}>
                    <UserProfile />
                </Col>
                
                <Col md={4}>
                    <AsideDx />
                </Col>
            </Row>
        </Container>


  )
}
export default OtherProfile;