import csGoOne from "../../../assets/images/csgo.png";
import csgobig from "../../../assets/images/csgoBig.png";
const LeaderBoardTopPart = ({ setSelectedTab, selectedTab }) => {
  return (
    <div>
      <div className="flex items-center bg-primary  max-w-[236px] mx-auto *:w-1/2 *:h-10 *:flex *:items-center *:justify-center  rounded-[100px] *:rounded-[100px] *:cursor-pointer *:duration-200">
        <figure
          className={`${
            selectedTab === 1 ? "bg-primary-active" : "bg-transparent"
          }`}
          onClick={() => setSelectedTab(1)}
        >
          <img className="w-[54px]" src={csGoOne} alt="csGoOne" />
        </figure>
        <figure
          className={`${
            selectedTab === 2 ? "bg-primary-active" : "bg-transparent"
          }`}
          onClick={() => setSelectedTab(2)}
        >
          <img className="w-[69px]" src={csgobig} alt="csgobig" />
        </figure>
      </div>
      <p className="text-primary-para font-semibold text-xs text-center mt-4 mb-2.5">
        All bets under code count towards your leaderboard position
      </p>
      <div className="bg-primary-bg h-[50px] max-w-[360px] mx-auto flex items-center justify-center rounded-xl font-bold text-lg uppercase">
        <span className="bg-[linear-gradient(180deg,_#FDCC81_15.79%,_#EC8937_78.95%)] text-transparent bg-clip-text">
          {selectedTab === 1
            ? "COD E123"
            : selectedTab === 2
            ? "COD f456"
            : "N/A"}
        </span>
      </div>
    </div>
  );
};
export default LeaderBoardTopPart;
