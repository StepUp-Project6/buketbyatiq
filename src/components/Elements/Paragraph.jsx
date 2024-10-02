import PropTypes from "prop-types";
const Paragraph = ({ content, classname }) => {
  return (
    <>
      <p className={`text-xs md:text-sm lg:text-lg xl:text-xl font-normal font-timesNewRoman text-justify leading-normal ${classname}`}>{content}</p>
    </>
  );
};

Paragraph.propTypes = {
  content: PropTypes.string,
  classname: PropTypes.string,
};
export default Paragraph;
