import { useState } from "react";
import UserProfile from "./UserProfile";
import AsideBar from "./AsideBar";

const HeaderVideo = () => {
  const [isAsideOpen, setIsAsideOpen] = useState(false);

  const toggleAside = () => {
    setIsAsideOpen(!isAsideOpen);
  };

  return (
    <div className="relative">
      {isAsideOpen && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 z-10"
          onClick={toggleAside}
        ></div>
      )}
      <header className="flex flex-col justify-center w-full max-md:max-w-full relative z-5">
        <section className="flex flex-col justify-center pt-2 w-full bg-white max-md:max-w-full">
          <div className="flex gap-5 mx-6 max-md:flex-wrap max-md:mr-2.5">
            <div className="flex flex-auto justify-between gap-1 items-center max-md:flex-wrap">
              <div className="flex">
                <img
                  alt=""
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d078f69799addbd5991a76135631fe846e02f11e8fd4323ad7625905fb6d4f19?apiKey=068bc3b969a34e00abe7da326a2da205&"
                  className="shrink-0 self-stretch my-auto w-6 aspect-square cursor-pointer"
                  onClick={toggleAside}
                />
                <div className="flex flex-col self-stretch pb-2 pl-4 max-md:max-w-full">
                  <div className="justify-center py-2 text-2xl font-bold tracking-tight leading-10 text-neutral-800 max-md:max-w-full">
                    Video Tittle
                  </div>
                  <div className="flex gap-2 self-start tracking-normal text-gray-500">
                    <UserProfile />
                    <div className="flex flex-col justify-center self-center">
                      <div className="flex gap-1 pr-6 max-md:pr-5">
                        <div className="flex flex-col justify-center text-sm leading-6">
                          <div className="justify-center">Students Name</div>
                        </div>
                        <div className="justify-center text-sm leading-6 whitespace-nowrap text-gray-500 text-opacity-20">
                          ・
                        </div>
                        <div className="justify-center pr-1 text-xs leading-6">
                          1 day ago
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 justify-between items-center self-stretch my-auto text-sm font-medium tracking-normal leading-6 text-center max-md:flex-wrap">
                <img
                  alt=""
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f080f786e98cf49a4bcdf1e95e13fc9bf1e1248ab02dba7b0cd3b2b334a7750?apiKey=068bc3b969a34e00abe7da326a2da205&"
                  className="shrink-0 self-stretch my-auto w-6 aspect-square"
                />
                <img
                  alt=""
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7414ff3a1672743c73e9ee47274e8fd682e94f6d060c5ed6c394500cb9e721a9?apiKey=068bc3b969a34e00abe7da326a2da205&"
                  className="shrink-0 self-stretch my-auto w-6 aspect-square"
                />
                <div className="flex gap-2 self-stretch px-4 py-1.5 whitespace-nowrap border border-solid border-gray-500 border-opacity-30 rounded-[7992px] text-neutral-800">
                  <img
                    alt=""
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/510b85e941f7c1bee6f06f7631c88af71794da325e128263b0cfc1426d9f368c?apiKey=068bc3b969a34e00abe7da326a2da205&"
                    className="shrink-0 w-5 aspect-[0.83]"
                  />
                  <div>Share</div>
                </div>
                <div className="self-stretch my-auto text-gray-500 leading-[172%]">
                  1/25 videos
                </div>
                <div className="flex gap-2 self-stretch px-4 py-1.5 text-white whitespace-nowrap bg-sky-500 rounded-[7992px]">
                  <img
                    alt=""
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b4aefb9056e7823789cb76cf2e227a6a8ad26635b7783af2c470e38af20ff486?apiKey=068bc3b969a34e00abe7da326a2da205&"
                    className="shrink-0 w-4 aspect-[0.67]"
                  />
                  <div>Upgrade</div>
                </div>
                <div className="shrink-0 self-stretch my-auto w-px h-8 bg-gray-500 bg-opacity-30" />
                <img
                  alt=""
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f07abc6b109a68601f01cede4af5c526f4dcfe9349a6e0d0a0e8ab6c1e55078e?apiKey=068bc3b969a34e00abe7da326a2da205&"
                  className="shrink-0 self-stretch my-auto w-6 aspect-square"
                />
                <img
                  alt=""
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3753441d157b13c5f85199bce44a9759bb263c5c7eff466a2fc16996dde67c8c?apiKey=068bc3b969a34e00abe7da326a2da205&"
                  className="shrink-0 self-stretch my-auto w-6 aspect-square"
                />
              </div>
            </div>
            <UserProfile className="h-10 w-10 self-center" />
          </div>
        </section>
        <hr className="mt-2 w-full bg-gray-500 bg-opacity-20 min-h-[1px] max-md:max-w-full" />
      </header>
      <AsideBar isOpen={isAsideOpen} />{" "}
    </div>
  );
};

export default HeaderVideo;
