import React from 'react'
import { useAppSelector } from '../app/hooks'

interface Props {}

const ToolkitShop: React.FC = (props: Props) => {
  //   const dispatch: AppDispatch = useDispatch()
  const inventoryAgain = useAppSelector(state => state.shopItemList.inventory)

  return (
    <div>
      <p>List of items taken by redux store</p>
      <ul>
        {inventoryAgain.map(item => {
          return <li key={item.id}>{item.label}</li>
        })}
      </ul>
    </div>
  )
}
export default ToolkitShop
