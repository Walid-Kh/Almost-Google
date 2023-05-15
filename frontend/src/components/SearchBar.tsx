import { useRouter } from "next/router";
import { FormEventHandler, useEffect, useState } from "react";

export const SearchBar = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    if ( router.pathname === "/result" && router.query.searchTerm)
      setSearchTerm(searchTerm);
  }, [])
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        router.push(`/result/?searchterm=${searchTerm}`);
      }}
      className="w-full border-2 border-body flex rounded-lg bg-black md:p-4 p-2"
    >
      <input
        type="text"
        onChange={(e) => setSearchTerm(e.target.value)}
        className="bg-transparent outline-none text-white flex-grow w-full "
      />
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.31 14.9L21.71 20.29C21.8993 20.4778 22.0058 20.7334 22.0058 21C22.0058 21.2666 21.8993 21.5222 21.71 21.71C21.5222 21.8993 21.2666 22.0058 21 22.0058C20.7334 22.0058 20.4778 21.8993 20.29 21.71L14.9 16.31C13.5025 17.407 11.7767 18.0022 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18.0022 11.7767 17.407 13.5025 16.31 14.9ZM10 4C6.68629 4 4 6.68629 4 10C4 13.3137 6.68629 16 10 16C13.3137 16 16 13.3137 16 10C16 6.68629 13.3137 4 10 4Z"
        />
      </svg>
    </form>
  );
};