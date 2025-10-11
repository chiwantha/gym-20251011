"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb() {
  const pathname = usePathname();
  const paths = pathname.split("/").filter(Boolean);

  return (
    <nav className="flex items-center text-sm text-gray-600 mb-2 h-[20px] ">
      {/* Home link */}
      <Link
        href="/"
        className="text-blue-600 hover:text-blue-800 transition-colors font-semibold"
      >
        Home
      </Link>
      {pathname !== "/menu" && (
        <Link
          href="/menu"
          className="text-blue-600 ml-1 hover:text-blue-800 transition-colors font-semibold"
        >
          / Menu
        </Link>
      )}

      {/* Other segments (not clickable) */}
      {paths.map((segment, i) => (
        <span key={i} className="flex items-center">
          <span className="mx-1 text-gray-400">/</span>
          <span className="text-gray-700 ">
            {segment.charAt(0).toUpperCase() + segment.slice(1)}
          </span>
        </span>
      ))}
    </nav>
  );
}
