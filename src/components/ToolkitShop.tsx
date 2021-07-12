import React from 'react'
import { useAppSelector, useAppDispatch } from '../app/hooks'
import { addToCart } from '../features/cartSlice'
interface Props {}

const ToolkitShop: React.FC = (props: Props) => {
  const dispatch = useAppDispatch()
  const inventoryAgain = useAppSelector(state => state.shopItemList.inventory)

  return (
    <div>
      <p>List of items taken by redux store</p>
      <ul>
        {inventoryAgain.map(item => {
          return (
            <li key={item.id}>
              {item.label}
              <button onClick={() => dispatch(addToCart(item))}>
                Add to cart
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default ToolkitShop
