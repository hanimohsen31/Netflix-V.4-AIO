import { Navbar } from "../../../components/Hani/Navbar";
import { Landing } from "../../../components/Hani/Landing";
import { SwiperApp } from "../../../components/Hani/SwiperApp";
import { FooterInner } from "../../../components/Manar/FooterInner";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import ScardsList from "../../../components/Mohamed/ScardsList";
import { ApiContext } from '../../../Context/ApiContext';

export const HomeIn = () => {
const  apicontext=useContext(ApiContext)



  document.body.style.background = "#191b1b";
  const history = useHistory();
  const axios_url = "http://127.0.0.1:8000/api/videos";


  const [actions, setactions] = useState([]);
  const [fantasy, setfantasy] = useState([]);
  const [sci_Fi, setsci_Fi] = useState([]);
  const [anime, setanime] = useState([]);
  const [comedy, setcomedy] = useState([]);
  const [drama, setdrama] = useState([]);

  useEffect(() => {
    axios
      .get(axios_url, {
        params: {
          token: localStorage.getItem("token"),
        },
      })
      .then((result) => {
        apicontext.setVids(result.data);
        apicontext.setmovies(result.data.filter((entry) => entry.season_num > 0));
        apicontext.setepisodes(result.data.filter((entry) => entry.eps_num > 0));
        setactions(
          result.data.filter(
            (entry) =>
              entry.categories.filter(
                (val) =>
                  typeof val.title === "string" && val.title.includes("Action")
              ).length > 0
          )
        );
        setfantasy(
          result.data.filter(
            (entry) =>
              entry.categories.filter(
                (val) =>
                  typeof val.title === "string" && val.title.includes("Fantasy")
              ).length > 0
          )
        );
        setsci_Fi(
          result.data.filter(
            (entry) =>
              entry.categories.filter(
                (val) =>
                  typeof val.title === "string" && val.title.includes("Sci-Fi")
              ).length > 0
          )
        );
        setanime(
          result.data.filter(
            (entry) =>
              entry.categories.filter(
                (val) =>
                  typeof val.title === "string" && val.title.includes("Anime")
              ).length > 0
          )
        );
        setcomedy(
          result.data.filter(
            (entry) =>
              entry.categories.filter(
                (val) =>
                  typeof val.title === "string" && val.title.includes("Comedy")
              ).length > 0
          )
        );
        setdrama(
          result.data.filter(
            (entry) =>
              entry.categories.filter(
                (val) =>
                  typeof val.title === "string" && val.title.includes("Drama")
              ).length > 0
          )
        );
        console.log(actions);
        //   console.log(vids)
      })
      .catch((error) => {
        if (
          String(error).split(" ")[String(error).split(" ").length - 1] == "401"
        ) {
          history.push({ pathname: "/login" });
        }
      });
  }, []);


  return (
    <>
      <Navbar videos={apicontext.vids} />
        
      {  apicontext.results? <> 
        <h1 className=" text-light p-3">SearchResults </h1>
      <ScardsList video={apicontext.results} search={true}/></> :
      <> 
      <Landing />
      <SwiperApp videos={apicontext.vids} slider_name="Trending Videos" />
      <SwiperApp videos={apicontext.movies} slider_name="Movies" />
      <SwiperApp videos={apicontext.episodes} slider_name="Serieses" />
      <SwiperApp videos={actions} slider_name="Action" />
      <SwiperApp videos={fantasy} slider_name="Fantasy" />
      <SwiperApp videos={sci_Fi} slider_name="Sci-Fi" />
      <SwiperApp videos={anime} slider_name="Anime" />
      <SwiperApp videos={comedy} slider_name="Comedy" />
      <SwiperApp videos={drama} slider_name="Drama" />
      </>
     }

      <FooterInner />
    </>
  );
};
