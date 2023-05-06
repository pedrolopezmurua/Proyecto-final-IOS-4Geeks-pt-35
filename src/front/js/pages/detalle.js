import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const Detalles = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    return (
        <div className="text-center mt-5">
            <h1>Macbook Pro m1 13"</h1>
            <h2>Apple Macbook Pro 13" "M1" Gris 8GB RAM 512 GB SSD (2021) Gris Espacial </h2>
            <h3>Valor: $1250.000-.</h3>
        </div>
    );
};

Detalles.propTypes = {
    match: PropTypes.object
};
