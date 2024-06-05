import InviteButton from "./InviteButton";
import NavItem from "./NavItem";
import WorkspaceCard from "./WorkspaceCard";
import { Link } from "react-router-dom";

const AsideBar = ({ isOpen }) => {
  return (
    <aside
      className={`fixed top-0 left-0 flex flex-col pt-5 pb-3 w-56 bg-slate-100 px-2 h-screen min-w-56 z-20 transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
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
            
            <Link
        to="/UploadVideoPage"
        className="text-base font-bold tracking-normal leading-6 text-center text-white"
      >
        Upload Video Page
      </Link>
          </div>
        </div>
      </section>
    </aside>
  );
};

export default AsideBar;
