import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import useFetch from "../hooks/useFetch";
import SingleContent from "../components/SingleContent";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import { BsArrowLeft } from "react-icons/bs";

const API_URL = `https://restcountries.com/v3.1/name/`;

const SingleLayout = styled.section`
    padding: 70px;
`;

const Single = () => {
    const params = useParams();
    const { data: countries, loading, error } = useFetch(`${API_URL}${params.id}`);

    document.title = `Country - ${params.id}`;

    return (
        <SingleLayout>
            <Container>
                {loading ? <Loading /> : null}
                <Row className="gy-5">
                    <Col md={12}>
                        <Link className="btn-back" to="/">
                            <BsArrowLeft />
                            Back
                        </Link>
                    </Col>
                    {!loading && countries?.filter((country) => country.name.common === params.id).map((country, idx) => <SingleContent key={idx} country={country} />)}
                    {error ? (
                        <>
                            <h1>Sorry The country you are searching is not found.</h1>
                        </>
                    ) : null}
                </Row>
            </Container>
        </SingleLayout>
    );
};

export default Single;
