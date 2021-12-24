import React, { useEffect, useState } from 'react';
import axios from "axios";
import { BiSearch } from "react-icons/bi";


// This holds a list of some fiction people
// Some  have the same name but different age and id

export const Search = () => {
    const [name, setName] = useState('');
    const [foundUsers, setFoundUsers] = useState(null);

    const [state, setState] = useState(null);


    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/videos').then((response)=>{
            setState(response.data)
        })
    }, [])

    console.log('foundersss',foundUsers)
    const USERS = state
    console.log('ussers',USERS)

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
        <>  <div style={{display:'flex',alignContent:'center'}} >
             <input value={name} onChange={filter} class="form-control mx-2" 
             type="search" placeholder="Search" aria-label="Search" style={{ height: '30px' }} />
            <BiSearch style={{display: 'flex',alignSelf: 'center',fontSize: '30px'}}/>
             </div>

            <div>
                {foundUsers && foundUsers.length > 0 ? (
                    foundUsers.map((user) => (
                        <li className="user">
                            <span className="user-name" style={{color : 'white'}}>{user.title}</span>
                        </li>
                    ))
                ) : (
                    // <h1>No results found!</h1>
                    <h1></h1>

                )}
            </div>
        </>
    );
}
