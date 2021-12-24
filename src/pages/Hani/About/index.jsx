import { Navbar } from "../../../components/Hani/Navbar";
import "./style.css"
import fathi from "../../../files/fathi.jpg";
import hani from "../../../files/hani.jpg";
import manar from "../../../files/manar.jpg";
import mohamed from "../../../files/mohamed.jpg";


export const About = () => {
  // Colors || true = dark
  var darkcolor = "#191b1b"
  var lightcolor = '#fff'
  var gettheme = window.localStorage.getItem('theme');

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
      <div className="container my-2">
        
        {/* fathi */}
        <div className="row founders">
          <img className="col col-md-3 col-lg-2 m imgfound" src={fathi} alt='' />
          <div className="col m">
            <div className="mb">
              <a href="https://www.linkedin.com/in/fathi-eldeabas-10b775204/">
                <h2 className="ep-title">Fathi Eldeabas</h2>
              </a>
              <h5>Back-end Developer (Django/Flask/Python)</h5>
            </div>
            <p>
              I'm a Back-end web developer and I love computer science and problem-solving and all things related to computer science. I love to learn a lot and I want to have more and more skills in Various aspects of life. I want to be a great programmer and work in a lot of companies in over the world.My wisdom is "STAY HUNGRY ------ STAY FOOLISH"
            </p>
          </div>
        </div>

        {/* hani */}
        <div className="row founders">
          <img className="col col-md-3 col-lg-2 imgfound m" src={hani} alt='' />
          <div className="col m">
            <div className="mb">
              <a href="https://www.linkedin.com/in/haniomhsen3810/">
                <h2 className="ep-title">Hani Mohsen</h2>
              </a>
              <h5>Front End Developer (React)</h5>
            </div>
            <p>
              Hi, I am Hani Mohsen, an ITI Full Stack Development Using Python track graduate. I am looking to obtain a responsible and challenging Front End Developer position where my education and work experience will have valuable application.            </p>
          </div>
        </div>

        {/* manar */}
        <div className="row founders">

          <img className="col col-md-3 col-lg-2 imgfound m" src={manar} alt='' />
          <div className="col m">
            <div className="mb">
              <a href="https://www.linkedin.com/in/eng-manar-elmeiligy-iti/">
                <h2 className="ep-title">Manar Ali</h2>
              </a>
              <h5>Frontend web developer using React</h5>
            </div>
            <p>
              I am  Manar, and I always push myself to find new ways to do the things I want. I always do my best to meet deadlines with the best quality. I Like to work in a team and I have a good experience that enables me to be a professional team leader. I want to improve my skills and be a full stack web developer using python. Finally,   I used to work as a research assistance in my university also I love coding. I think both of them allows me to do what I want  using my specific way, based on my different classy tastes..
            </p>
          </div>
        </div>

        {/* mohamed */}
        <div className="row founders dddd">
          <img className="col col-md-3 col-lg-2 m " src={mohamed} alt='' />
          <div className="col m">
            <div className="mb">
              <a href="https://www.linkedin.com/in/mohamed-ali-1a0058158/">
                <h2 className="ep-title">Mohamed Ali</h2>
              </a>
              <h5>Full-Stack Web Developer Using ( Python & React )</h5>
            </div>
            <p>
              I am a Software Engineer I graduated in 2019 my graduation project was an employment website like "www.bayt.com" after that and During my military duty I built two Desktop apps to manage my unit after this I started to improve my skills in the web industry so I studied advanced web development Nanodegree at Udacity and built four projects through it after that I started as a trainee at information technology institute (ITI) to Sharpen my skills at web development industry this all about me.            </p>
          </div>
        </div>


      </div>
    </>
  )
}