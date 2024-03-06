import "./index.css";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/Hero";
import TreadingViewWidget from "./components/treading-view-widget/TreadingViewWidget";
export default function App() {
  return (
    <>
      <Navbar />
      <div className="bg-bg-gray">
        <Hero />
      </div>
    </>
  );
}
