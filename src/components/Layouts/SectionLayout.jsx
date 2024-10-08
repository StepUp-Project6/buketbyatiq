import PropTypes from "prop-types";

const SectionLayout = ({ children, classname, id }) => {
  return (
    <>
      <section className={`px-5 py-8 md:px-[42px] md:py-[48px] lg:px-[62px] xl:px-[88px] lg:py-[60px] ${classname}`} id={id}>
        {children}
      </section>
    </>
  );
};

SectionLayout.propTypes = {
  children: PropTypes.node,
  classname: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.string,
};

export default SectionLayout;
