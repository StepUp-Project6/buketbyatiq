import PropTypes from "prop-types";

const CardTestimoni = ({ testimoni }) => {
  return (
    <>
      <div className={`flex flex-col gap-3 w-[279px] lg:w-[554px] tracking-normal`}>
        <div className="flex flex-row justify-between">
          <img src="svg/quote.svg" alt="" className="w-[25px] h-[25px] md:w-[30px] md:h-[30px] lg:w-[40px] lg:h-[40px] xl:w-[62px] xl:h-[62px] ml-5" />
          <div className="flex flex-row items-center justify-center gap-3">
            <p className="text-base md:text-lg lg:text-[30px] xl:text-[36px] font-bold font-timesNewRoman">{testimoni.name}</p>
            <img src={testimoni.src} className="w-[38px] h-[38px] md:w-[42px] md:h-[42px] lg:w-[64px] lg:h-[64px] " alt="" />
          </div>
        </div>
        <p className="text-xs md:text-sm lg:text-lg font-normal font-timesNewRoman text-end">{testimoni.testimoni}</p>
        <p className="text-[10px] md:text-xs lg:text-lg font-bold font-timesNewRoman text-end tracking-wide">{testimoni.date}</p>
      </div>
    </>
  );
};

CardTestimoni.propTypes = {
  testimoni: PropTypes.object,
  isVisible: PropTypes.bool,
};
export default CardTestimoni;
