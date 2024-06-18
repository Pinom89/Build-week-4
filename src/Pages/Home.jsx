import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import Profile from "../Components/Profile";
import AsideDx from "../Components/AsideDx";

export default function Home() {
    const apiKey = process.env.TOKEN

    console.log(apiKey);
    
  return (
        <>
        <Container>
            <Row>
                <Col md={8}>
                    <Profile />
                </Col>
                
                <Col md={4}>
                    <AsideDx />
                </Col>
            </Row>
        </Container>
        {/* <div className="container">
            <div className="flex-row flex-wrap">
                <div className="d-flex justify-content-between align-items-start">
                    <>
                        
                    </>
                    <div className="col-6">
                        <div>Home</div>
                    </div>
                    <div className="col-4">
                        
                    </div>
                </div>
            </div>
        </div> */}
    </>
  )
}
