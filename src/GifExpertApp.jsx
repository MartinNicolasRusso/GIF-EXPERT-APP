import React, { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategory] = useState(["Dragon ball"]);

  const onAddCategory = ( newCategory ) => {
    
    if( categories.includes( newCategory ) ) return;

    setCategory( [ newCategory, ...categories ] );
    
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory
      onNewCategory={event => onAddCategory(event) }/>
        { 
          categories.map( ( category ) => (
              <GifGrid 
              key={category} 
              category={ category }
              />
            )
          )
        }
    </>
  );
};
