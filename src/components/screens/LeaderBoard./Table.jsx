import avatar_2 from "../../../assets/images/avatar_2.png";
import avatar_4 from "../../../assets/images/avatar_4.png";
import point from "../../../assets/images/point.png";
import { leaderboardData } from "../../../data/leaderboard.data";
const Table = ({ selectedTab }) => {
  return (
    <section className="mt-[60px]  overflow-auto">
      {/* table header */}
      <div className="capitalize flex items-center font-semibold text-11 text-[#4A445E]">
        <p className="min-w-[102px] w-[205px]">place</p>
        <p className="min-w-[200px] w-[412px]">user</p>
        <p className="min-w-[102px] w-[236px]">Wagered</p>
        <p>Prize</p>
      </div>
      <ul className="flex flex-col mt-2.5 gap-2.5 font-bold text-sm  w-full">
        {leaderboardData
          .slice(selectedTab === 1 ? 0 : 2, selectedTab === 1 ? 7 : 9)
          .map((curItem, i) => (
            <li
              key={curItem.id}
              className="sm:bg-primary-card-bg *:bg-primary-card-bg sm:*:bg-transparent *:h-full sm:*:h-auto *:flex sm:*:block *:items-center  rounded-lg h-12 flex items-center w-full"
            >
              <div className="text-[#69698D] !justify-start min-w-[102px] w-[205px] !h-full">
                <p className="bg-[#1F1936] rounded-tl-lg rounded-bl-lg h-full flex items-center justify-center w-2/3">
                  #{i + 4}
                </p>
              </div>
              <div className="!flex items-center gap-3 min-w-[200px] w-[412px]">
                <figure className=" border-[2px] border-[#2F2943] rounded-lg w-8 h-8 flex items-center justify-center">
                  <img
                    src={i % 2 === 0 ? avatar_4 : avatar_2}
                    alt="avatar_4"
                    className="border-2 border-primary-card-bg rounded-md"
                  />
                </figure>
                <h4 className="text-[#8F88A8] font-semibold ">
                  {curItem.User}74793
                </h4>
              </div>
              <div className="min-w-[102px] w-[236px]">
                <Point text={curItem.Wagered} />
              </div>
              <div>
                <Point text={curItem.Prize} />
              </div>
            </li>
          ))}
      </ul>
    </section>
  );
};
export default Table;

const Point = ({ text }) => {
  return (
    <div className="flex items-center gap-[5px]">
      <img className="w-3" src={point} alt="avatar_4" />
      <p className="font-bold text-sm">{text}</p>
    </div>
  );
};
