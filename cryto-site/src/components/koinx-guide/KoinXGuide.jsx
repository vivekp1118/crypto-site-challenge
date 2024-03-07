import guideSVG from "../../assets/guide.svg";
function KoinXGuide() {
  return (
    <div className="h-fit w-full rounded-[16px] bg-[#0052FE] px-8 py-4 pt-[3rem] lg:ml-6 lg:mt-32 lg:block ">
      <div className="flex min-w-[200px]  flex-shrink-0 flex-col items-center justify-center gap-4">
        <h1 className="text-center text-[22px] font-semibold text-white">
          Get Started with KoinX for FREE
        </h1>
        <p className="tracking-wide:0.005em text-center text-[14px] text-white">
          With our range of features that you can equip for free, KoinX allows
          you to be more educated and aware of your tax reports.
        </p>
        <img
          alt="img"
          src={guideSVG}
          className="h-[100px] w-[100px] object-contain"
        />
        <button className=" mb-4 rounded-[8px] bg-white px-4 py-2 font-semibold text-black">
          Get Started for FREE <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}

export default KoinXGuide;
