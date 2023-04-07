import React from "react";
import styled from "styled-components";

const FilterByRegion = (props) => {
    const { userOption, setUserOption } = props;

    const optionsData = ["Filter By Region", "Africa", "America", "Asia", "Europe", "Oceania"];

    return (
        <Filter onChange={(e) => setUserOption(e.target.value)}>
            {optionsData.map((cur, idx) => (
                <option key={idx} value={cur == "Filter By Region" ? "" : cur}>
                    {cur}
                </option>
            ))}
        </Filter>
    );
};

const Filter = styled.select`
    padding: 10px;
`;

export default FilterByRegion;
