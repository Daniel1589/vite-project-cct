import { Link } from "react-router-dom";
import { PiStarFourFill } from "react-icons/pi";
import { FaUserCircle } from "react-icons/fa";

export const NavBar = () => {
  return (
    <div className="mx-20 pt-6">
      <nav className="bg-amber-50 flex flex-nowrap items-center whitespace-nowrap py-5">
        <div className="flex-shrink-0 px-8 list-none">
          <li>
            <Link
              to="/"
              className="flex items-center gap-1 no-underline text-black text-lg"
            >
              <PiStarFourFill />
              The cleanic
            </Link>
          </li>
        </div>
        <div className="ml-auto flex gap-14 items-center list-none pr-8">
          <li>
            <Link
              to="/plans"
              className="no-underline text-black hover:underline"
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="no-underline text-black hover:underline"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="no-underline text-black hover:underline"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="flex items-center gap-2 no-underline text-black"
            >
              <p className="hover:text-gray-600">Log In</p>
              <FaUserCircle className="pt-1 w-6 h-6" />
            </Link>
          </li>
          <li>
            <Link to="/booknow">
              <input
                type="button"
                value="Book Now"
                className="text-base bg-black text-white hover:text-black hover:bg-amber-50 rounded-full w-36 h-10 duration-[400ms] hover:cursor-pointer"
              ></input>
            </Link>
          </li>
        </div>
      </nav>
    </div>
  );
};
