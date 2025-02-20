import React from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import coffeeShops from "../data/coffeeShops";

const ItemListContainer = () => {
  const { categoryId } = useParams(); // Get the selected city from the URL

  // Filter coffee shops by city
  const filteredShops = categoryId
    ? coffeeShops.filter(shop => shop.city.toLowerCase().includes(categoryId.toLowerCase()))
    : coffeeShops;

  return (
    <div className="container">
      <h2 className="text-center my-4">{categoryId ? `Coffee Shops in ${categoryId}` : "All Coffee Shops"}</h2>
      <ItemList items={filteredShops} />
    </div>
  );
};

export default ItemListContainer;
