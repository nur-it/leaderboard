import avatar_2 from "../../../assets/images/avatar_2.png";
import avatar_4 from "../../../assets/images/avatar_4.png";
import point from "../../../assets/images/point.png";
import { leaderboardData } from "../../../data/leaderboard.data";
const Table = ({ selectedTab }) => {
  return (
    <section className="mt-[60px]">
      {/* table header */}
      <div className="capitalize flex items-center font-semibold text-11 text-[#4A445E]">
        <p className="w-[205px]">place</p>
        <p className="w-[412px]">user</p>
        <p className="w-[236px]">Wagered</p>
        <p>Prize</p>
      </div>
      <ul className="flex flex-col mt-2.5 gap-2.5 font-bold text-sm">
        {leaderboardData
          .slice(selectedTab === 1 ? 0 : 2, selectedTab === 1 ? 7 : 9)
          .map((curItem, i) => (
            <li
              key={curItem.id}
              className="bg-primary-card-bg rounded-lg h-12 flex items-center "
            >
              <div className="text-[#69698D] h-full w-[205px]">
                <p className="bg-[#1F1936] rounded-tl-lg rounded-bl-lg h-full flex items-center justify-center w-[115px]">
                  #{i + 4}
                </p>
              </div>
              <div className="flex items-center gap-3 w-[412px]">
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
              <div className="w-[236px]">
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
