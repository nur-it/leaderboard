import { useState } from "react";
import LeaderBoardTopPart from "./LeaderBoardTopPart";
import Card from "./Card";
import LeaderBoardTimer from "./Timer";

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
            <LeaderBoardTimer />
          </div>
          <Card />
        </div>
      </div>
    </section>
  );
};
export default Leaderboard;
