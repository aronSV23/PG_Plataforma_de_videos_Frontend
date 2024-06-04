import { Link } from "react-router-dom";
import UserProfile from "./UserProfile";

const VideoCard = () => {
  return (
    <article className="flex flex-col justify-center w-60 mt-4 drop-shadow-2xl hover:text-white hover:scale-105 transition-all duration-300 ease-in-out hover:bg-zinc-700 cursor-pointer rounded-3xl p-2">
      <div className="flex flex-col justify-center rounded-2xl">
        <div className="flex flex-col pb-2 rounded-2xl shadow-sm bg-white bg-opacity-0">
          <div className="flex flex-col justify-center text-white rounded-2xl">
            <Link to='/video' >        <section className="flex flex-col py-2.5 pl-4 w-full rounded-2xl bg-neutral-800 aspect-video">
              <header className="flex gap-5 justify-between items-start text-sm tracking-normal leading-6 whitespace-nowrap max-md:mr-2">
                <div className="justify-center items-center px-1 bg-black rounded-md w-[33px] ">
                  1.00
                </div>
              </header>
              <span className="justify-center self-end py-1 pr-3.5 pl-3 mt-14 text-xs font-medium tracking-normal leading-5 bg-neutral-800 rounded-[7992px]">
                3 min
              </span>
            </section>
            </Link>    
          </div>
          <section className="flex flex-col mx-4 mt-4 max-md:mx-2.5">
            <div className="flex flex-row gap-2 items-center">
              <UserProfile className=" text-lg w-7 h-7" />
              <div className="flex flex-row ">
                <div className="flex justify-between text-xs tracking-normal leading-5">
                  <p className=" justify-center items-center font-medium  ">
                    Student Name
                  </p>
                  <p className=" text-gray-500">・1 day ago</p>
                </div>
              </div>
            </div>
            <p className="flex text-xs font-medium mt-2 tracking-normal leading-6 ">
              Description - 31-01-2024
            </p>
            <div className="flex overflow-hidden relative pl-16 flex-row justify-between mt-4 w-full text-xs tracking-normal leading-5">
              <div className="flex flex-row">
                <img
                  loading="lazy"
                  src="../src/assets/visibility.svg"
                  className="w-4 fill-black "
                  alt=""
                />
                <span className="relative justify-center items-start px-1">
                  3
                </span>
              </div>
              <div className="flex flex-row ">
                <img
                  loading="lazy"
                  src="../src/assets/messages.svg"
                  className=" w-4"
                  alt=""
                />
                
                <span className="relative justify-center items-start px-1">
                  0
                </span>
              </div>

              <div className="flex flex-row">
                <img
                  loading="lazy"
                  src="../src/assets/like.svg"
                  className="w-4"
                  alt=""
                />
                <span className="relative justify-center items-start px-1">
                  3
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
};

export default VideoCard;
