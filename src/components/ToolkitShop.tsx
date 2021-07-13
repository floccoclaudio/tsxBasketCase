import React from 'react'
import { useAppSelector, useAppDispatch } from '../app/hooks'
import { addToCart } from '../features/cartSlice'
import ItemCard from './ItemCard'
// interface Props {}

const ToolkitShop: React.FC = () => {
  const dispatch = useAppDispatch()
  const inventoryAgain = useAppSelector(state => state.shopItemList.inventory)

  return (
    <div>
      <p>List of items taken by redux store</p>
      <ul>
        {inventoryAgain.map(item => {
          return (
            <li key={item.id}>
              <ItemCard />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default ToolkitShop
