import React from 'react'
import Item from '../types/item'
import { inventory } from './App'

interface ShopProps {
  inventory: Item[]
}

const Shop: React.FC<ShopProps> = props => {
  return (
    <>
      <header>Shop with hard coded inventory</header>
      <ul>
        {inventory.map(item => {
          return <li key={item.id}>{item.label}</li>
        })}
      </ul>
      <hr />
    </>
  )
}

export default Shop
