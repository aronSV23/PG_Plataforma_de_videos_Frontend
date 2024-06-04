function UserProfile({ className = "" }) {
    return (
      <section className={`flex flex-col justify-center rounded-full items-center text-lg tracking-tight leading-5 text-center bg-yellow-500 whitespace-nowrap ${className}`}>
        <span className="flex justify-center items-center px-3 w-9 h-9 text-white">S</span>
      </section>
    );
  }
  export default UserProfile