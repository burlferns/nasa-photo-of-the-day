import React from "react";
import styled from "styled-components";

let card_width=500;
let card_margin=20;

const CardBack = styled.div`
    background: lightgrey;
    width:${card_width}px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: black;
`;

const CardTitle = styled.h2`
    font-family: 'Oswald', sans-serif;
    font-size: 30px;
    text-align: center;
    max-width:${card_width-card_margin}px;
`;

const CardImg = styled.img`
    max-width:${card_width-card_margin}px;
    max-height:500px;
`;

const CardInfo = styled.p`
    max-width:${card_width-card_margin}px;
    font-family: 'Slabo 27px', serif;
    font-size: 16px;
    text-align: left;

`;

const CardDate = styled.p`
    font-family: 'Oswald', sans-serif;
    font-size: 16px;
    text-align: left;
    max-width:${card_width-card_margin}px;
`;

export default function ApodCard({imgUrl,title,explanation,date})  {
    return (
        <CardBack>
             <CardTitle>{title}</CardTitle>
            <CardImg alt="Nasa's astronomy picture" src={imgUrl} />
            <CardInfo>{explanation}</CardInfo>
            <CardDate>{date}</CardDate>
        </CardBack>
      
    );
  
}
  