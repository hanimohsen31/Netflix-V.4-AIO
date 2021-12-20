import { useLocation } from "react-router-dom";
import {useHistory} from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import './style.css'

export const Preview = () => {
    document.body.style.background = 'black';
    let icoColor = '#d6d4d4'

    const location =useLocation()
    const vidsrc=  location.state.vidsrc
    const history = useHistory();

    return (
    <div className="container-fluid text-center align-start con">

        <BiArrowBack size='40px'className="aaa" style={{ color: icoColor }} onClick={() => history.goBack()}/>
        <video id='preview' src={vidsrc} controls style={{height:'95vh'}} autoPlay></video>

    </div>
    )
}