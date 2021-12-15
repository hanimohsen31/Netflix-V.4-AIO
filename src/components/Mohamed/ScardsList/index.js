import React from 'react'
import { FaChevronCircleDown } from 'react-icons/fa';
import SCard from '../SCard/index';

function ScardsList() {
    return (<>
        <h1 className=" text-light p-3">More Like This </h1>
        <div class="position-relative row   p-3">

            <SCard/>
            <SCard/>
            <SCard/>
            <SCard/>
            <SCard/>
            <SCard/>
            <SCard/>
            <SCard/>
            
            <div className="banner-fadebottom "><FaChevronCircleDown className="position-absolute m-auto icons fixed-bottom"/></div>
        

        </div>
        </>
    )
}

export default ScardsList
