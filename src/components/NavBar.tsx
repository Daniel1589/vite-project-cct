import { Link } from "react-router-dom";
import { PiStarFourFill } from "react-icons/pi";
import { FaUserCircle } from "react-icons/fa";

export const NavBar = () => {
  return (
    <div className="bg-amber-50">
      <nav className="flex flex-nowrap items-center whitespace-nowrap mt-6 mx-100 ">
        <div className="flex-shrink-0 px-8 list-none">
          <li>
            <Link to="/" className="">
              <PiStarFourFill />
              The cleanic
            </Link>
          </li>
        </div>
        <div className="ml-auto flex gap-14 items-center list-none pr-8">
          <li>
            <Link to="/plans" className="">
              Plans
            </Link>
          </li>
          <li>
            <Link to="/services" className="">
              Services
            </Link>
          </li>
          <li>
            <Link to="/about" className="">
              About
            </Link>
          </li>
          <li>
            <Link to="/login" className="flex items-center gap-2 ">
              <p className="hover:text-gray-600">Log In</p>
              <FaUserCircle />
            </Link>
          </li>
          <li>
            <Link to="/booknow">
              <input type="button" value="Book Now" className=""></input>
            </Link>
          </li>
        </div>
      </nav>
    </div>
  );
};
