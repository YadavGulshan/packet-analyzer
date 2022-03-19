import React from 'react';
import { LandingPage } from '../components/Landing';
import { NavBar } from '../components/Navbar';
import { DropFile } from '../components/DropFile';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

export default function Home() {
  return (
    <>
      <NavBar />
      <Container>
        <Row>
          <Col></Col>
          <Col xs={10}>
            <DropFile />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}
