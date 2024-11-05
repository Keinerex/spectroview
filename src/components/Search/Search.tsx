import { ChangeEvent, useEffect, useState } from "react";
import data from "../../data";
import { useDebounce } from "@uidotdev/usehooks";

interface SearchProps {
  setSearchResult: (result: SearchResult[]) => void;
}

export const Search = ({ setSearchResult }: SearchProps) => {

  const [searchValue, setSearchValue] = useState<number | undefined>(0);
  const debouncedSearchValue = useDebounce(searchValue, 500)

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    if (Number.parseFloat(event.target.value)) setSearchValue(Number.parseFloat(event.target.value));
    else setSearchValue(0)
  }
  useEffect(() => {
    if (debouncedSearchValue) {
      console.log(debouncedSearchValue)

      setSearchResult([...data.filter(({
                                         group,
                                         filterRanges
                                       }) => !group.includes("C") && filterRanges.some(([from, to]) =>
        (from <= debouncedSearchValue && debouncedSearchValue <= to)
      ))])
    }
  }, [debouncedSearchValue, setSearchResult]);

  return (
    <label className="input input-bordered flex items-center gap-2">
      <input value={searchValue} onInput={handleInput} className="grow w-56"
             placeholder="Search"/>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="h-4 w-4 opacity-70">
        <path
          fillRule="evenodd"
          d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
          clipRule="evenodd"/>
      </svg>
    </label>
  );
};