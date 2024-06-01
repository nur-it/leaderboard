import { useState } from "react";
import LeaderBoardTopPart from "./LeaderBoardTopPart";
import Card from "./Card";
import LeaderBoardTimer from "./Timer";

import avatar_1 from "../../../assets/images/avatar_1.png";
import avatar_2 from "../../../assets/images/avatar_2.png";
import avatar_3 from "../../../assets/images/avatar_3.png";
import Table from "./Table";
const Leaderboard = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  return (
    <section className="mt-5">
      <div className="container">
        <LeaderBoardTopPart
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        <div className="flex flex-col gap-y-10  md:flex-row items-center md:gap-[21px] *:flex-1 mt-6 md:mt-[43px]">
          <Card
            rank={3}
            points={selectedTab === 1 ? 300 : 400}
            avatar={selectedTab === 1 ? avatar_1 : avatar_2}
          />
          <div className="w-full md:w-auto flex md:block flex-col-reverse items-center gap-y-10 md:gap-y-0">
            <Card
              rank={1}
              points={selectedTab === 1 ? 1000 : 1200}
              avatar={selectedTab === 1 ? avatar_2 : avatar_3}
            />
            <LeaderBoardTimer />
          </div>
          <Card
            rank={2}
            points={selectedTab === 1 ? 500 : 700}
            avatar={selectedTab === 1 ? avatar_3 : avatar_1}
          />
        </div>
        <Table selectedTab={selectedTab} />
      </div>
    </section>
  );
};
export default Leaderboard;
