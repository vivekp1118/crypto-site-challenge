function KeyValuePairCell({
  label,
  value,
  chlidren = null,
  secondaryValue = "",
}) {
  return (
    <div className="inline-flex h-14 items-center justify-between border-b border-slate-300 py-3">
      <div className="text-sm font-medium leading-tight text-[#768396]">
        {label}
      </div>
      <div className="text-right text-sm font-semibold leading-tight text-[#111827]">
        {value} {chlidren}
        <br />
        {secondaryValue && (
          <p className="text-right text-xs font-normal text-[#111827]">
            {secondaryValue}
          </p>
        )}
      </div>
    </div>
  );
}

export default KeyValuePairCell;
