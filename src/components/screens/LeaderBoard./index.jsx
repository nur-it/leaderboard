import { useState } from "react";
import LeaderBoardTopPart from "./LeaderBoardTopPart";

const Leaderboard = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  return (
    <section className="mt-5">
      <div className="container">
        <LeaderBoardTopPart
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
      </div>
    </section>
  );
};
export default Leaderboard;
