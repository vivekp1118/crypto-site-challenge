import Header from "../common/Header";
import HorizontalNavigator from "../common/HorizonalScroller";
import SubHeader from "../common/SubHeader";
import InfoCard from "../common/InfoCard";
import newsSvg from "../../assets/news.svg";
import treandsSvg from "../../assets/treands.svg";
import AnalystEstimate from "../common/AnylystEstimate";

function Sentiment() {
  return (
    <div className="mt-8 rounded-md bg-white  p-8">
      <Header heading="Sentiment" />
      <SubHeader header="Key Events" margin="my-4" />
      <HorizontalNavigator>
        {
          <>
            <InfoCard
              background={"bg-[#0082FF]"}
              icon={newsSvg}
              cardColor={"bg-[#E8F4FD]"}
              text={
                "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt."
              }
              title={
                "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim."
              }
            />

            <InfoCard
              background={"bg-[#0FBA83]"}
              icon={treandsSvg}
              cardColor={"bg-[#E8F4FD]"}
              text={
                "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt."
              }
              title={
                "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim."
              }
            />

            <InfoCard
              background={"bg-[#0082FF]"}
              icon={newsSvg}
              cardColor={"bg-[#E8F4FD]"}
              text={
                "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt."
              }
              title={
                "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim."
              }
            />
          </>
        }
      </HorizontalNavigator>

      <SubHeader header="Analyst Estimate" margin="mt-[2rem] mb-[1rem]" />

      <div className="flex w-[100%] gap-[1rem]">
        <div className="flex h-[120px] w-[120px] items-center justify-center rounded-full bg-[#EBF9F4]">
          <h1 className="text-4xl font-semibold text-[#0FBA83]">76%</h1>
        </div>

        <div className="flex flex-grow flex-col items-start justify-evenly">
          <AnalystEstimate title={"Buy"} color={"#0FBA83"} perecentValue={76} />
          <AnalystEstimate title={"Hold"} color={"#C7C8CE"} perecentValue={8} />
          <AnalystEstimate
            title={"Sell"}
            color={"#F7324C"}
            perecentValue={16}
          />
        </div>
      </div>
    </div>
  );
}

export default Sentiment;
