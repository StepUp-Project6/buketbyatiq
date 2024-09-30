
const Logo = () => {
  return (
    <div className="flex flex-row items-center gap-1">
      <img
        src="images/logo.png"
        alt=""
        className="h-[29px] w-[29px] md:h-[34px] md:w-[34px] lg:h-[46px] lg:w-[46px]"
      />
      <h2 className="font-playfair text-base lg:text-xl font-bold text-primary">Buket Byatiq</h2>
    </div>
  );
};

export default Logo;
