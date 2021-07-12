import React from 'react'
import Item from '../types/item'

interface ShopProps {
  inventory: Item[]
}

const Shop: React.FC<ShopProps> = props => {
  console.log(props)
  return <div>Shop component here</div>
}

export default Shop
