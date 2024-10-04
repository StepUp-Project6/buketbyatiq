import React, { useState, useEffect } from "react";

const Pagination = ({ data, CardComponent }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isFading, setIsFading] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(window.innerWidth < 768 ? 6 : 8);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 768 ? 6 : 8);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleClick = (pageNumber) => {
    if (pageNumber !== currentPage) {
      setIsFading(true);
      setTimeout(() => {
        setCurrentPage(pageNumber);
        setIsFading(false);
      }, 300); // Durasi animasi fade
    }
  };

  const currentItems = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex flex-col items-center">
      {/* Render komponen kartu yang dinamis berdasarkan data */}
      <div
        className={`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 mb-6 transition-opacity duration-500 ${
          isFading ? "opacity-0" : "opacity-100"
        }`}
      >
        {currentItems.map((item) => (
          <CardComponent key={item.id} data={item} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex rounded-md shadow-customShadow border border-gray-100 lg:mt-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(
          (pageNumber, index) => (
            <button
              key={pageNumber}
              onClick={() => handleClick(pageNumber)}
              className={`px-3 py-1 ${
                currentPage === pageNumber
                  ? "bg-yellow-500 text-white"
                  : "bg-white text-yellow-500"
              } transition duration-500 ease-in-out 
                ${index === 0 ? "rounded-l-md px-[14px]" : ""}  // Border-radius untuk tombol pertama
                ${index === totalPages - 1 ? "rounded-r-md" : ""}  // Border-radius untuk tombol terakhir
              `}
            >
              {pageNumber}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Pagination;
