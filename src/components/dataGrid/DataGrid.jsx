"use client";
import { useState } from "react";
import Button from "../buttons/button/Button";
import ActionTray from "../layout/actionTray/ActionTray";

const DataGrid = ({ title, children }) => {
  const [trayOpen, setTrayOpen] = useState(false);
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
              click={() => setTrayOpen(!trayOpen)}
              className="whitespace-nowrap"
            />
          </div>
        </div>

        {/* Search Input */}
        <input
          type="search"
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
            click={() => setTrayOpen(!trayOpen)}
            className="whitespace-nowrap"
          />
        </div>
      </div>

      <div
        className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3
       2xl:grid-cols-5 transition-all duration-300"
      >
        {children}
      </div>
      <ActionTray state={trayOpen} closeTray={setTrayOpen} />
    </div>
  );
};

export default DataGrid;
