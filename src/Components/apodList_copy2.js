import React from "react";
import { Container, Row, Col } from 'reactstrap';



export default function ApodList() {
    

    

    return (
        <Container>
            <Row>
                <Col>.colA</Col>
            </Row>
            <Row>
                <Col>.colB</Col>
                <Col>.colB</Col>
                <Col>.colB</Col>
                <Col>.colB</Col>
            </Row>
            <Row>
                <Col xs="3">.colC-3</Col>
                <Col xs="auto">.colC-auto - variable width content</Col>
                <Col xs="3">.colC-3</Col>
            </Row>
        </Container>
    );


    



    
}