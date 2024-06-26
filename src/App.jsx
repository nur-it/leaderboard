import Leaderboard from "./components/screens/LeaderBoard";
import Header from "./components/shared/Header";

const App = () => {
  return (
    <>
      <main className="pb-11 min-h-screen bg-[url(/bgs/background.png)] bg-no-repeat bg-top bg-cover min-[1921px]:bg-cover text-white">
        <Header />
        <Leaderboard />
      </main>
    </>
  );
};
export default App;
