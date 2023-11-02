import github from '../../assets/github.svg'
import instagram from '../../assets/instagram.svg'
import linkedin from '../../assets/linkedin.svg'
import facebook from '../../assets/facebook.svg'
const index = () => {
  return (
    <footer className="border-t-[1px] bg-slate-800 border-slate-200 flex-col flex w-full py-9 justify-center items-center">
      <div className="flex gap-3 w-full items-center justify-center mb-3">
        <a href="https://github.com/squizyiinxx" className="rounded-full p-2 z-10 overflow-hidden relative border-[1px] md:p-3 after:content-[''] after:w-full after:absolute after:bottom-0 after:left-0 after:block after:h-0 after:bg-yellow-300 after:transition-all after:duration-300 after:ease-in-out hover:after:h-full after:-z-10">
          <img src={github} alt="github" className="w-3 sm:w-5 " />
        </a>
        <a href="https://instagram.com/meis.joel/" className="rounded-full p-2 z-10 overflow-hidden relative border-[1px] md:p-3 after:content-[''] after:w-full after:absolute after:bottom-0 after:left-0 after:block after:h-0 after:bg-yellow-300 after:transition-all after:duration-300 after:ease-in-out hover:after:h-full after:-z-10">
          <img src={instagram} alt="instagram" className="w-3 sm:w-5  " />
        </a>
        <a href="https://linkedin.com/in/joel21" className="rounded-full p-2 z-10 overflow-hidden relative border-[1px] md:p-3 after:content-[''] after:w-full after:absolute after:bottom-0 after:left-0 after:block after:h-0 after:bg-yellow-300 after:transition-all after:duration-300 after:ease-in-out hover:after:h-full after:-z-10">
          <img src={linkedin} alt="linkedin" className="w-3 sm:w-5  " />
        </a>
        <a href="https://facebook.com/ijulemce" className="rounded-full p-2 z-10 overflow-hidden relative border-[1px] md:p-3 after:content-[''] after:w-full after:absolute after:bottom-0 after:left-0 after:block after:h-0 after:bg-yellow-300 after:transition-all after:duration-300 after:ease-in-out hover:after:h-full after:-z-10">
          <img src={facebook} alt="facebook" className="w-3 sm:w-5  " />
        </a>
      </div>
      <h1 className="text-white text-sm md:text-base ">&copy; Copyright All rights reserved</h1>
      <h1 className="text-white text-sm md:text-base italic">Powered by Squizyiinxx</h1>
    </footer>
  );
}

export default index