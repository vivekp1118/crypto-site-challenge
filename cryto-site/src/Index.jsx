import Hero from "./components/hero/Hero";
import DetailsNavigator from "./components/details-navigator/DetailsNavigator";
import Navbar from "./components/navbar/Navbar";
import KoinXGuide from "./components/koinx-guide/KoinXGuide";
import TrendingCoinList from "./components/treanding-coin-list/TrendingCoinList";
function Index() {
  return (
    <>
      <Navbar />
      <div className="flex bg-bg-gray p-mobile-x sm:p-desktop-x">
        <div className="w-full">
          <Hero />
          <DetailsNavigator />
        </div>
        <div className="ml-6 hidden w-[300px] lg:block ">
          <KoinXGuide />
          <TrendingCoinList />
        </div>
      </div>
    </>
  );
}

export default Index;
