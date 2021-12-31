import { Navbar } from "../../../components/Hani/Navbar";
import { Landing } from "../../../components/Hani/Landing";
import { SwiperApp } from "../../../components/Hani/SwiperApp";
import { Grid } from "../../../components/Hani/Grid";
import { FooterInner } from '../../../components/Manar/FooterInner';


export const Movies = () => {
    // Colors || true = dark
    var darkcolor = "#191b1b"
    var lightcolor = '#fff'
    if (window.localStorage.getItem('theme') == 'true'){
        document.body.style.background = darkcolor;
    }
    else if (window.localStorage.getItem('theme') == 'false'){
        document.body.style.background = lightcolor;
    }
    else {
        document.body.style.background = darkcolor;
    }
     
    return (
        <>
            <Navbar />
            <Landing />
            <SwiperApp axios_url='http://127.0.0.1:8000/api/movies' slider_name='Trending Movies' />
            {/* <Grid axios_url='http://127.0.0.1:8000/api/movies' slider_name='Movies' /> */}
            <FooterInner />
        </>
    )
}