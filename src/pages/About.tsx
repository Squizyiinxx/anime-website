
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img from '../assets/about.png'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
const About = () => {
    
  return (
    <div className="flex bg-slate-800 -z-[2] flex-col overflow-hidden w-full">
      <div className="flex justify-center w-full z-[1] overflow-hidden items-center relative h-[300px] bg-slate-800 md:h-[500px] lg:h-screen before:content-[''] before:block before:w-full before:h-[200px] before:absolute before:z-[2] before:bottom-0 before:left-0 before:bg-slate-800 before:rounded-t-[80%] ">
        <img src={img} alt="hero" className="w-full absolute left-0 top-0  opacity-50" />
        <h1 className="text-2xl font-agbal lg:text-6xl font-bold text-white z-[3]">About</h1>
      </div>
      <div className="flex z-20 flex-col p-4 md:p-20 justify-center items-center">
        <p className="text-white text-sm w-full md:text-2xl md:w-[70%] ">
          This website is created for fun only, not for business or commerce, If you want to use this website for learning or reference, you can download or clone it You are free to search for the anime you want here, if there are any shortcomings
          or errors,
          <br /> <br />
          please contact me at{" "}
          <a href="mailto: wowmr51@gmail.com" className="text-yellow-300">
            <FontAwesomeIcon icon={faEnvelope} /> wowmr51@gmail.com
          </a>
          <br /> <br />
          You are free to develop and create this website as you wish @ANIMEXX
        </p>
        <p className="text-yellow-300 text-center mb-32 md:mb-10text-sm w-full mt-32 md:text-2xl md:w-[70%]">Thanks Jikan for the REST API Enjoy and explore</p>
      </div>
    </div>
  );
}

export default About