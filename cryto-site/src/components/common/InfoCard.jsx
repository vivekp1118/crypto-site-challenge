function InfoCard({ title, icon, text, background, cardColor }) {
  return (
    <div
      className={`mt-6 flex w-[19rem] flex-shrink-0  rounded-lg p-3 pb-5 sm:w-[28rem] sm:p-5 ${cardColor} `}
    >
      <img
        src={icon}
        className={`mr-2 h-7 w-7 ${background} rounded-[50%] p-1 text-white`}
      />
      <div className="flex flex-col gap-2">
        <p className="text-[0.7rem] font-medium text-[#191C1F] sm:text-sm">
          {text}
        </p>
        <p className="text-[0.625rem] font-normal  text-[#3E5765] sm:text-sm ">
          {title}
        </p>
      </div>
    </div>
  );
}

export default InfoCard;
