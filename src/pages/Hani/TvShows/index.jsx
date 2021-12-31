import { Navbar } from "../../../components/Hani/Navbar";
import { Landing } from "../../../components/Hani/Landing";
import { SwiperApp } from "../../../components/Hani/SwiperApp";
import { Grid } from "../../../components/Hani/Grid";

import { FooterInner } from '../../../components/Manar/FooterInner';
import { useContext } from "react";
import { ApiContext } from "../../../Context/ApiContext";

export const TvShows = () => {
    document.body.style.background = '#191b1b';
    const apicontext = useContext(ApiContext);

    return (
        <>
            <Navbar />
            <Landing />
            <SwiperApp videos={apicontext.episodes} slider_name='Trending Serieses' />
            <Grid videos={apicontext.episodes} slider_name='Serieses' />
            <FooterInner />
        </>
    )
}