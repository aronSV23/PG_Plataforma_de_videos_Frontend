function ActionButton({ text, icon, className }) {
    return (
      <button
        className={`flex gap-2 px-4 py-1.5 font-medium leading-6 text-center text-white whitespace-nowrap bg-sky-500 rounded-[7992px] ${className}`}
      >
        <img loading="lazy" src={icon} className="shrink-0 w-4 aspect-[0.67]" alt="" />
        <span>{text}</span>
      </button>
    );
  }
  
  export default ActionButton;