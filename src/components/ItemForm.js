import React from "react";
import { v4 as uuid } from "uuid";
import {useState} from "react";

function ItemForm({onItemFormSubmit}) {
  const [formData, setFormData] = useState({
    id: uuid(),
    name: "",
    category: "Dessert",
  })

  function handleInputChange(e) {
    setFormData(formData => {
      return {...formData, name: e.target.value }
    })
  }

  function handleCategoryChange(e) {
    setFormData(formData => {
      return {...formData, category: e.target.value }
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e)
    onItemFormSubmit(formData);
    setFormData({
      id: uuid(),
      name: "",
      category: "Dessert",
    })
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input 
          type="text" 
          name="name"
          id="name" 
          value={formData.name}
          onChange={handleInputChange}
        />
      </label>

      <label>
        Category:
        <select 
          name="category"
          id="category" 
          value={formData.category}
          onChange={handleCategoryChange}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;