import HeaderVideo from "../components/HeaderVideo";

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
      <HeaderVideo />
      <main className="justify-center w-full bg-gray-700 bg-opacity-0 max-md:max-w-full">
        <section className="flex gap-5 max-md:flex-col max-md:gap-0">
          <section className="flex flex-col w-[78%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow pt-6 max-md:mt-4 max-md:max-w-full">
              <div className="flex flex-col justify-center px-6 max-md:pl-5 max-md:max-w-full">
                <div className="flex flex-col justify-center pb-20 bg-black aspect-video rounded-lg max-md:max-w-full">
                  <div className="flex flex-col justify-center items-center pb-20 pl-10 mt-2.5 max-md:max-w-full">
                    <div className="flex justify-center items-center mt-48 max-w-full w-[120px] max-md:mt-10">
                      <img
                        alt=""
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe87cb09ea42f698903e8afc02d50a9d4cd61f562df438c40182741357f06350?apiKey=068bc3b969a34e00abe7da326a2da205&"
                        className="w-full shadow-sm aspect-square"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex gap-5 justify-center self-center mt-4 mb-2 max-w-full text-sm font-medium leading-6 text-center text-neutral-800 w-[1014px] max-md:flex-wrap">
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
