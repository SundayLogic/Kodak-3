import UserIcon from "../molecules/UserIcon";
import BrandLogo from "../atoms/BrandLogo";
import HeaderIcon from "../molecules/HeaderIcon";

const Header = () => {
  return (
<<<<<<< HEAD
    <header className="w-[100vw] bg-gradient-to-b from-black/90 fixed mt-0">
      <div className="flex items-center justify-center space-x-1 lg:space-x-40">
=======
    <header className="fixed w-auto bg-gradient-to-b from-black w-[100vw] pt-2">
      <div className="flex items-center justify-center opacity-95 space-x-1 lg:space-x-40">
>>>>>>> develpment
        <div className="flex items-center justify-center space-x-10 w-fit ">
          <BrandLogo w={100} h={100} />
          <div className="flex items-center justify-between space-x-3 md:space-x-5 xl:space-x-6">
            <HeaderIcon iconName={"HOME"} title="Home" />
            <HeaderIcon iconName={"POPULAR"} title="Popular" />
            <HeaderIcon iconName={"MOVIES"} title="Movies" />
            <HeaderIcon iconName={"SERIES"} title="Series" />
            <HeaderIcon iconName={"WATCHLIST"} title="Watchlist" />
          </div>
        </div>
        <div className="ml-5 md:ml-20 ">
          <UserIcon w={50} h={50} />
        </div>
      </div>
    </header>
  );
};
export default Header;
