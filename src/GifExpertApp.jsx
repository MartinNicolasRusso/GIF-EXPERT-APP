import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategory] = useState(["Dragon ball", "One Punch"]);

  const onAddCategory = ( newCategory ) => {
    
    if(categories.includes(newCategory)) return;

    setCategory([newCategory, ...categories]);
    
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory
      //  setCategory={setCategory} 
      onNewCategory={event => onAddCategory(event) }/>
      <button onClick={onAddCategory}>Agregar</button>
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
