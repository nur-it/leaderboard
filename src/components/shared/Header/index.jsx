import { Link } from "react-router-dom";
import TwiterIcon from "../../../assets/icons/Twitter.svg";
import KickIcon from "../../../assets/icons/Kick.svg";

const Header = () => {
  return (
    <header className="bg-primary h-20 pt-2 sm:pt-0 sm:h-[64px] relative">
      <div className="container h-full">
        <nav className="h-full flex items-center justify-between flex-wrap sm:flex-nowrap">
          <div>
            <Link to={"/"}>
              <h2 className="font-bold text-sm whitespace-nowrap">LOGO</h2>
            </Link>
          </div>
          <div className="sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:top-1/2 sm:-translate-y-1/2 order-3 w-full sm:w-auto sm:order-[unset] flex items-center justify-center gap-2 font-bold text-11 *:h-[25px] *:rounded-[100px] *:w-[100px] *:flex *:items-center *:justify-center *:gap-1.5 [&_img]:w-3">
            <Link to={"/"} className="bg-sky-btnBg/5 ">
              <img src={TwiterIcon} alt="Twitter" />
              <span className="text-sky-text">@example</span>
            </Link>
            <Link to={"/"} className="bg-lime-btnBg/5 text-lime-text">
              <img src={KickIcon} alt="KickIcon" />
              <span>example</span>
            </Link>
          </div>
          <div>
            <Link to={"/leaderboard"}>
              <h2 className="font-bold text-sm whitespace-nowrap">
                Leaderboard
              </h2>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Header;
