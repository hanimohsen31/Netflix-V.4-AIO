import React from 'react'
import TrailerCard from '../TrailerCard/index';

function TrailerCardList() {
    return (<>
        <h1 className="text-light p-3">Trailers & More</h1>
        <div class="row   p-3">
            <TrailerCard/>
            <TrailerCard/>
            <TrailerCard/>
           
        </div>
        </>
    )
}

export default TrailerCardList
