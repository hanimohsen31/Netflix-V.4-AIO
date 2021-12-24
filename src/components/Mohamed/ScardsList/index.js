import React from 'react'
import { FaChevronCircleDown } from 'react-icons/fa';
import SCard from '../SCard/index';

function ScardsList({video}) {
    return (<>
        <h1 className=" text-light p-3">My List </h1>
        <div class="position-relative row   p-3">
        {video.map((p) => (       
         <SCard video={p}/>
         ))}                 
            <div className="banner-fadebottom "><FaChevronCircleDown className="position-absolute m-auto icons fixed-bottom"/></div>
        </div>
        </>
    )
}

export default ScardsList
