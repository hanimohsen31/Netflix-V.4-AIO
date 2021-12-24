import { Navbar } from "../../../components/Hani/Navbar";
import { Landing } from "../../../components/Hani/Landing";
import { SwiperApp } from "../../../components/Hani/SwiperApp";
import { Grid } from "../../../components/Hani/Grid";
import { FooterInner } from '../../../components/Manar/FooterInner';
import { Grid2 } from "../../../components/Hani/Grid2";


export const MyList = () => {
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
            <div style={{backgroundColor : 'black'}}><Navbar /></div>
            <Grid2 axios_url='http://127.0.0.1:8000/api/viewmylist' slider_name='My List' />
            <FooterInner />
        </>
    )
}