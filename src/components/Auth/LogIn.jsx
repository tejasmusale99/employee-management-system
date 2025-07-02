const LogIn = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen ">
      <div className="border-2 border-emerald-600 p-20 rounded-3xl">
        <form className="flex flex-col gap-5 items-center justify-center">
          <input className="border-2 border-emerald-600 rounded-full py-2 px-4 " type="email" placeholder="Enter your email" />
          <input className="border-2 border-emerald-600 rounded-full py-2 px-4 " type="password" placeholder="Enter your password" />
          <button className=" bg-emerald-600 rounded-full py-1 px-10 cursor-pointer hover:bg-emerald-500 hover:text-black" type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
