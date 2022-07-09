import UserIcon from "../molecules/UserIcon";
import BrandLogo from "../atoms/BrandLogo";
import HeaderIcon from "../molecules/HeaderIcon";

const Header = () => {
  return (
    <header>
      <div className="sticky flex items-center justify-center ">
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
