import { Navbar } from "../../../components/Hani/Navbar";
import { Landing } from "../../../components/Hani/Landing";
import { SwiperApp } from "../../../components/Hani/SwiperApp";
import { Grid } from "../../../components/Hani/Grid";
import { FooterInner } from '../../../components/Manar/FooterInner';
import { useContext } from "react";
import { ApiContext } from "../../../Context/ApiContext";

export const Movies = () => {
    document.body.style.background = '#191b1b';
  const apicontext = useContext(ApiContext);


    return (
        <>
            <Navbar />
            <Landing />
            <SwiperApp videos={apicontext.movies} slider_name='Trending Movies' />
            <Grid videos={apicontext.movies} slider_name='Movies' />
            <FooterInner />
        </>
    )
}