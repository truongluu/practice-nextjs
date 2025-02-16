"use client";

import { useEffect, useState } from "react";
import Filter from "../components/Filter";
import Gmap from "../components/Gmap";
import { simulateFetching, User } from "../components/LowerContent";
import SubComonent from "../components/SubComonent";

type SearchParams = {
  [key: string]: string | string[] | undefined;
};

type SearchResultProps = {
  searchParams: Promise<SearchParams>;
};

const isClient = typeof window !== "undefined";

export default function Streaming({ searchParams }: SearchResultProps) {
  const [page, setPage] = useState(1);
  const [getData, setGetData] = useState<Promise<User[]>>(async () => {
    const searchParamsData = await searchParams;
    const page =
      typeof searchParamsData.page === "string"
        ? parseInt(searchParamsData.page)
        : 1;
    console.log(
      `useState updater function is called from ${
        isClient ? "client" : "server"
      }`
    );

    return simulateFetching(page);
  });
  console.log("getData is called", `${isClient ? "client" : "server"}`);

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const searchParamsData = await searchParams;
      const page =
        typeof searchParamsData.page === "string"
          ? parseInt(searchParamsData.page)
          : 1;
      setPage(page);
      setGetData(simulateFetching(page));
    };

    fetchData();
  }, [searchParams]);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      Streaming Page {page}
      <button onClick={toggleVisibility}>
        {isVisible ? "Hide" : "Show"} Element
      </button>
      {isVisible && <Filter />}
      <div className="flex gap-10">
        <SubComonent page={page} promiseData={getData} />
        <Gmap page={page} promiseData={getData} />
      </div>
    </div>
  );
}
