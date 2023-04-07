import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
    const HeaderContent = styled.div`
        padding: 15px 0;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);

        & .site-brand {
            color: #000;

            &:hover {
                opacity: 0.7;
            }
        }

        & .header-inner {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    `;

    return (
        <HeaderContent>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="header-inner">
                            <h1>
                                <Link className="site-brand" to="/">
                                    Where in the world
                                </Link>
                            </h1>
                            <ThemeToggle />
                        </div>
                    </Col>
                </Row>
            </Container>
        </HeaderContent>
    );
};

export default Header;
