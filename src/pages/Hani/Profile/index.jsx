import { Navbar } from "../../../components/Hani/Navbar"
import { FooterInner } from "../../../components/Manar/FooterInner"
import './styles.css'


export const Profile = () => {
    document.body.style.background = 'white';
    return(
        <>
        <div id="Profilediv">
            <Navbar />
        </div>
        <div id='Profile' className="container">
            <h1>Account</h1>
            <br /><hr />
            <div className="membership">
                <div className="row">
                    <div className="col1 col-sm-12 col-lg-3">
                        <h4>Membership &#38; Billing</h4>
                        <button className='btn btn-light'>Cancel Membership</button>
                    </div>

                    <div className="col2 col-sm-12 col-lg-9">
                        <h4>email@email.com</h4>                            
                        <h4>Password : <span className='password'>*********</span></h4>                            
                        <h4>Phone : <span className='phone'>01116886029</span></h4>                                                     
                    </div>
                </div>
                <br /><hr />
                <div className="row">
                    <div className="col1 col-sm-12 col-lg-3">
                        <h4>Plan Details</h4>
                    </div>
                    <div className="col2 col-sm-12 col-lg-9">
                        <h4>Standard HD</h4>                            

                    </div>
            </div>
            </div>
        </div>
        <FooterInner/>
        </>
    )
}