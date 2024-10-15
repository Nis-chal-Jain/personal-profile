import { useState } from "react";
import sherdil from "./assets/sherdil.jpg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="p-8 m-1  bg-[#ffffff]">
        <div className="flex gap-[5vw] flex-col md:flex-row bg-[#ffffff]">
          <div className="rounded-xl bg-[#e2f6fc] hover:border  hover:border-blue-400 w-[85vw] md:w-[30%] h-[20vh] md:h-[90vh] flex flex-row md:flex-col">
            <img
              src={sherdil}
              alt=""
              className="m-5 md:mx-auto md:w-[70%] md:h-auto max-h-[100%] rounded-lg "
            />
            <div className="flex flex-col justify-center items-center w-full mx-auto">
              <h5 className="text-3xl poppins-semibold">Nischal Jain</h5>
              <p className="md:mx-3 text-sm mx-auto poppins-regular ">
                Passionate about <strong>Core CS</strong> and <strong>building things</strong>
              </p>
              <p className="poppins-regular text-sm">Fullstack | Web | Mobile</p>
              <div className="hidden md:block w-[80%] my-4">
                <div className="bg-blue-500 h-[1px] w-full "></div>
                <div className="m-auto my-4">
                  <p className="poppins-semibold inline">Email:</p>
                  <p className="inline mx-2">contactmenischal@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-xl bg-red-400 w-[85vw] md:w-[70%] h-[90vh] md:h-[90vh]"></div>
        </div>
      </div>
    </>
  );
}

export default App;
