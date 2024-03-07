import Hero from "./components/hero/Hero";
import DetailsNavigator from "./components/details-navigator/DetailsNavigator";
import Navbar from "./components/navbar/Navbar";
import KoinXGuide from "./components/koinx-guide/KoinXGuide";
import TrendingCoinList from "./components/treanding-coin-list/TrendingCoinList";
import CoinDetails from "./components/coin-details/CoinDetails";
import Sentiment from "./components/sentiment/Sentiment";
import About from "./components/about/About";
import Tokenomics from "./components/tokeneconomics/TokenEconomics";
import TeamInfo from "./components/team-info/TeamInfo";
function Index() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col bg-bg-gray">
        <div className="flex w-full flex-col p-mobile-x pb-10 sm:p-desktop-x sm:pb-10 lg:w-[75%] lg:flex-row">
          <div className="w-full">
            <Hero />
            <DetailsNavigator />
            <CoinDetails />
            <Sentiment />
            <About />
            <Tokenomics />
            <TeamInfo />
          </div>
          <div className="mt-8 lg:ml-6 lg:mt-0 lg:block lg:w-[300px] ">
            <KoinXGuide />
            <TrendingCoinList />
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
