import React, { useState, useEffect } from "react";
import TreadingViewWidget from "../treading-view-widget/TreadingViewWidget";
import btclogo from "../../assets/bitcoin-btc-logo.svg";
import { useParams } from "react-router-dom";
import { cryptoInfo } from "../../data/crytoInfo";
import { capitalize } from "../../utils/toCapitalize";
import Loader from "../common/Loader";

function Hero() {
  const [price, setPrice] = useState(null);
  const { id = "bitcoin" } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=usd%2Cinr&include_24hr_change=true&precision=2`,
      );
      const data = await response.json();
      setPrice(data[id]);
    };

    fetchData();
  }, [id]);
  return (
    <main className="w-full">
      <header className="py-4 font-[#3E5765] text-sm">
        Cryptocurrencies <i className="fa-solid fa-angles-right mx-1"></i>
        <span className="font-[#0F1629] font-semibold">{capitalize(id)}</span>
      </header>
      <header className="mb-10 flex items-center">
        <img
          src={btclogo}
          alt="btclogo"
          className="mr-4 inline-block h-9 w-9"
        />
        <span className="mr-4 text-2xl font-semibold">{capitalize(id)}</span>
        <span className="leading-0 text-[#3E5765]">{cryptoInfo[id]}</span>
        <span className=" ml-6 rounded-[4px] bg-[#808A9D] px-2 py-1 text-white">
          Rank #1
        </span>
      </header>

      <section className="h-fit rounded-lg bg-white p-6 pb-9 md:pb-8 md:pl-6 md:pt-6">
        {price ? (
          <>
            <p className="flex items-center">
              <span className="font-[#0B1426] text-2xl font-semibold leading-[2.4rem] md:text-[1.75rem]">
                ${price.usd.toLocaleString()}
              </span>
              <span
                className={`text ml-8 mr-4 rounded-[0.25rem] px-2 py-1 text-center text-base font-medium ${price.usd_24h_change >= 0 ? "bg-[#EBF9F4] text-[#14B079]" : "bg-red-200 text-red-500"}`}
              >
                <i
                  className={`fa-solid fa-caret-${price.usd_24h_change >= 0 ? "up" : "down"}`}
                ></i>{" "}
                {price.usd_24h_change.toFixed(2)}%
              </span>

              <span className="text-sm font-medium text-[#768396]">(24H)</span>
            </p>
            <p className="font-[#0B1426] font-medium leading-[1.6rem]">
              ₹{price.inr.toLocaleString()}
            </p>
            <div className="my-6 h-[1px] w-full bg-[#DEE1E6]"></div>
            <p className="mb-10 font-semibold text-[#0B1426]">
              {capitalize(id)} Price Chart (USD)
            </p>
            <div className="h-96 ">
              <TreadingViewWidget coinSymbol={cryptoInfo[id]} />
            </div>
          </>
        ) : (
          <p>
            <Loader />
          </p>
        )}
      </section>
    </main>
  );
}

export default Hero;
