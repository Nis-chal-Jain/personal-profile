import sherdil from "../assets/sherdil.jpg";
import Contri from "../components/Contri";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  function setcontri(setsampledata1, sampledata1) {
    for (let i = 0; i < 32; i++) {
      let a = Math.floor(Math.random() * 10);
      if (
        a == sampledata1[i - 1] ||
        a == sampledata1[i - 1] - 1 ||
        a == sampledata1[i - 1] + 1
      ) {
        i--;
        continue;
      }
      setsampledata1((prevContributions) => ({
        ...prevContributions,
        [i]: a || 0,
      }));
    }
  }
  const [sampledata1, setsampledata1] = useState({});
  const [sampledata2, setsampledata2] = useState({});
  useEffect(() => {
    setcontri(setsampledata1, sampledata1);
    setcontri(setsampledata2, sampledata2);
  }, []);

  return (
    <>
      <div className="md:p-8 p-4 m-1  bg-[#ffffff]">
        <div className="flex gap-[5vw] flex-col md:flex-row bg-[#ffffff]">
          <div className="rounded-xl bg-blue-50 ml-[-11px] md:pt-6  w-[95vw] md:w-[30%] h-[20vh] md:h-[90vh] flex flex-row md:flex-col">
            <img
              src={sherdil}
              alt=""
              className="m-5 md:mx-auto md:w-[70%] md:h-auto max-h-[100%] rounded-lg "
            />
            <div className="flex flex-col justify-center items-center w-full mx-auto space-y-2">
              <h5 className="text-3xl lg:text-4xl poppins-semibold">
                Nischal Jain
              </h5>
              <p className="lg:mx-3 lg:text-base text-xs mx-auto poppins-regular ">
                <span className="hidden lg:inline">Passionate about</span>{" "}
                <strong>Core CS</strong> and <strong>building things</strong>
              </p>
              <p className="poppins-regular md:text-base text-xs">
                Fullstack | Web | Mobile
              </p>
              <div className="hidden md:block space-y-6 w-[80%] my-4 ">
                <div className="bg-blue-500 h-[1px] w-full "></div>
                <div className="flex lg:flex-row lg:gap-0 flex-col">
                  <p className="poppins-semibold inline">Email:</p>
                  <p className="inline mx-2 lg:text-base text-xs">
                    contactmenischal@gmail.com
                  </p>
                </div>
                <div className="flex lg:flex-row flex-col">
                  <p className="poppins-semibold inline">Location:</p>
                  <p className="inline mx-2">Bangalore</p>
                </div>
                <div className="flex lg:flex-row flex-col">
                  <p className="poppins-semibold inline">Ph no:</p>
                  <p className="inline mx-2">+91 9380060740</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-xl bg-purple-200  ml-[-11px] w-[95vw] md:w-[70%] h-[90vh] md:h-[90vh] ">
            <div className=" h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4 max-w-6xl mx-auto poppins-regular">
              <Link
                to="/projects"
                className="hover:bg-gray-100 bg-white rounded-lg p-3 flex flex-col md:text-4xl justify-evenly items-center text-lg min-h-[100px] sm:col-span-2 lg:col-span-2 cursor-pointer"
              >
                Projects
                <div className="flex gap-5 md:m-[-35px]">
                  <Contri data={sampledata1} />
                  <Contri data={sampledata2} />
                </div>
              </Link>

              <Link to="/edu" className="bg-white rounded-lg p-5 flex justify-center items-center text-lg min-h-[100px] cursor-pointer hover:bg-gray-100">
                Education and Achievements
              </Link>
              <Link to="/skills" className="bg-white rounded-lg p-5 flex justify-center items-center text-lg min-h-[100px] cursor-pointer hover:bg-gray-100">
                Skills
              </Link>
              <Link to="/resume" className="bg-white rounded-lg p-5 flex justify-center items-center text-lg min-h-[100px] cursor-pointer hover:bg-gray-100">
                Resume
              </Link>
              <Link to="/links" className="bg-white rounded-lg p-5 flex justify-center items-center text-lg min-h-[100px] cursor-pointer hover:bg-gray-100">
                Coding and Social profiles
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
