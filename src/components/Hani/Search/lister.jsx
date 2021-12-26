import React, { useEffect, useState } from 'react';
import axios from "axios";
import { BiSearch } from "react-icons/bi";
import { useHistory } from 'react-router-dom';
import "./styles.css"


// This holds a list of some fiction people
// Some  have the same name but different age and id

export const Lister = (props) => {

    const axios_url = props.axios_url;
    const history = useHistory();
    // handle click
    const handleClick = (event) => {
        event.preventDefault();
        history.push({ pathname: "/details", state: { axios_url: axios_url } });
    }
    return (
        <>
            <li className="user">
                <a onClick={handleClick} href="####" style={{textDecoration:'none'}}>
                    <span style={{ color: 'white' }}>{props.title}</span>
                </a>
            </li>
        </>
    );
}
