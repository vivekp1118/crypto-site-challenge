import "./index.css";
import Hero from "./components/hero/Hero";
import DetailsNavigator from "./components/details-navigator/DetailsNavigator";
import Navbar from "./components/navbar/Navbar";
import KoinXGuide from "./components/koinx-guide/KoinXGuide";
export default function App() {
  return (
    <>
      <Navbar />

      <div className="flex bg-bg-gray p-mobile-x sm:p-desktop-x">
        <div className="w-full ">
          <Hero />
          <DetailsNavigator />
        </div>
        <KoinXGuide />
      </div>
    </>
  );
}
