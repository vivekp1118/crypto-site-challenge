function PerformanceIndecator({ array }) {
  return (
    <div className="flex w-full items-center justify-between gap-4">
      <div className="fle flex-col gap-4 text-nowrap">
        <p className=" text-sm font-normal leading-tight text-gray-700">
          {array[0].title}
        </p>
        <p className="text-bas font-semibold text-[#44475B]">
          {array[0].value}
        </p>
      </div>
      <div className="w-[70%] ">
        <div className="h-1 rounded-lg bg-gradient-to-r from-red-500 via-orange-600 to-green-500"></div>
      </div>
      <div className="fle flex-col gap-4 text-nowrap">
        <p className=" text-sm font-normal leading-tight text-gray-700">
          {array[1].title}
        </p>
        <p className="text-base font-semibold text-[#44475B]">
          {array[1].value}
        </p>
      </div>
    </div>
  );
}

export default PerformanceIndecator;
