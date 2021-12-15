import { FaPlayCircle } from "react-icons/fa";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { IoIosArrowDropdown } from "react-icons/io";
import { BsDot } from "react-icons/bs";
import './cardphoto.css'
import { useHistory } from 'react-router-dom';
import { useState } from 'react';



export const CardPhoto = (props) => {
  let icoColor = '#d6d4d4'

  const axios_url=props.axios_url;
  const history = useHistory();
  
  const handleClick = (event) =>{ 
    event.preventDefault();
    history.push({pathname:"/details",state: {axios_url:axios_url}});}

  return (
    <>

      <div id='CardPhoto' className="card" >
        <video src={props.vidsrc} className="card-img-top" muted alt="" poster={props.imgsrc} />

        <div className="card-body">
        <div className='row' >

          <div className="col1 col-6" >
            <FaPlayCircle size='35px' style={{ color: icoColor }} />
            <AiOutlinePlusCircle size='40px' style={{ color: icoColor }} />
          </div>

          <div className="col2 col-6" >
          <a onClick={handleClick} href="##">
            <IoIosArrowDropdown size='40px' style={{ color: icoColor }}/>
          </a>
          </div>

        </div>
          <div className='line1' >
            <p className='match'>Rate {props.rate}/10</p>
            <p className='age'>16+</p>
            {props.season_num > 0 && <p className="season_num_p">Season {props.season_num}</p>}
            {props.season_num < 1 && <p className="season_num_p">Movie</p>}
            <p className='quality'>HD</p>
          </div>

          <div className='line2'>
            <p>Cat1</p>
            <BsDot />
            <p>Cat1</p> 
            <BsDot />
            <p>Cat1</p>
          </div>
        </div>
      </div>
    </>
  );
};
