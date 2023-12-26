import React, { useState } from "react";
import restaurants from "../utils/mockData";
import RestoCard from "./RestoCard";


const Body = () => {
    const [listOfResto, setlistOfResto] = useState(restaurants);
  return (
    <div className="Body">
      {/* <div className="search-container"> Search</div> */}
      <div className="filter">
        <button
          onClick={() => {
            const filterlist = listOfResto.filter(
              (resto) => resto.info.avgRating > 4.5
            );
            setlistOfResto(filterlist);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="Resto-container">
        {listOfResto.map((resto) => (
          <RestoCard key={resto.info.id} restoData={resto} />
        ))}
      </div>
    </div>
  );
};

export default Body;
