import { Link } from "react-router-dom";

const Navlink = () => {
  return (
    <div className="flex justify-center h-screen lg:h-auto items-center">
      <ul className="flex flex-col lg:flex-row  gap-12 items-center">
        <li>
          <Link
            to="/"
            className="text-white md:text-base font-bold lg:font-normal lg:text-xl hover:text-yellow-300 
          after:content-[''] after:w-0 after:block after:h-[3px] after:bg-yellow-300 
          after:duration-300 after:ease-in-out after:rounded-md hover:after:w-full"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="text-white md:text-base font-bold lg:font-normal lg:text-xl hover:text-yellow-300 
          after:content-[''] after:w-0 after:block after:h-[3px] after:bg-yellow-300 
          after:duration-300 after:ease-in-out after:rounded-md hover:after:w-full"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/manga"
            className="text-white md:text-base font-bold lg:font-normal lg:text-xl hover:text-yellow-300 
          after:content-[''] after:w-0 after:block after:h-[3px] after:bg-yellow-300 
          after:duration-300 after:ease-in-out after:rounded-md hover:after:w-full"
          >
            Manga
          </Link>
        </li>
        <li>
          <Link
            to="/movie"
            className="text-white md:text-base font-bold lg:font-normal lg:text-xl hover:text-yellow-300 
          after:content-[''] after:w-0 after:block after:h-[3px] after:bg-yellow-300 
          after:duration-300 after:ease-in-out after:rounded-md hover:after:w-full"
          >
            Movie
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navlink