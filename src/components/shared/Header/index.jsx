import { Link } from "react-router-dom";
import TwiterIcon from "../../../assets/icons/Twitter.svg";
import KickIcon from "../../../assets/icons/Kick.svg";

const Header = () => {
  return (
    <header className="bg-primary h-[64px]">
      <div className="container h-full">
        <nav className="h-full flex items-center justify-between">
          <div>
            <Link to={"/"}>
              <h2 className="font-bold text-sm">LOGO</h2>
            </Link>
          </div>
          <div className=" flex items-center gap-2 font-bold text-11 *:h-[25px] *:rounded-[100px] *:w-[100px] *:flex *:items-center *:justify-center *:gap-1.5 [&_img]:w-3">
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
              <h2 className="font-bold text-sm">Leaderboard</h2>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Header;
