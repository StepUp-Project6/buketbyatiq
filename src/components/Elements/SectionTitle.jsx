import PropTypes from "prop-types";
const SectionTitle = ({ title, classname }) => {
  return (
    <>
      <h2 className={`text-base md:text-2xl lg:text-4xl font-bold font-playfair text-primary ${classname}`}>{title}</h2>
    </>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string,
  classname: PropTypes.string,
};

export default SectionTitle;
