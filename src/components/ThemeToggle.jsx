import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const LSTheme = localStorage.getItem("dark-theme");
        console.log(LSTheme);
        if (LSTheme == true) {
            setIsDark(true);
        }
    }, []);

    function handleDark() {
        setIsDark(!isDark);
        localStorage.setItem("dark-theme", isDark);
        isDark ? document.body.classList.add("dark-theme") : document.body.classList.remove("dark-theme");
    }

    return (
        <ThemeToggler onClick={handleDark}>
            {isDark ? <MdDarkMode /> : <CiLight />}
            {isDark ? "Dark" : "Light"} Mode
        </ThemeToggler>
    );
};

const ThemeToggler = styled.button`
    display: flex;
    align-items: center;
    gap: 10px;
    border: none;
    background-color: transparent;
`;

export default ThemeToggle;
