import React from "react";
import ScardsList from "../../../components/Mohamed/ScardsList/index";
import { useState, useEffect } from "react";
import axios from "axios";
import { Navbar } from "../../../components/Hani/Navbar/index";
import { useHistory } from 'react-router-dom';

export const MyList = (props) => {
  const axios_url = "http://127.0.0.1:8000/api/video/mylist";
  const history = useHistory();  


  document.body.style.background = "#191b1b";
  const [vid, setVid] = useState([]);

  useEffect(async () => {
   await axios
      .get(axios_url, {
        params: {
          token: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setVid(response.data);
      }).catch(error=>{
        if (String(error).split(" ")[String(error).split(" ").length-1]=="401"){
          history.push({pathname:"/login"});
        }
      });


  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <ScardsList video={vid} />
      </div>
    </>
  );
};
