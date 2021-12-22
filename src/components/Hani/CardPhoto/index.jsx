import { FaPlayCircle } from "react-icons/fa";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { IoIosArrowDropdown } from "react-icons/io";
import { BsDot } from "react-icons/bs";
import './cardphoto.css'
import { useHistory } from 'react-router-dom';
import { useState, useContext } from "react";
import axios from "axios";
import { ApiContext } from '../../../Context/ApiContext';
import { AuthContext } from '../../../Context/authcontext';


export const CardPhoto = (props) => {
  let icoColor = '#d6d4d4'
const  apicontext=useContext(ApiContext)
const  authcontext=useContext(AuthContext)
  const axios_url=props.axios_url;
  const history = useHistory();
  
  const handleClick = (event) =>{ 
    event.preventDefault();

    history.push({pathname:"/details",state: {axios_url:axios_url}});}

   
const  handleAddMyList=async (event)=>{
  event.preventDefault();
  console.log(authcontext.user)
   await apicontext.post(`http://127.0.0.1:8000/api/video/${props.id}/${props.eps_num == null ? 'movie':'episode'}/addtomylist`,{user_id:authcontext.user})
}
    // useEffect(() => {
    //   axios.get(`http://127.0.0.1:8000/api/video/${props.id}/${props.eps_num == null ? 'movie':'episode'}/addtomylist`).then((result) => {
    //     console.log(result.data);
    //   });
    // }, [vids]);

  return (
    <>

      <div id='CardPhoto' className="card" >
        <video src={props.vidsrc} className="card-img-top" muted alt="" poster={props.imgsrc} />

        <div className="card-body">
        <div className='row' >

          <div className="col1 col-6" >
            <FaPlayCircle size='35px' style={{ color: icoColor }} />
          <a onClick={handleAddMyList}>
             <AiOutlinePlusCircle size='40px' style={{ color: icoColor }} />
          </a> 
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
            <p>{props.cat1}</p>
            <BsDot />
            <p>{props.cat2}</p> 
            <BsDot />
            <p>{props.cat3}</p>
          </div>

        </div>
      </div>
    </>
  );
};
