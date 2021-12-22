import { NavLink } from "react-router-dom";


export const  FooterSec=() =>{
    let lin = 'www.google.com'

    return(
        <>
            <div className="site-footer-wrapper-centered">
                <div className="site-footer">
                    <div>
                        <p className="footer-top"><a className="footer-top-a" href={lin}>Questions? Contact us.</a></p>
                    </div>
                    <div className="row">
                        <div className=" col-sm-12 col-md-6 col-lg-3">
                            <ul className="footer-links">
                                <li className="footer-link-item"><NavLink to="/">FAQ</NavLink></li>
                                <li className="footer-link-item"><NavLink to="/">Help Center</NavLink></li>
                            </ul>
                        </div>
                        <div className=" col-sm-12 col-md-6 col-lg-3">
                            <ul className="footer-links">
                                <li className="footer-link-item"><NavLink to="/">Terms of Use</NavLink></li>
                                <li className="footer-link-item"><NavLink to="/">Privacy</NavLink></li>
                            </ul>
                        </div>
                        <div className=" col-sm-12 col-md-6 col-lg-3">
                            <ul className="footer-links">
                                <li className="footer-link-item"><NavLink to="/">Cookie Preferences'</NavLink></li>
                            </ul>
                        </div>
                        <div className=" col-sm-12 col-md-6 col-lg-3">
                            <ul className="footer-links">
                                <li className="footer-link-item"><NavLink to="/">Corporate informatione</NavLink></li>
                            </ul>
                        </div>
                    
                    </div>
                    <div className="row">
                        <div className=" col-sm-12 col-md-6 col-lg-3">
                        <div className="dropdown lan">
                            <button className="btn  dropdown-toggle lan" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                            Languages
                            </button>
                                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                                    <li ><a className="dropdown-item active " href={lin}>English</a></li>
                                    <li ><a className="dropdown-item " href={lin}>العربيه</a></li>
                                </ul>
                        </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
    
}