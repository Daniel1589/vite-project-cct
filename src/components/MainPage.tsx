import { NavBar } from "./NavBar";
import MainImage from "../media/mainBG.jpeg";
import { ContactUs } from "./ContactUs";

export const MainPage = () => {
  return (
    <div
      className="bg-cover bg-center h-[1000px] "
      style={{ backgroundImage: `url(${MainImage})` }}
    >
      <NavBar />
      <section className="pt-20 text-amber-50 pl-20">
        <div className="pb-1 text-5xl w-1/4">
          Remarkably Cleaner. Amazingly Simpler.
        </div>
        <div className="py-3 text-xl w-2/5">
          Providing spotless cleaning services for busy people since 2035.
          Always on time, always smiling.
        </div>
        <input
          type="button"
          value="Book Now"
          className="bg-amber-50 border-amber-50 w-36 h-12 rounded-full hover:cursor-pointer hover:bg-opacity-0 duration-[400ms] hover:text-amber-50"
        ></input>
      </section>
      <ContactUs />
    </div>
  );
};
