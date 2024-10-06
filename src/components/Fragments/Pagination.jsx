import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Pagination = ({ data, CardComponent }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(window.innerWidth < 768 ? 6 : 8);

  useEffect(() => {
    const handleResize = () => {
      // Menyesuaikan jumlah item per halaman berdasarkan lebar layar
      setItemsPerPage(window.innerWidth < 768 ? 6 : 8);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleClick = (pageNumber) => {
    if (pageNumber !== currentPage) {
      setCurrentPage(pageNumber);
    }
  };

  // Menentukan item yang harus ditampilkan pada halaman saat ini
  const currentItems = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Menambahkan placeholder untuk menjaga grid tetap 6 atau 8 item per halaman
  const placeholders = Array.from(
    { length: itemsPerPage - currentItems.length },
    (_, i) => (
      <div
        key={`placeholder-${i}`}
        className={`w-[160px] h-[160px] md:w-[200px] md:h-[200px] xl:w-[263px] xl:h-[263px] invisible`}
      />
    )
  );

  return (
    <div className="flex flex-col items-center">
      {/* Render produk dalam grid */}
      <div className="grid grid-cols-2 gap-x-6 gap-y-8 mb-6 md:grid-cols-4">
        {currentItems.map((item) => (
          <CardComponent key={item.id} product={item} />
        ))}
        {/* Tambahkan placeholder jika produk di halaman kurang dari jumlah maksimal */}
        {placeholders}
      </div>

      {/* Tombol Pagination */}
      <div className="flex rounded-md shadow-customShadow border border-gray-100 lg:mt-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(
          (pageNumber, index) => (
            <button
              key={pageNumber}
              onClick={() => handleClick(pageNumber)}
              className={`px-3 py-1 ${
                currentPage === pageNumber
                  ? "bg-[#193446] text-white"
                  : "bg-stone-100 text-black"
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

Pagination.propTypes = {
  data: PropTypes.array.isRequired,
  CardComponent: PropTypes.func.isRequired,
};

export default Pagination;
