import React, { useEffect, useState } from 'react';
import axios from "axios";
import { BiSearch } from "react-icons/bi";
import { useHistory } from 'react-router-dom';
import { Lister } from './lister';
import "./styles.css"

// This holds a list of some fiction people
// Some  have the same name but different age and id

export const Search = () => {

    const [name, setName] = useState('');
    const [foundUsers, setFoundUsers] = useState(null);

    const [state, setState] = useState(null);


    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/videos').then((response) => {
            setState(response.data)
        })
    }, [])

    const USERS = state

    const filter = (e) => {
        const keyword = e.target.value;
        if (keyword !== '') {
            const results = USERS.filter((user) => {
                return user.title.toLowerCase().startsWith(keyword.toLowerCase());
                // Use the toLowerCase() method to make it case-insensitive
            });
            setFoundUsers(results);
        } else {
            setFoundUsers('');
            // If the text field is empty, show all users
        }

        setName(keyword);
    };

    return (
        <>
            <div style={{ display: 'flex', alignContent: 'center' }} >

                <input value={name} onChange={filter} class="form-control mx-2"
                    type="search" placeholder="Search" aria-label="Search" style={{ height: '30px' }} />
                <BiSearch style={{ display: 'flex', alignSelf: 'center', fontSize: '30px' }} />


            </div>

            <div className='searchdiv'>
                <ul className='searchul'>
                    {foundUsers && foundUsers.length > 0 ? (
                        foundUsers.map((user) =>
                            (<Lister axios_url={`http://127.0.0.1:8000/api/video/${user.title}`} id={user.id} title={user.title} />)
                        )) : (
                        <li style={{ display: 'none' }}></li>
                    )}
                </ul>
            </div>



        </>
    );
}
