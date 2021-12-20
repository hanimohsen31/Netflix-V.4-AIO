import { Navbar } from "../../../components/Hani/Navbar";
import { Landing } from "../../../components/Hani/Landing";
import { SwiperApp } from "../../../components/Hani/SwiperApp";
import { FooterInner } from '../../../components/Manar/FooterInner';
// import { Grid } from "../../../components/Hani/Grid";

export const HomeIn = () => {
    document.body.style.background = '#191b1b';
    
    // localStorage.setItem('token','iamin1234')
    
    return (
        <>
            <Navbar />
            <Landing />
            <SwiperApp axios_url='http://127.0.0.1:8000/api/videos' slider_name='Trending Videos' />
            <SwiperApp axios_url='http://127.0.0.1:8000/api/movies' slider_name='Movies' />
            <SwiperApp axios_url='http://127.0.0.1:8000/api/serieses' slider_name='Serieses' />

            <SwiperApp axios_url='http://127.0.0.1:8000/api/action' slider_name='Action' />
            <SwiperApp axios_url='http://127.0.0.1:8000/api/fantasy' slider_name='Fantasy' />
            <SwiperApp axios_url='http://127.0.0.1:8000/api/scifi' slider_name='Sci-Fi' />
            <SwiperApp axios_url='http://127.0.0.1:8000/api/anime' slider_name='Anime' />
            <SwiperApp axios_url='http://127.0.0.1:8000/api/comedy' slider_name='Comedy' />
            <SwiperApp axios_url='http://127.0.0.1:8000/api/drama' slider_name='Drama' />
            <FooterInner />
        </>
    )
}