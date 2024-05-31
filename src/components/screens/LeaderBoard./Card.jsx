import badge from "../../../assets/images/badge.png";
import badge_white from "../../../assets/images/badge_white.png";
import point from "../../../assets/images/point.png";
import crown from "../../../assets/images/crown.png";
import crown_white from "../../../assets/images/crown_white.png";
const Card = ({ avatar, rank, points }) => {
  return (
    <div className="bg-primary-card-bg rounded-2xl max-w-[360px] text-center pt-[34px] relative">
      <div>
        <img
          src={rank === 2 ? crown_white : crown}
          alt="crown"
          className="w-12 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2/3"
        />
      </div>
      {/* <div className="w-20 h-20 mx-auto rounded-2xl bg-[linear-gradient(180deg,_#F59F70_0%,_#D27047_100%)] p-[3px] relative">
        <figure className="h-full w-full rounded-2xl border-[3px] border-primary-card-bg bg-primary-card-bg ">
          <img
            src={avatar}
            alt="csGoOne"
            className="rounded-2xl h-full w-full object-cover "
          />
        </figure>
        <div className=" absolute left-1/2 -translate-x-1/2 -translate-y-1/3">
          <img className="w-[25px]" src={badge} alt="badge" />
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-[13px] text-primary">
            {rank}
          </span>
        </div>
      </div> */}
      <div
        className={`w-20 h-20 mx-auto rounded-2xl relative border-2 ${
          rank === 2 ? "border-[#98A8D3]" : "border-[#F59F70]"
        }`}
      >
        <figure className="h-full w-full p-[3px] rounded-xl relative">
          <img
            src={avatar}
            alt="csGoOne"
            className="h-full w-full object-cover rounded-xl "
          />
          <div className="w-[70px] h-[70px] z-10 border-2 border-[rgba(255,255,255,.22)] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl"></div>
        </figure>
        <div className=" absolute z-20 left-1/2 -translate-x-1/2 -translate-y-1/3">
          <img
            className="w-[25px]  "
            src={rank === 2 ? badge_white : badge}
            alt="badge"
          />
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-[13px] text-primary">
            {rank}
          </span>
        </div>
      </div>
      <h2 className="mt-5 font-bold text-base text-light-text">user74793</h2>
      <div className="relative h-[79px] flex items-center justify-center flex-col">
        <div
          className={` absolute h-full w-full opacity-[.06] rounded-br-2xl  rounded-bl-2xl ${
            rank === 1
              ? "bg-ranking-first"
              : rank === 3
              ? "bg-ranking-second"
              : "bg-ranking-third"
          }
`}
        ></div>
        <div className="flex justify-center items-center gap-1.5">
          <img src={point} alt="point" className="w-[15px]" />
          <p
            className={`${
              rank === 2
                ? "bg-[linear-gradient(180deg,_#B3C4F0_16.67%,_#91A7D7_91.67%)]"
                : "bg-[linear-gradient(180deg,_#F5A278_16.67%,_#D7764C_91.67%)]"
            } text-transparent bg-clip-text font-bold text-2xl`}
          >
            {points}
          </p>
        </div>
        <p
          className={` ${
            rank == 2
              ? "bg-[linear-gradient(180deg,_#94A5D0_26.92%,_#7A8CB5_107.69%)]"
              : "bg-[linear-gradient(180deg,_#E68C62_26.92%,_#DD7E54_107.69%)]"
          } bg-clip-text text-transparent `}
        >
          total wagered
        </p>
      </div>
    </div>
  );
};
export default Card;
