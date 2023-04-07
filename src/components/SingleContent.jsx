import React from "react";
import { Col } from "react-bootstrap";

const SingleContent = (props) => {
    const { country } = props;
    const { name, population, tld, currencies, region, languages, subregion } = country;
    const { capital, borders, flags } = country;

    const languageList = Object.values(languages);
    let [firstKey] = Object.keys(currencies);

    return (
        <>
            <Col md={6}>
                <img src={flags?.svg} alt={name?.official} />
            </Col>
            <Col md={6}>
                <h2>{name?.common}</h2>

                <ul className="county-info-list">
                    <li>Native Name: {name?.common}</li>
                    <li>
                        Top Level Domain:{" "}
                        {tld?.map((domain, idx) => (
                            <span key={idx}>{domain}</span>
                        ))}
                    </li>
                    <li>Population: {population}</li>
                    <li>Currencies: {currencies[firstKey]?.name}</li>
                    <li>Region: {region}</li>
                    <li>
                        Language:
                        {languageList.map((lang, idx) => (
                            <span key={idx}>{lang}</span>
                        ))}
                    </li>
                    <li>Sub Region: {subregion}</li>
                    <li>Capital: {capital}</li>
                </ul>

                {borders ? (
                    <div className="border-countries">
                        <h3 className="title">Border Countries :</h3>
                        <ul className="border-country-list">
                            {borders?.map((borderCountryName, index) => (
                                <li key={index}>
                                    <span>{borderCountryName}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : null}
            </Col>
        </>
    );
};

export default SingleContent;
