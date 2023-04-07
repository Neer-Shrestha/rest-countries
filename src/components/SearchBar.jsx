import React from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";

const SearchBar = (props) => {
    const { setUserInput } = props;
    return (
        <Wrapper>
            <button type="submit">
                <FiSearch />
                <span className="screen-reader-text">submit</span>
            </button>
            <input type="text" onChange={(e) => setUserInput(e.target.value)} name="searchCountry" id="searchCountry" />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    padding: 10px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    display: inline-flex;
    gap: 20px;
    align-items: center;

    & button {
        background: transparent;
        border: none;
    }

    & input {
        border: none;

        &:focus {
            outline: 1px solid transparent;
        }
    }
`;

export default SearchBar;
