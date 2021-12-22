import { useState } from "react";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Inputuser } from "../../../components/Fathi/LoginInput/index";
import { FooterSec } from "../../../components/Fathi/FooterSec/index";
import axios from "axios";


export const SignUp = () => {
  // let lin = "www.google.com";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidCred, setIsValidCred] = useState(true);
  const [isValidCred1, setIsValidCred1] = useState(true);
  const [confirm_password, set_confirm_Password] = useState("");
  const [name, setName] = useState("");
  const [confirm_email, setconfirm_email] = useState("")
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirm_password) {
      setIsValidCred1(false)
    }

    else {

      await axios.post('http://localhost:8000/user/register', {
        name: name,
        email: email,
        password: password
      })
        .then(function (response) {
          console.log(response.data);
          setconfirm_email(true)
          return response.data;

          // history.replace("/login");
          // document.body.innerHTML = response.data
        }).then(function (response) {
          console.log(response, "dddd")
          if (response === "this email is used please try again") {

            setIsValidCred(false)
          }
          else
            alert(response)
            history.replace("/login");
        })
    };
  }
  return (
    <>
      <div className="wrapp">
        <div className="login_body">
          <div className="login_box">
            <h1>SignUp</h1>
            <form onSubmit={handleSubmit}>
              <div className="input-wrap">
                <Inputuser
                  type=""
                  placeholder="User Name"
                  value={name}
                  setValue={setName}
                />
              </div>
              <div className="input-wrap">
                <Inputuser
                  type="email"
                  placeholder="Email or Phone number"
                  value={email}
                  setValue={setEmail}
                />
              </div>
              <div className="input-wrap">
                <Inputuser
                  type="password"
                  placeholder="Password"
                  value={password}
                  setValue={setPassword}
                />
              </div>
              <div className="input-wrap">
                <Inputuser
                  type="password"
                  placeholder=" confirm Password"
                  value={confirm_password}
                  setValue={set_confirm_Password}
                />
              </div>
              <div className="input-wrap">
                {!isValidCred && (
                  <div className="alert alert-danger">
                    Invalid SignUp credentials in email  must be unique
                  </div>
                )}
                {!isValidCred1 && (
                  <div className="alert alert-danger">
                    Invalid in confirmation for password
                  </div>
                )}


                <button type="submit">SignUp</button>
              </div>
              <div className="login_footer">
                <div className="sign-up">
                  <p>
                    {" "}
                    if you have account?<NavLink className="navbar-brand" to="/login">Login now.</NavLink>
                  </p>
                </div>
                <div className="terms">
                  <p>
                    {" "}
                    this page is protected by Google to ensure you are not a bot{" "}
                    <NavLink className="navbar-brand" to="/terms">Learn more.</NavLink>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>

        <FooterSec />
      </div>
    </>
  );
};
