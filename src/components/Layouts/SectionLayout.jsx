import PropTypes from "prop-types";

const SectionLayout = ({ children, classname }) => {
  return (
    <>
      <section className={`px-5 py-8 md:px-[42px] md:py-[48px] lg:px-[88px] lg:py-[60px] ${classname}`}>
        {children}
      </section>
    </>
  );
};

SectionLayout.propTypes = {
  children: PropTypes.node,
  classname: PropTypes.string,
  title: PropTypes.string,
};

export default SectionLayout;
