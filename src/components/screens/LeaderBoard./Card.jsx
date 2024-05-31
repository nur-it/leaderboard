import badge from "../../../assets/images/badge.png";
import point from "../../../assets/images/point.png";
import crown from "../../../assets/images/crown.png";
import crown_white from "../../../assets/images/crown_white.png";
const Card = ({ avatar }) => {
  return (
    <div className="bg-primary-card-bg rounded-2xl max-w-[360px] text-center pt-[34px] relative">
      <div>
        <img
          src={crown}
          alt="crown"
          className="w-12 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2/3"
        />
      </div>
      <div className="w-20 h-20 mx-auto rounded-2xl bg-[linear-gradient(180deg,_#F59F70_0%,_#D27047_100%)] p-[3px] relative">
        <figure className="h-full w-full rounded-2xl bg-primary-card-bg p-[3px]">
          <img src={avatar} alt="csGoOne" className="rounded-2xl" />
          <div className=" absolute left-1/2 -translate-x-1/2 -translate-y-1/3">
            <img className="w-[25px]" src={badge} alt="badge" />
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-[13px] text-primary">
              1
            </span>
          </div>
        </figure>
      </div>
      <h2 className="mt-5 font-bold text-base text-light-text">user74793</h2>
      <div className="relative h-[79px] flex items-center justify-center flex-col">
        <div className="bg-[linear-gradient(90deg,_#30255D_0%,_#DF8055_40.5%,_#DF8055_60.5%,_#30255D_100%)] absolute h-full w-full opacity-[.06] rounded-br-2xl rounded-bl-2xl "></div>
        <div className="flex justify-center items-center gap-1.5">
          <img src={point} alt="point" className="w-[15px]" />
          <p className="bg-[linear-gradient(180deg,_#F5A278_16.67%,_#D7764C_91.67%)] text-transparent bg-clip-text font-bold text-2xl">
            300
          </p>
        </div>
        <p className="bg-[linear-gradient(180deg,_#E68C62_26.92%,_#DD7E54_107.69%)] bg-clip-text text-transparent ">
          total wagered
        </p>
      </div>
    </div>
  );
};
export default Card;
