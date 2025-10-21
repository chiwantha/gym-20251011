"use client";
import { useState, useMemo } from "react";
import Button from "../buttons/button/Button";
import NavBtn from "../buttons/navBtn/NavBtn";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { AiOutlineDoubleRight } from "react-icons/ai";

const DataGrid = ({
  title,
  children,
  newClick,
  searchKeys = [],
  itemsPerPage = 10,
  pending = false,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Extract child props for searching
  const items = useMemo(() => {
    if (!Array.isArray(children)) return [];
    return children.map((child) => child.props?.props || {});
  }, [children]);

  // Search filter
  const filteredItems = useMemo(() => {
    if (!searchQuery) return items;
    const query = searchQuery.toLowerCase();
    return items.filter((item) =>
      searchKeys.some((key) =>
        String(item[key] || "")
          .toLowerCase()
          .includes(query)
      )
    );
  }, [items, searchQuery, searchKeys]);

  // Pagination math
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredItems.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Displayed children (filtered + paginated)
  const displayedChildren = useMemo(() => {
    if (!Array.isArray(children)) return children;
    return children
      .filter((child) =>
        currentItems.some((item) => item.id === child.props?.props?.id)
      )
      .slice(0, itemsPerPage);
  }, [children, currentItems]);

  // Pagination window logic (e.g., [Prev][2][3][4][Last][Next])
  const getPageNumbers = () => {
    const pages = [];
    const visibleRange = 1; // how many pages before/after current
    let start = Math.max(currentPage - visibleRange, 1);
    let end = Math.min(currentPage + visibleRange, totalPages);

    // Always show 3 pages total when possible
    if (end - start < 2) {
      if (start === 1) end = Math.min(3, totalPages);
      else if (end === totalPages) start = Math.max(totalPages - 2, 1);
    }

    for (let i = start; i <= end; i++) pages.push(i);
    return pages;
  };

  const handlePageClick = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Action Strip */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        {/* Left Section */}
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <div
            className="px-4 py-2 bg-gray-200 border border-gray-200 
          rounded-lg text-center text-gray-800 font-medium whitespace-nowrap"
          >
            {title ? `${title} Page` : "Page Title"}
          </div>

          {/* Add New (mobile only) */}
          <div className="w-full sm:w-auto sm:hidden">
            <Button
              title="Add New"
              pd="py-2 px-4 w-full sm:w-auto"
              click={() => newClick({ action: "new" })}
              className="whitespace-nowrap"
            />
          </div>
        </div>

        {/* Search Input */}
        <input
          type="search"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setCurrentPage(1);
          }}
          className="w-full xl:w-[40%] 2xl:w-[30%] p-2 bg-gray-100 border
           border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#4364BF]
            transition-all duration-300"
          placeholder={`Search ${title || "Items"}`}
        />

        {/* Add New (desktop only) */}
        <div className="hidden sm:block w-full sm:w-auto">
          <Button
            title="Add New"
            pd="py-2 px-4 w-full sm:w-auto"
            click={() => newClick({ action: "new" })}
            className="whitespace-nowrap"
          />
        </div>
      </div>

      {/* Grid */}
      {!pending ? (
        <div
          className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3
       2xl:grid-cols-5 transition-all duration-300"
        >
          {displayedChildren.length > 0 ? (
            displayedChildren
          ) : (
            <div className="col-span-full text-center text-gray-500 py-10">
              No results found
            </div>
          )}
        </div>
      ) : (
        <div className="flex items-center justify-center py-10">Loading !</div>
      )}

      {/* Pagination Bar */}
      {totalPages > 1 && (
        <div className="flex  items-center gap-2 h-[35px] flex-wrap">
          {/* Prev */}
          <NavBtn
            icon={<IoIosArrowBack />}
            click={() => handlePageClick(currentPage - 1)}
          />

          {/* Show first page if not visible */}
          {getPageNumbers()[0] > 1 && (
            <NavBtn
              icon={<AiOutlineDoubleLeft />}
              click={() => handlePageClick(1)}
            />
          )}

          {/* Dynamic pages */}
          {getPageNumbers().map((page) => (
            <NavBtn
              key={page}
              icon={page}
              state={currentPage === page}
              click={() => {
                () => handlePageClick(page);
              }}
            />
          ))}

          {/* Show last page if not visible */}
          {getPageNumbers().slice(-1)[0] < totalPages && (
            <NavBtn
              icon={<AiOutlineDoubleRight />}
              click={() => handlePageClick(totalPages)}
            />
          )}

          {/* Next */}
          <NavBtn
            icon={<IoIosArrowForward />}
            click={() => handlePageClick(currentPage + 1)}
          />
        </div>
      )}
    </div>
  );
};

export default DataGrid;
