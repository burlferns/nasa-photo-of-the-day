import React from "react";
import { Container, Row, Col } from 'reactstrap';
import ApodCard from "./apod";


export default function ApodList() {
    // {imgUrlT, titleT, explainT, imgUrlD, titleD, explainD, day} ) {

    // render() {

    // return (
    //     <Container>
    //         <Row>
    //             <Col>
    //                 {/* <ApodCard imgUrl={imgUrlT} title={titleT} explanation={explainT} date="Today" /> */}
    //                 myColA
    //             </Col>
    //             <Col>
    //                 {/* <ApodCard imgUrl={imgUrlD} title={titleD} explanation={explainD} date={day} /> */}
    //                 myColB
    //             </Col>
    //         </Row>
    //     </Container>
    // );

    

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