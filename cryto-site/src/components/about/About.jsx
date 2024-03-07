import React from "react";
import Header from "../common/Header";

function About() {
  return (
    <div className="mt-8 rounded-md bg-white  p-8">
      <div className="">
        <Header heading={"About"} />
        <div className="flex w-full flex-col items-start gap-[0.35rem]">
          <div className="mb-3 mt-6 text-lg font-bold  text-slate-900">
            What is Bitcoin?
          </div>

          <p className="text-base">
            Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume
            of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently
            -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from
            its 7-day all-time low of $16,394.75. BTC has a circulating supply
            of 19.24 M BTC and a max supply of 21 M BTC.
          </p>

          <h2 className="my-3 text-lg font-semibold">
            Lorem ipsum dolor sit amet
          </h2>

          <div className="flex flex-col gap-4 text-base">
            <p>
              Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit
              lobortis tristique pharetra. Diam id et lectus urna et tellus
              aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut
              sed. Quam scelerisque fermentum sapien morbi sodales odio sed
              rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut
              sed. Quam scelerisque fermentum sapien morbi sodales odio sed
              rhoncus.
            </p>
            <p>
              Diam praesent massa dapibus magna aliquam a dictumst volutpat.
              Egestas vitae pellentesque auctor amet. Nunc sagittis libero
              adipiscing cursus felis pellentesque interdum. Odio cursus
              phasellus velit in senectus enim dui. Turpis tristique placerat
              interdum sed volutpat. Id imperdiet magna eget eros donec cursus
              nunc. Mauris faucibus diam mi nunc praesent massa turpis a.
              Integer dignissim augue viverra nulla et quis lobortis phasellus.
              Integer pellentesque enim convallis ultricies at.
            </p>
            <p>
              Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
              massa vel convallis duis ac. Mi adipiscing semper scelerisque
              porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
              congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
              eget. Ullamcorper dui
            </p>
          </div>

          <hr className="my-4 w-full flex-row bg-[#DEE1E6] md:flex-col " />

          <div className="flex flex-wrap gap-4 md:gap-5">
            <div
              className="flex w-full items-center justify-start gap-6 rounded-lg p-3 sm:w-[360px]"
              style={{
                background: "linear-gradient(160deg, #79F1A4 0%, #0E5CAD 80%)",
              }}
            >
              <div>
                <img src={"/banner1.jpg"} alt="Logo" width={120} height={120} />
              </div>
              <div className="flex flex-col items-start justify-start gap-2 ">
                <h1 className=" w-40 text-xl font-bold text-white">
                  Calculate your profits
                </h1>
                <div className="flex items-center gap-2  rounded-lg bg-white px-3 py-1 text-lg font-medium">
                  <a href="">Check now </a>
                  <i className="fas fa-arrow-right"></i>
                </div>
              </div>
            </div>

            <div
              className="flex w-full items-center justify-start gap-6 rounded-lg p-3 sm:w-[360px]"
              style={{
                background: "linear-gradient(160deg, #FF9865 0%, #EF3031 80%)",
              }}
            >
              <div>
                <img src={"/banner2.jpg"} alt="Logo" width={120} height={120} />
              </div>
              <div className="flex flex-col items-start justify-start gap-2 ">
                <h1 className=" w-[10rem] text-[20px] font-bold text-white">
                  Calculate your tax liability
                </h1>
                <div className="flex items-center gap-2  rounded-lg bg-white px-3 py-1 text-lg font-medium">
                  <a href="">Check now </a>
                  <i className="fas fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>

          <hr className="my-4 w-full bg-[#DEE1E6] " />

          <p className="text-base">
            Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
            massa vel convallis duis ac. Mi adipiscing semper scelerisque
            porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
            congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
            eget. Ullamcorper dui
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
