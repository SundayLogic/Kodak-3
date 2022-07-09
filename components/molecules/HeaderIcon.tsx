import {
  HomeIcon,
  SearchIcon,
  FilmIcon,
  CollectionIcon,
  VideoCameraIcon,
  StarIcon,
  TrendingUpIcon,
} from "@heroicons/react/solid";
type Icons =
  | "HOME"
  | "SEARCH"
  | "MOVIES"
  | "SERIES"
  | "WATCHLIST"
  | "ORIGINALS"
  | "NEW"
  | "POPULAR";
interface IconText {
  title: string;
  iconName: Icons;
}
const HeaderIcon = ({ title, iconName}: IconText) => {
  const iconCreator = (name: Icons) => {
    let finalCode;
    switch (name) {
      case "HOME":
        finalCode = <HomeIcon className="iconText" />;
        break;
      case "SEARCH":
        finalCode = <SearchIcon className="iconText" />;
        break;
      case "MOVIES":
        finalCode = <FilmIcon className="iconText" />;
        break;
      case "SERIES":
        finalCode = <VideoCameraIcon className="iconText" />;
        break;
      case "WATCHLIST":
        finalCode = <CollectionIcon className="iconText" />;
        break;
      case "ORIGINALS":
        finalCode = <StarIcon className="iconText" />;
        break;
      case "POPULAR":
        finalCode = <TrendingUpIcon className="iconText" />;
        break;
      default:
        finalCode = <h1>not found</h1>;
    }
    return finalCode;
  };
  return (
    <div className="flex flex-col items-center py-3 md:space-y-3 cursor-pointer space-y-2 group md:w-[80px]">
      <div className="opacity-90 group-hover:opacity-100 ease-out duration-150 transition-all">
        {iconCreator(iconName)}
      </div>
      <h1 className="text-sm uppercase md:text-base z-1 opacity-90 group-hover:opacity-100 sm:group-hover:tracking-wider transition-all md:group-hover:font-bold duration-200 ease-in-out">
        {title}
      </h1>
    </div>
  );
};
export default HeaderIcon;
