import ActionButton from "../components/ActionButton";
import InviteButton from "../components/InviteButton";
import NavItem from "../components/NavItem";
import SearchBar from "../components/SearchBar";
import UserProfile from "../components/UserProfile";
import VideoCard from "../components/VideoCard";
import WorkspaceCard from "../components/WorkspaceCard";

function Dashboard() {
  return (
    <div className="flex gap-0 bg-white max-md:flex-wrap">
      <aside className="flex flex-col pt-5 pb-3 w-56 bg-slate-100 px-2 h-screen min-w-56 ">
        <section className="flex flex-col pl-2">
          <img
            loading="lazy"
            src="https://www.funval.fundaciondevalores.org/pluginfile.php/1/theme_moove/logo/1708634684/LOGO%20FUNVAL%20MOODLE.png"
            className="max-w-full aspect-[4] w-[140px] m-auto"
            alt=""
          />
          <div className="flex flex-col mt-6">
            <WorkspaceCard />
            <InviteButton />
            <nav className="flex flex-col justify-center py-6 font-medium tracking-normal">
              <NavItem
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb8cebeb93c78b2222c91863a64d63fae79116600c87ef4cd0a097b962bb069d?apiKey=068bc3b969a34e00abe7da326a2da205&"
                text="Home"
              />
              <NavItem
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/df0a38a713f7405ca95cddfbbccb1c5d8846df3d1f2e8101efa559ec6ca0dda1?apiKey=068bc3b969a34e00abe7da326a2da205&"
                text="My Videos"
                isActive
              />
              <NavItem
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a6e08fa7bb932d224c5776515687add472ea5992fd9b620eecd35b02505b4fd8?apiKey=068bc3b969a34e00abe7da326a2da205&"
                text="Notifications"
              />
              <NavItem
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b94d088928f640c1486acaccc2dfe362aba86c98749d18e514cd72e78a22312?apiKey=068bc3b969a34e00abe7da326a2da205&"
                text="Favorites"
              />
              <NavItem
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/affe687f84b60a6ac0cb7742af20f6bd95abaa0cf663633dd0d38edb2ae43ff9?apiKey=068bc3b969a34e00abe7da326a2da205&"
                text="History"
              />
              <NavItem
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a2c25998e0f32180d73a728173445a8a295589669acb3687a5b01fb44d483f8?apiKey=068bc3b969a34e00abe7da326a2da205&"
                text="Settings"
              />

              <div className="shrink-0 mt-8 h-px border-b border-solid border-gray-500 border-opacity-20" />
            </nav>
          </div>
          <div className="flex flex-col justify-center px-5 py-3 bg-sky-500 rounded-r-full shadow-lg w-[200px] drop-shadow-xl absolute bottom-10">
            <div className="flex gap-2.5">
              <div className="flex justify-center items-center">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c11cca6fb0e57dde047f79ca4315d1ee1835dcf6fbcc64beb1b31d7a02ee3ad?apiKey=068bc3b969a34e00abe7da326a2da205&"
                  className="w-6 aspect-square"
                  alt=""
                />
              </div>
              <p className="text-base font-bold tracking-normal leading-6 text-center text-white">
                Record a video
              </p>
            </div>
          </div>
        </section>
      </aside>
      <main className="flex flex-col grow shrink-0 basis-0 w-fit">
        <section className="flex flex-col justify-center pb-16  ">
          <header className="flex gap-5 justify-end min-w-[1040px]  self-center p-4 pr-0 w-1040px bg-white max-md:flex-wrap max-md:pl-5 max-md:max-w-full">
            <SearchBar />
            <p className="my-auto text-center text-gray-500 leading-[172%]">
              5/25 videos
            </p>
            <ActionButton
              text="Upgrade"
              className=""
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/d42f04c384b3702c01684ec03113656f2b222799ea2e3e80727f477c9c411764?apiKey=068bc3b969a34e00abe7da326a2da205&"
            />
            <UserProfile />
          </header>
          <section className="flex flex-col mt-6 self-center min-w-[1040px]">
            <header className="flex gap-5 py-2 max-w-full font-medium w-[1040px] justify-between max-md:flex-wrap">
              <div className="flex flex-col justify-center px-5">
                <h1 className="text-sm tracking-normal leading-6 text-gray-500">
                  My Library
                </h1>
                <h2 className="mt-3.5 text-3xl tracking-tighter leading-10 text-neutral-800">
                  Videos
                </h2>
              </div>
              <div className="flex gap-2 justify-center my-auto text-sm tracking-normal leading-6 text-center">
                <button className="pt-1.5 pr-5 pb-2 pl-5 border border-solid border-gray-500 border-opacity-30 rounded-[7992px] text-neutral-800">
                  New folder
                </button>
                <button className="px-5 pt-1.5 pb-2 text-white bg-sky-500 rounded-[7992px]">
                  New video
                </button>
              </div>
            </header>
            <nav className="flex flex-col justify-center py-px mt-6 tracking-normal text-gray-500 border-b border-solid border-gray-500 border-opacity-20 max-md:max-w-full">
              <div className="flex gap-5 justify-between pl-10 w-full max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                <div className="flex gap-5 justify-between items-center text-sm font-medium leading-6 whitespace-nowrap">
                  <span className="self-stretch my-auto border-b-4 border-sky-600">
                    Videos
                  </span>
                  <span className="self-stretch my-auto">Archive</span>
                  <span className="self-stretch my-auto">Screenshots</span>
                </div>
                <p className="self-start text-xs leading-6">5 videos</p>
              </div>
            </nav>
            <section className="flex flex-col justify-center mt-2 ml-10 max-w-full w-[248px] max-md:mt-10 max-md:ml-2.5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-64 gap-y-0.5">
                <VideoCard />
                <VideoCard />
                <VideoCard />

                <VideoCard />

                <VideoCard />



              </div>
            </section>
          </section>
        </section>
        <button className="justify-center items-center self-end px-5 mt-40 w-12 h-12 text-2xl tracking-tight leading-8 text-center whitespace-nowrap bg-white rounded-3xl border border-solid shadow-lg border-gray-500 border-opacity-20 text-neutral-800 max-md:mt-10 max-md:mr-2.5">
          ?
        </button>
      </main>
    </div>
  );
}

export default Dashboard;
