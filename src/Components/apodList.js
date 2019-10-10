import React from "react";
import { Container, Row, Col } from 'reactstrap';
import ApodCard from "./apod";


export default function ApodList(
    {imgUrlT, titleT, explainT, imgUrlD, titleD, explainD, day} ) {

    return (
        <Container>
            <Row>
                <Col>
                    <ApodCard imgUrl={imgUrlT} title={titleT} explanation={explainT} date="Today" />
                </Col>
                <Col>
                    <ApodCard imgUrl={imgUrlD} title={titleD} explanation={explainD} date={day} />
                </Col>
            </Row>
        </Container>
    );
    
}

