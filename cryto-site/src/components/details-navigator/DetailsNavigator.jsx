function DetailsNavigator() {
  return (
    <div className="flex w-full overflow-x-scroll">
      <div className="my-6 flex w-fit flex-nowrap gap-8 border-b-2 border-[#D3E0E6] font-semibold text-[#3E424A]">
        <a
          href="#overview"
          className="cursor-pointer text-nowrap border-b border-transparent pb-1 focus:border-b-2 focus:border-[#0052FE] focus:text-[#0052FE]"
        >
          Overview
        </a>
        <a
          href="#fundamentals"
          className="cursor-pointer text-nowrap border-b border-transparent pb-1 focus:border-b-2 focus:border-[#0052FE] focus:text-[#0052FE]"
        >
          Fundamentals
        </a>
        <a
          href="#news-insights"
          className="cursor-pointer text-nowrap border-b border-transparent pb-1 focus:border-b-2 focus:border-[#0052FE] focus:text-[#0052FE]"
        >
          News Insights
        </a>
        <a
          href="#sentiments"
          className="cursor-pointer text-nowrap border-b border-transparent pb-1 focus:border-b-2 focus:border-[#0052FE] focus:text-[#0052FE]"
        >
          Sentiments
        </a>
        <a
          href="#team"
          className="cursor-pointer text-nowrap border-b border-transparent pb-1 focus:border-b-2 focus:border-[#0052FE] focus:text-[#0052FE]"
        >
          Team
        </a>
        <a
          href="#technicals"
          className="cursor-pointer text-nowrap border-b border-transparent pb-1 focus:border-b-2 focus:border-[#0052FE] focus:text-[#0052FE]"
        >
          Technicals
        </a>
        <a
          href="#tokenomics"
          className="cursor-pointer text-nowrap border-b border-transparent pb-1 focus:border-b-2 focus:border-[#0052FE] focus:text-[#0052FE]"
        >
          Tokenomics
        </a>
      </div>
    </div>
  );
}

export default DetailsNavigator;
