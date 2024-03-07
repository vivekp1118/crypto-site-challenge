import guideSVG from "../../assets/guide.svg";
function KoinXGuide() {
  return (
    <div className="ml-6 mt-32 hidden h-fit w-[450px] flex-col items-center justify-center gap-4 rounded-[16px] bg-[#0052FE] px-8 py-4 pt-[3rem] md:flex">
      <h1 className="text-center text-[22px] font-semibold text-white">
        Get Started with KoinX for FREE
      </h1>
      <p className="tracking-wide:0.005em text-center text-[14px] text-white">
        With our range of features that you can equip for free, KoinX allows you
        to be more educated and aware of your tax reports.
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
  );
}

export default KoinXGuide;
