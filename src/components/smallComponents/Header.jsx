const Header = () => {
  return (
    <div className="flex sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
      <div>
        <h5 className="text-white font-medium text-lg sm:text-xl">Hello,</h5>
        <h3 className="text-white font-medium text-2xl sm:text-3xl">Tejas 👋</h3>
      </div>
      <div>
        <button className="bg-red-600 px-4 py-2 sm:px-5 sm:py-3 rounded text-white text-sm sm:text-base">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Header;
