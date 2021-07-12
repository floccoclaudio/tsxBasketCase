import React from 'react'
import Shop from './Shop'
import Item from '../types/item'
import FetchedCart from './FetchedCart'

const inventory: Item[] = [
  {
    label: 'mouse',
    price: 10,
    id: 'mouseID',
    stock: 15,
  },
  {
    label: 'keyboard',
    price: 15,
    id: 'keyboardID',
    stock: 1,
  },
  {
    label: 'headphones',
    price: 60,
    id: 'headphonesID',
    stock: 0,
  },
  {
    label: 'laptop',
    price: 250,
    id: 'laptopID',
    stock: 5,
  },
]

const App: React.FC = () => {
  return (
    <div>
      <Shop inventory={inventory} />
      <FetchedCart />
    </div>
  )
}

export default App
