import React, { useState, useEffect } from "react";
import Header from "../common/Header";

function TrendingCarousel({ data, title }) {
  return (
    <>
      <Header heading={title} />
      <div className="carousel flex w-full gap-4 overflow-auto">
        {data &&
          data.map((item, index) => (
            <div
              key={index}
              className="w-64 flex-shrink-0 rounded-lg border border-gray-300 p-4"
            >
              <div className="flex items-center gap-2">
                <img src={item?.item?.small} alt="img" width={24} height={24} />
                <h3 className="text-base">{item?.item?.symbol}</h3>
                <span
                  className={`p-1 text-xs ${
                    item?.item?.data?.price_change_percentage_24h?.usd >= 0
                      ? "bg-green-100 text-green-500"
                      : "bg-red-200 text-red-500"
                  }`}
                >
                  <i
                    className={`fa-solid fa-caret-${
                      item?.item?.data?.price_change_percentage_24h?.usd >= 0
                        ? "up"
                        : "down"
                    }`}
                  ></i>
                  {parseFloat(
                    item?.item?.data?.price_change_percentage_24h?.usd || 0,
                  ).toFixed(1)}
                  %
                </span>
              </div>
              <h2 className="text-lg font-medium">
                {(item?.item?.data?.price).split("<")[0]}
              </h2>
              <img
                src={item?.item?.data?.sparkline}
                alt="sparkline"
                width={200}
                height={60}
              />
            </div>
          ))}
      </div>
    </>
  );
}

export default TrendingCarousel;
