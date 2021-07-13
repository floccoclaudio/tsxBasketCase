import React, { useEffect } from 'react'
import { fetchFakeItems } from '../features/fakestoreItemListSlice'

import { useAppSelector, useAppDispatch } from '../app/hooks'

// interface Props {}

const AsyncThunkEffect: React.FC = () => {
  const dispatch = useAppDispatch()
  const fakeInventory = useAppSelector(state => state.fakeItemList.fetchedCart)
  useEffect(() => {
    dispatch(fetchFakeItems())
  }, [dispatch])

  useEffect(() => {
    if (fakeInventory.length > 0) {
      console.log(fakeInventory)
    }
  }, [fakeInventory])

  return (
    <div>
      <p>List of items taken by redux store</p>
      <ul>asyncthunkeffect here</ul>
    </div>
  )
}
export default AsyncThunkEffect
