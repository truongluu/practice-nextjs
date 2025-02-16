"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useRef, useState } from "react";

function Filter() {
  const [toggleFilter, setToggle] = useState(false);
  const pageRef = useRef(1);
  const pathName = usePathname();
  const router = useRouter();
  const searchParmas = useSearchParams();

  const updateFilters = () => {
    const params = new URLSearchParams(searchParmas);
    pageRef.current = pageRef.current + 1;
    params.set("page", pageRef.current.toString());
    router.push(`${pathName}?${params.toString()}`);
  };

  return (
    <div>
      Filter {toggleFilter ? "true" : "false"}
      <button
        onClick={() => {
          setToggle(!toggleFilter);
          updateFilters();
        }}
      >
        Filter
      </button>
    </div>
  );
}

export default Filter;
