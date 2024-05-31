import avatar_2 from "../../../assets/images/avatar_2.png";
import avatar_4 from "../../../assets/images/avatar_4.png";
import point from "../../../assets/images/point.png";
const Table = () => {
  return (
    <section className="mt-[60px]">
      {/* table header */}
      <div className="capitalize flex items-center">
        <p className="w-[205px]">place</p>
        <p className="w-[412px]">user</p>
        <p className="w-[236px]">Wagered</p>
        <p>Prize</p>
      </div>
      <ul className="flex flex-col mt-2.5 gap-2.5 font-bold text-sm">
        {[...Array(10).keys()].map((curItem) => (
          <li
            key={curItem}
            className="bg-primary-card-bg rounded-lg h-12 flex items-center "
          >
            <div className="text-[#69698D] h-full w-[205px]">
              <p className="bg-[#1F1936] rounded-tl-lg rounded-bl-lg h-full flex items-center justify-center w-[115px]">
                #{curItem + 4}
              </p>
            </div>
            <div className="flex items-center gap-3 w-[412px]">
              <figure className=" border-[2px] border-[#2F2943] rounded-lg w-8 h-8 flex items-center justify-center">
                <img
                  src={curItem % 2 === 0 ? avatar_4 : avatar_2}
                  alt="avatar_4"
                  className="h-6 w-6 rounded-md"
                />
              </figure>
              <h4 className="text-[#8F88A8] font-semibold ">user74793</h4>
            </div>
            <div className="w-[236px]">
              <Point text={247} />
            </div>
            <div>
              <Point text={288} />
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
