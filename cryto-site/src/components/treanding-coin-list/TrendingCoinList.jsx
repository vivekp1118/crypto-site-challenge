import React, { useState, useEffect } from "react";
function TrendingCoinList() {
  const [treningCoins, setTreandingCoins] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/search/trending`,
      );
      const data = await response.json();
      setTreandingCoins(data.coins.slice(0, 3));
    };
    fetchData();
  });

  return (
    <div className="mt-4 flex w-full flex-col items-start justify-center gap-[1rem] rounded-[8px] bg-[#fff] p-[0.75rem] lg:ml-5">
      <h1 className="text-[22px] font-semibold">Trending Coins (24h)</h1>

      {treningCoins.map((item, index) => (
        <div className="flex w-full items-center justify-between" key={index}>
          <div className="flex gap-2">
            <img src={item?.item?.large} alt="img" width={24} height={24} />
            <h2 className=" text-base">{item?.item?.name}</h2>
          </div>

          <span
            className={`ml-8 mr-4 w-24 rounded-lg px-2 py-1 text-right text-base font-medium ${item?.item?.data?.price_change_percentage_24h?.usd >= 0 ? "bg-[#EBF9F4] text-[#14B079]" : "bg-red-200 text-red-500"}`}
          >
            <i
              className={`fa-solid fa-caret-${item?.item?.data?.price_change_percentage_24h?.usd >= 0 ? "up" : "down"}`}
            ></i>{" "}
            {item?.item?.data?.price_change_percentage_24h?.usd.toFixed(2)}%
          </span>
        </div>
      ))}
    </div>
  );
}

export default TrendingCoinList;
