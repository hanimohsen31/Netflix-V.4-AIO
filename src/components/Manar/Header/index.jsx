import "./header.css";

export const Header = (props) => {
  return (
    <>
      <div id='Header'  className="myheader">

        <div className="buttons col-sm-12 m-3">
              
          {!localStorage.getItem("token") && <a href='/login' className='btn btn-danger mr-3'>Log In</a>}
          {/* {!localStorage.getItem("token") && <a href='/signup' className='btn btn-danger mr-3'>Sign UP</a>} */}

          {/* {localStorage.getItem("token") && <a href='/homein' className='btn btn-danger'>Home</a>} */}

          

        </div>

        <div className="internal">

          <div className="p1">
            <p>An Endless Number of Movies </p>
            <p>and Endless Televesion Shows</p>
            <p>watch now</p>
          </div>

          <div className="p2">
              <p>Enjoy watching your TV</p>
              <p>Watch on smart TVs and PlayStations</p>
          </div>

          <div class="input-group mb-3 container col-sm-8 col-lg-5">
            <input type="email" class="form-control" placeholder="Email Adress" aria-label="Recipient's username" aria-describedby="button-addon2" />


          {!localStorage.getItem("token") && <a href='/login' class="btn btn-danger" type="button" id="button-addon2">Start</a>}
          {localStorage.getItem("token") && <a href='/homein' class="btn btn-danger" type="button" id="button-addon2">Start</a>}

          </div>

        </div>
      </div>
    </>
  );
};
