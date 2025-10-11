"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { usePathname } from "next/navigation";

const SidebarItem = ({ item }) => {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  const hasSubItems = item.subItems?.length > 0;

  const normalColors = "text-gray-700 hover:bg-gray-100";
  const activeColors = "bg-[#4364BF] text-white";

  const isActive = (itemPath) => itemPath === path;

  const toggleOpen = () => setOpen((prev) => !prev);

  return (
    <div className="w-full">
      {/* Main Item */}
      {item.path ? (
        <Link
          href={item.path}
          className={`${
            isActive(item.path) ? activeColors : normalColors
          } flex items-center gap-3 px-4 py-2 rounded-lg transition-colors`}
        >
          <span>{item.icon}</span>
          <span className="flex-1">{item.title}</span>
          {hasSubItems && (
            <span className="text-gray-500">
              {open ? <FiChevronDown /> : <FiChevronRight />}
            </span>
          )}
        </Link>
      ) : (
        <button
          onClick={toggleOpen}
          className="flex items-center gap-3 w-full px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <span>{item.icon}</span>
          <span className="flex-1 text-left">{item.title}</span>
          {hasSubItems && (
            <span className="text-gray-500">
              {open ? <FiChevronDown /> : <FiChevronRight />}
            </span>
          )}
        </button>
      )}

      {/* Sub Items */}
      {hasSubItems && (
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="ml-4 mt-1 flex flex-col border-l border-gray-200 p-2"
            >
              {item.subItems.map((sub, index) => (
                <Link
                  key={index}
                  href={sub.path}
                  className={`${
                    isActive(sub.path) ? activeColors : normalColors
                  } flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition-colors`}
                >
                  <span className="text-base">{sub.icon}</span>
                  <span>{sub.title}</span>
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

export default SidebarItem;
