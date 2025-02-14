import React, { useEffect, useState } from "react";
import PokemonList from "./PokemonList";
import PokemonDetails from "./PokemonDetails";
import { useDebounce } from "../hooks/useDebounce";

const Pokedex = () => {
  const [searchItem, setSearchItem] = useState("");

  const debouncedCall = useDebounce((e) => setSearchItem(e.target.value.toLowerCase()), 1000);

  return (
    <div className="relative flex justify-center items-center w-screen flex-col space-y-5">
      {/* <h1 className="font-bold tracking-widest text-3xl mt-5">Pokemon</h1> */}
      <input
        className="md:w-1/3 py-3 px-6 rounded-full bg-gray-500 outline-none"
        placeholder="Search Valid Pokemon Name..."
        type="search"
        name="search"
        onChange={(e) => debouncedCall(e)}
        id=""
      />
      {searchItem.length == 0 ? (
        <PokemonList />
      ) : (
        <PokemonDetails key={searchItem} pokemonName={searchItem} />
      )}
    </div>
  );
};

export default Pokedex;
