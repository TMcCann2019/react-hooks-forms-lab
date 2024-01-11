import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [newItemsToShow, setNewItemsToShow] = useState(items);
  
  const addItem = (newItemToShow) => {
    setNewItemsToShow([...newItemsToShow, newItemToShow]);
    console.log(newItemToShow)
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearch(event) {
    setNewItemsToShow(items.filter((item) => {
      return item.name.toLowerCase().includes(event.target.value.toLowerCase());
    }));
  }

  const itemsToDisplay = newItemsToShow.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={addItem}/>
      <Filter onSearchChange= {handleSearch} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
