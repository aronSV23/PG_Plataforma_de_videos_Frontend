function NavItem({ src, text, isActive = false }) {
    const activeClass = isActive ? "text-sky-500 bg-sky-500 bg-opacity-10" : "text-neutral-800 font-normal";
    return (
      <div
        className={
          "flex flex-col justify-center items-start px-3 py-1.5 mt-2 w-full text-sm font-bold leading-6 rounded-[7992px] max-md:pr-5 " +
          activeClass
        }
      >
        <div className="flex gap-2">
          <img loading="lazy" src={src} className="shrink-0 w-6 aspect-square" alt="" />
          <span className="justify-center self-start pr-1">{text}</span>
        </div>
      </div>
    );
  }

  export default NavItem