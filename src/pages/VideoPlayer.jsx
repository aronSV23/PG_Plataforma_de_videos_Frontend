function VideoPlayer() {
  const comments = [
    {
      id: 1,
      name: "Student 1231231",
      time: "3:39",
      date: "Dec 29, 2022",
      userInitial: "K",
      content: "That's a nice video",
    },
    {
      id: 2,
      name: "Student 012321809",
      time: "3:57",
      date: "Feb 21",
      userInitial: "V",
      content: "Great!!",
    },
    {
      id: 3,
      name: "Anonymous",
      time: "4:18",
      date: "Nov 15, 2022",
      userInitial: "A",
      content: "Awesome",
    },
    {
      id: 4,
      name: "Student 214464",
      time: "4:18",
      date: "Feb 8",
      userInitial: "",
      content: "Great work buddy!",
    },
    {
      id: 5,
      name: "Teacher 12355896",
      time: "4:18",
      date: "5d",
      userInitial: "",
      content: "Great job!",
    },
  ];

  return (
    <div className="flex flex-col justify-center bg-white">
      <header className="flex flex-col justify-center w-full max-md:max-w-full">
        <section className="flex flex-col justify-center pt-2 w-full bg-white max-md:max-w-full">
          <div className="flex gap-5 mx-6 max-md:flex-wrap max-md:mr-2.5">
            <div className="flex flex-auto justify-between gap-1 items-center max-md:flex-wrap">
              <div className="flex ">
                <img
                  alt=""
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d078f69799addbd5991a76135631fe846e02f11e8fd4323ad7625905fb6d4f19?apiKey=068bc3b969a34e00abe7da326a2da205&"
                  className="shrink-0 self-stretch my-auto w-6 aspect-square"
                />
                <div className="flex justify-center items-center self-stretch my-auto">
                  <img
                    alt=""
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a06ba58563708540bc7a81ee6aae9c129e2bf32b9f92358235a1ec15bd807ca1?apiKey=068bc3b969a34e00abe7da326a2da205&"
                    className="aspect-[1.61] w-[13px]"
                  />
                </div>
                <div className="flex flex-col self-stretch pb-2 pl-4 max-md:max-w-full">
                  <div className="justify-center py-3 text-2xl font-bold tracking-tight leading-10 text-neutral-800 max-md:max-w-full">
                    Video Tittle
                  </div>
                  <div className="flex gap-2 self-start tracking-normal text-gray-500">
                    <img
                      alt=""
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e681bc94bf78cbacf2e9423ed83bcb068d39a8d1b0f67fb6fcd12c3ec897874?apiKey=068bc3b969a34e00abe7da326a2da205&"
                      className="shrink-0 w-6 aspect-square"
                    />
                    <div className="flex flex-col justify-center self-start">
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
            <div className="flex flex-col justify-center items-center my-auto w-9 h-9 text-xl tracking-tight leading-5 text-center text-red-400 whitespace-nowrap bg-white rounded-[7992px]">
              <div className="justify-center items-center px-3 w-9 h-9 bg-red-400">
                M
              </div>
            </div>
          </div>
        </section>
        <hr className="mt-2 w-full bg-gray-500 bg-opacity-20 min-h-[1px] max-md:max-w-full" />
      </header>
      <main className="justify-center w-full bg-gray-700 bg-opacity-0 max-md:max-w-full">
        <section className="flex gap-5 max-md:flex-col max-md:gap-0">
          <section className="flex flex-col w-[78%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow pt-6 max-md:mt-4 max-md:max-w-full">
              <div className="flex flex-col justify-center px-6 max-md:pl-5 max-md:max-w-full">
                <div className="flex flex-col justify-center pb-20 bg-black aspect-video rounded-lg max-md:max-w-full">
                  <div className="flex flex-col justify-center max-md:max-w-full">
                    <div className="flex flex-col justify-center rounded-xl max-md:max-w-full">
                      <div className="flex flex-col justify-center bg-black max-md:max-w-full">
                        <div className="flex gap-5 justify-center items-center pt-2.5 pr-11 pb-20 pl-4 bg-zinc-800 bg-opacity-10 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                         
                          <div className="flex flex-col pb-20 pl-10 mt-2.5 max-md:max-w-full">
                            
                            <div className="flex justify-center items-center mt-48 max-w-full w-[120px] max-md:mt-10">
                              <img
                                alt=""
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe87cb09ea42f698903e8afc02d50a9d4cd61f562df438c40182741357f06350?apiKey=068bc3b969a34e00abe7da326a2da205&"
                                className="w-full shadow-sm aspect-square"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-5 justify-between mt-4 mb-2 max-w-full text-sm font-medium leading-6 text-center text-neutral-800 w-[1014px] max-md:flex-wrap">
                  <img
                    alt=""
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d4369627852c02a48285d3a8efbfe5a788b54a7ff3f54a09e9d3ec5036a49db?apiKey=068bc3b969a34e00abe7da326a2da205&"
                    className="shrink-0 self-start shadow-lg aspect-[1.2] w-[58px]"
                  />
                  <div className="flex flex-col justify-center p-px border border-solid bg-gray-700 bg-opacity-0 border-gray-500 border-opacity-20 rounded-[7992px] max-md:max-w-full">
                    <div className="flex gap-3 py-2 pr-1 pl-3 items-center  max-md:flex-wrap">
                      <div className="flex gap-2 justify-center my-auto text-2xl leading-10 whitespace-nowrap">
                        <div className="grow">😂</div>
                        <div>😍</div>
                        <div>😮</div>
                        <div>🙌</div>
                        <div>👍</div>
                        <div>👎</div>
                        
                      </div>
                      <div className="flex gap-2.5 px-3 py-1 tracking-normal whitespace-nowrap rounded-[7992px]">
                        <img
                          alt=""
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/76602f75d0815d22484962ef6b9c0a1f2808ad059ff97621232e15199377f6a4?apiKey=068bc3b969a34e00abe7da326a2da205&"
                          className="shrink-0 aspect-[0.75] w-[18px]"
                        />
                        <div>Comment</div>
                      </div>
                      <div className="flex gap-2.5 px-3 py-1 tracking-normal rounded-[7992px]">
                        <img
                          alt=""
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b762ab025b113481f27e43f2d09e7dbea432b318af8cacfcd416dd191f3e13ee?apiKey=068bc3b969a34e00abe7da326a2da205&"
                          className="shrink-0 w-5 aspect-[0.83]"
                        />
                        <div>Record a comment</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <aside className="flex flex-col ml-5 w-[22%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow pb-4 w-full bg-white border-l border-solid border-gray-500 border-opacity-20 max-md:mt-4 max-md:max-w-full">
              <div className="flex gap-5 justify-between items-start px-6 pt-4 w-full text-sm font-medium tracking-normal leading-6 text-center whitespace-nowrap bg-white max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                <div className="flex gap-4">
                  <div className="flex flex-col text-sky-500 rounded-lg">
                    <div>Comments</div>
                    <div className="shrink-0 mt-2 bg-sky-500 rounded-lg h-[3px]" />
                  </div>
                  <div className="self-start text-gray-500">Transcript</div>
                </div>
                <img
                  alt=""
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b53408e7a09389df162fec482b4b261d20cc3970a666970faebd78b5d651f56?apiKey=068bc3b969a34e00abe7da326a2da205&"
                  className="shrink-0 w-6 aspect-square"
                />
              </div>
              <div className="flex flex-col px-5 mt-4 max-md:pl-5 max-md:max-w-full">
                <div className="flex flex-col justify-end">
                  <button
                    className="flex flex-col justify-center px-3 py-2 text-xs font-medium tracking-normal leading-5 text-center whitespace-nowrap bg-gray-700 bg-opacity-0 rounded-[7992px] text-neutral-800 w-[88px]"
                    aria-label="Follow"
                  >
                    <div className="flex gap-1">
                      <img
                        alt=""
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd388254ae31141d0d9b65d26da7a27e409910318b461ba3078e6f43cfba27fd?apiKey=068bc3b969a34e00abe7da326a2da205&"
                        className="shrink-0 self-start w-4 aspect-square"
                      />
                      <div>Follow</div>
                    </div>
                  </button>
                  {comments.map((comment) => (
                    <div
                      key={comment.id}
                      className="flex gap-3 py-2 pr-2.5 mt-1"
                    >
                      <div
                        className={`flex flex-col justify-center items-center self-start w-6 h-6 text-sm font-medium tracking-normal leading-4 text-red-400 whitespace-nowrap bg-white rounded-[7992px] ${
                          comment.userInitial ? "" : " "
                        }`}
                      >
                        <div
                          className={`justify-center items-center rounded-full w-6 h-6 bg-blue-400`}
                        >
                          {comment.userInitial}
                        </div>
                      </div>
                      <div className="flex flex-col grow shrink-0 justify-center py-1.5 tracking-normal basis-0 w-fit">
                        <div className="flex gap-2.5 justify-center items-center">
                          <div className="grow self-stretch text-sm font-bold tracking-normal leading-6 text-neutral-800">
                            {comment.name}
                          </div>
                          <div className="self-stretch my-auto text-xs leading-5 text-center text-sky-500">
                            {comment.time}
                          </div>
                          <div className="flex-auto self-stretch my-auto text-xs leading-5 text-gray-500">
                            {comment.date}
                          </div>
                        </div>
                        <div className="mt-2.5 text-sm tracking-normal leading-6 text-neutral-800">
                          {comment.content}
                        </div>
                        <div className="flex gap-3.5 pr-20 mt-3 text-xs font-bold leading-5 whitespace-nowrap text-neutral-800 max-md:pr-5">
                          <div className="my-auto">Reply</div>
                          <img
                            alt=""
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4da30748c4450a106659a67eb133a24744c3c9bc2c8aa9424401fcf59ab03567?apiKey=068bc3b969a34e00abe7da326a2da205&"
                            className="shrink-0 aspect-square w-[18px]"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                  <button
                    className="justify-center items-center self-end px-5 mt-3 w-12 h-12 text-2xl tracking-tight leading-8 text-center whitespace-nowrap bg-white rounded-3xl border border-solid shadow-lg border-gray-500 border-opacity-20 text-neutral-800"
                    aria-label="Help"
                  >
                    ?
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}

export default VideoPlayer;
