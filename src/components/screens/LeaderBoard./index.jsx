import { useState } from "react";
import LeaderBoardTopPart from "./LeaderBoardTopPart";
import Card from "./Card";

const Leaderboard = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  return (
    <section className="mt-5">
      <div className="container">
        <LeaderBoardTopPart
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        <div className="flex items-center gap-[21px] *:flex-1 mt-[43px]">
          <Card />
          <div>
            <Card />
            <ul className="mt-6 flex justify-center items-center gap-2.5 *:rounded-lg *:bg-primary-timer-bg  *:w-[50px] *:h-[53px] *:flex *:items-center *:justify-center *:flex-col *:font-bold [&_h4]:text-light-text [&_h4]:text-base [&_p]:text-primary-timer-text [&_p]:text-11">
              <li>
                <h4>25</h4>
                <p>days</p>
              </li>
              <li>
                <h4>16</h4>
                <p>hrs</p>
              </li>
              <li>
                <h4>34</h4>
                <p>mins</p>
              </li>
              <li>
                <h4>56</h4>
                <p>sec</p>
              </li>
            </ul>
          </div>
          <Card />
        </div>
      </div>
    </section>
  );
};
export default Leaderboard;
