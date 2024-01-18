import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
  const [categories, setCategory] = useState(['Dragon ball', 'One Punch']);

  const onAddCategory = () => {
    setCategory([...categories , 'League of Legends']);
  }

  return (
    <>
    <h1>
    GifExpertApp
    </h1>
    <AddCategory setCategory={setCategory}/>
    <button onClick={onAddCategory}>Agregar</button>
    <ol>
      {categories.map(category  => {
        return <li key={category}>{ category }</li>
      })}
    </ol>
    </>
  )
}
