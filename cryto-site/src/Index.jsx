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
import { useEffect, useState } from "react";
import HorizontalNavigator from "./components/common/HorizonalScroller";
import TrendingCarousel from "./components/trending-coin-carousal/TrendingCoinCarousal";
function Index() {
  const [treningCoins, setTreandingCoins] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/search/trending`,
      );
      const data = await response.json();
      setTreandingCoins(data.coins);
    };
    fetchData();
  });

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
            <TrendingCoinList treningCoins={treningCoins.slice(0, 3)} />
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col gap-7 overflow-x-scroll p-10">
        {" "}
        <TrendingCarousel data={treningCoins} title={"You May Also Like"} />
        <TrendingCarousel data={treningCoins} title={"Trending Coins"} />
      </div>
    </>
  );
}

export default Index;
