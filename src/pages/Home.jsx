import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import useFetch from "../hooks/useFetch";
import Card from "../components/Card";
import Loading from "../components/Loading";
import FilterByRegion from "../components/FilterByRegion";
import SearchBar from "../components/SearchBar";

document.title = `Rest Countries - Home`;

if (localStorage.getItem("dark-theme")) document.body.classList.add("dark-theme");

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://restcountries.com/";

const Home = () => {
    const [userInput, setUserInput] = useState("");
    const [userOption, setUserOption] = useState("");
    const { data: countries, loading } = useFetch(`${API_BASE_URL}/v3.1/all`);

    return (
        <Wrapper>
            {loading ? <Loading /> : null}
            <Container>
                <Row>
                    <Col className="mb-4">
                        <div className="d-flex flex-wrap justify-content-between gap-3">
                            <SearchBar setUserInput={setUserInput} />
                            <FilterByRegion setUserOption={setUserOption} />
                        </div>
                    </Col>
                </Row>
                <Row className="g-4">
                    {!loading &&
                        countries
                            ?.filter((country) => {
                                return country?.name?.common.toLowerCase().includes(userInput.toLowerCase());
                            })
                            ?.filter((country) => {
                                return country?.region.includes(userOption);
                            })
                            .map((country, idx) => {
                                return <Card key={idx} country={country} />;
                            })}
                </Row>
            </Container>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    padding: 70px;
`;

export default Home;
