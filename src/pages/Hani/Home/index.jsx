import { Navbar } from "../../../components/Hani/Navbar";
import { Landing } from "../../../components/Hani/Landing";
import { SwiperApp } from "../../../components/Hani/SwiperApp";
import { FooterInner } from '../../../components/Manar/FooterInner';

export const HomeIn = () => {
    document.body.style.background = '#191b1b';
    
    localStorage.setItem('token','iamin1234')
    
    return (
        <>
            <Navbar />
            <Landing />
            <SwiperApp axios_url='http://127.0.0.1:8000/api/videos' slider_name='Trending Videos' />
            <SwiperApp axios_url='http://127.0.0.1:8000/api/movies' slider_name='Movies' />
            <SwiperApp axios_url='http://127.0.0.1:8000/api/serieses' slider_name='Serieses' />

            <FooterInner />
        </>
    )
}