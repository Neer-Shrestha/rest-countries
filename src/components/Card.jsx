import React from "react";
import styled from "styled-components";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    & img {
        aspect-ratio: 415 / 277;
        inline-size: 100%;
        object-fit: cover;
        object-position: center center;
    }
`;

const Card = (props) => {
    const { country } = props;
    const { name, population, region, capital, flags } = country;

    const officialName = name?.official;
    const commonName = name?.common;

    return (
        <Col md={6} lg={4}>
            <Wrapper>
                <figure>
                    <Link to={`/country/${commonName}`}>
                        <img src={flags.svg} alt={officialName} />
                    </Link>
                </figure>
                <h2>
                    <Link to={`/country/${commonName}`}>{commonName}</Link>
                </h2>
                <ul>
                    <li>Population : {population}</li>
                    <li>Region : {region}</li>
                    <li>Capital : {capital}</li>
                </ul>
            </Wrapper>
        </Col>
    );
};

export default Card;
