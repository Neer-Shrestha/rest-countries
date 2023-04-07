import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;

    background-color: rgba(0 0 0 / 50%);
    z-index: 1000;
    inset: 0;
`;
const Spinner = styled.span`
    width: 40px;
    height: 40px;
    display: inline-block;
    border-radius: 50%;
    border: 3px solid #333;
    border-top-color: transparent;
    animation: rotate 1s infinite linear;
`;

const Loading = () => {
    return (
        <Wrapper>
            <Spinner></Spinner>
        </Wrapper>
    );
};

export default Loading;
