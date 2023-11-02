import { useEffect, useState } from 'react';
import logo from '../../assets/logo.png';
import Navlink from './NavLink';
import Search from './Search';

function Navbar() {
 
  const [isScrolled, setisScrolled] = useState(false);
  const [sideBar, setSideBar] = useState(false)

  useEffect(()=>{
    const handleScroll = () =>{
      if(window.scrollY > 0){
        setisScrolled(true);
      }else{
        setisScrolled(false);
      }

      window.addEventListener('scroll', handleScroll);
      
    };
    handleScroll();
  },[])

  const handleSideBar = (bool : boolean) =>{
    setSideBar(bool);
  }
  return (
    <>
      <nav className={`flex w-full justify-between items-center md:py-3 transition-all duration-300 px-[100px] py-0 lg:py-5 fixed top-0 z-[999] ${isScrolled && !sideBar && "bg-white bg-opacity-25 backdrop-blur-lg"}`}>
        <img src={logo} alt="logo" className="w-[70px] md:w-[80px]" />
        <div onClick={() => handleSideBar(true)} className="flex cursor-pointer gap-1 flex-col p-5 lg:hidden">
          <span className="bg-white h-1 w-6 block rounded-lg"></span>
          <span className="bg-white h-1 w-6 block rounded-lg"></span>
          <span className="bg-white h-1 w-5 block rounded-lg"></span>
        </div>
        <div
          className={`bg-slate-100 p-5 backdrop-blur-lg bg-white bg-opacity-25 h-screen absolute lg:relative w-full lg:w-[80%] flex justify-end lg:justify-around flex-col-reverse lg:flex-row items-center lg:h-0 lg:left-0 lg:bg-transparent lg:backdrop-blur-none
        top-0 ${sideBar ? "right-0" : "-left-full"}
        `}
        >
          <Navlink />
          <Search />
          <div onClick={() => handleSideBar(false)} className={`lg:hidden absolute top-10 left-[5%] flex-col w-max flex gap-2 cursor-pointer group transition-all p-3 duration-300 ${!sideBar ? 'rotate-180 -translate-x-10' : 'rotate-0 translate-x-0'}`}>
            <span className="transition-all duration-300 group-hover:bg-red-500 bg-white block w-6 h-1 rounded-lg rotate-45 translate-y-3"></span>
            <span className="transition-all duration-300 group-hover:bg-red-500 bg-white block w-6 h-1 rounded-lg translate -rotate-45"></span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar