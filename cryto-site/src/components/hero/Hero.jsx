import React, { useState, useEffect } from "react";
import TreadingViewWidget from "../treading-view-widget/TreadingViewWidget";
import btclogo from "../../assets/bitcoin-btc-logo.svg";
import { useParams } from "react-router-dom";

function Hero() {
  const [price, setPrice] = useState(null);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=${id || "bitcoin"}&vs_currencies=usd,inr`,
      );
      const data = await response.json();
      console.log(data);
      setPrice(data);
    };

    fetchData();
  }, []);
  return (
    <main>
      <header className="py-4 font-[#3E5765] text-sm">
        Cryptocurrencies <i className="fa-solid fa-angles-right mx-1"></i>
        <span className="font-[#0F1629] font-semibold">Bitcoin</span>
      </header>
      <header className="mb-10 flex items-center">
        <img
          src={btclogo}
          alt="btclogo"
          className="mr-4 inline-block h-9 w-9"
        />
        <span className="mr-4 text-2xl font-semibold">Bitcoin</span>
        <span className="text-[#3E5765]">BTC</span>
        <span className=" ml-6 rounded-[4px] bg-[#808A9D] px-2 py-1 text-white">
          Rank #1
        </span>
      </header>

      <section className="h-fit rounded-lg bg-white p-6 pb-9 md:pb-8 md:pl-6 md:pt-6">
        <p className="flex items-center">
          <span className=" font-[#0B1426]  text-2xl font-semibold leading-[2.4rem] md:text-[1.75rem]">
            $47,000.00
          </span>
          <span className="text ml-8 mr-4 rounded-[0.25rem] bg-[#EBF9F4] px-2 py-1 text-center text-base font-medium text-[#14B079]">
            <i className="fa-solid fa-caret-up"></i> 2.51%
          </span>
          <span className="text-sm font-medium text-[#768396]">(24H)</span>
        </p>
        <p className="font-[#0B1426] font-medium leading-[1.6rem]">
          ₹34,93,000.00
        </p>
        <div className="my-6 h-[1px] w-full bg-[#DEE1E6]"></div>
        <p className="mb-10 font-semibold text-[#0B1426]">
          Bitcoin Price Chart (USD)
        </p>
        <div className="h-96 w-[100%]">
          <TreadingViewWidget />
        </div>
      </section>
    </main>
  );
}

export default Hero;
