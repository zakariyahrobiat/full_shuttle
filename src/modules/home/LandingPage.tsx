import Navbar from "../../components/NavBar/NavBar";
import HeroLogo from "../../assets/driver.png";
import { NavLink } from "react-router-dom";
import BackgroundImageLayout from "../../layout/BackgroundImageLayout";

// eslint-disable-next-line no-empty-pattern
const LandingPage = () => {
  return (
    <BackgroundImageLayout>
      <Navbar />
      <section
        className="flex flex-col-reverse mt-10
                   md:mt-[20vh] md:flex-row
      "
      >
        <div className="flex md:flex-1">
          <div className="left-hero">
            <div className="heading">
              <p
                className="text-3xl mb-5 font-bold uppercase
                md:text-5xl
              "
              >
                {" "}
                Federal University Lokoja Shuttle
              </p>
              <p
                className="text-1xl text-gray-300 mb-5 text-justify
                  md:text-2xl 
              "
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                cupiditate vitae, adipisci voluptas perspiciatis fugit, magni
                facilis in exercitationem id soluta ea illum quo quisquam. Velit
                id voluptas veniam aperiam.
              </p>

              <p className="text-sm text-gray-300">
                Click to register as either a passanger or a driver
              </p>
            </div>

            <div className="flex gap-8 mt-6">
              <NavLink to={"register-driver"}>
                <button className="min-w-4 bg-button-blue px-10 py-2 rounded-md">
                  Driver
                </button>
              </NavLink>

              <NavLink to={"register-client"}>
                <button className="min-w-4 bg-button-blue px-10 py-2 rounded-md">
                  Passanger
                </button>
              </NavLink>
            </div>
          </div>
        </div>

        <div
          className="hidden 
                    md:flex-1 md:gap-8 md:flex md:justify-center md:items-center"
        >
          <img className="" src={HeroLogo} alt="image description" />
        </div>
      </section>
    </BackgroundImageLayout>
  );
};

export default LandingPage;
