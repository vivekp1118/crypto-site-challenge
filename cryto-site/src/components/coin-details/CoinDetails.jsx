import Header from "../common/Header";
import KeyValuePairCell from "../common/KeyValuePairCell";
import PerformanceIndecator from "../common/PerfomanceIndecator";
import SubHeader from "../common/SubHeader";

function CoinDetails() {
  return (
    <section
      className="flex flex-col gap-6 rounded-md bg-white p-8 pb-12"
      id="fundamentals"
    >
      <Header heading={"Performance"} />
      <PerformanceIndecator
        array={[
          {
            title: "Today’s Low",
            value: "46,930.22",
          },
          {
            title: "Today’s High",
            value: "49,343.83",
          },
        ]}
      />
      <PerformanceIndecator
        array={[
          {
            title: "52W Low",
            value: "16,930.22",
          },
          {
            title: "52W High",
            value: "49,743.83",
          },
        ]}
      />
      <div className="mt-2"></div>
      <SubHeader header={"Fundamentals"} />

      <div className="flex w-full flex-col justify-between md:flex-row md:gap-16  ">
        <div className="flex flex-col sm:w-full md:w-[45%]">
          <KeyValuePairCell label={"Bitcoin Price"} value={"$16,815.46"} />
          <KeyValuePairCell
            label={"24h Low / 24h High"}
            value={"$16,382.07 / $16,874.12"}
          />
          <KeyValuePairCell
            label={"7d Low / 7d High"}
            value={"$16,382.07 / $16,874.12"}
          />
          <KeyValuePairCell
            label={"Trading Volume"}
            value={"$23,249,202,782"}
          />
          <KeyValuePairCell label={"Market Cap Rank"} value={"#1"} />
        </div>
        <div className="flex flex-col sm:w-full md:w-[45%]">
          <KeyValuePairCell label={"Market Cap"} value={"$323,507,290,047"} />
          <KeyValuePairCell label={"Market Cap Dominance"} value={"38.343%"} />
          <KeyValuePairCell label={"Volume / Market Cap"} value={"0.0718"} />
          <KeyValuePairCell
            label={"All-Time High"}
            value={"$69,044.77"}
            chlidren={
              <span className="ml-1  rounded-sm  text-red-500 ">-75.6%</span>
            }
            secondaryValue={"Nov 10, 2021 (about 1 year)"}
          />

          <KeyValuePairCell
            label={"All-Time Low"}
            value={"$67.81"}
            chlidren={
              <span className="ml-1  rounded-sm text-[#14B079]">24729.1%</span>
            }
            secondaryValue={"Jul 06, 2013 (over 9 years)"}
          />
        </div>
      </div>
    </section>
  );
}

export default CoinDetails;
