// import { on } from 'cluster'
import React, { useState, useEffect } from 'react'
import { FetchedItemType } from '../types/item'
interface Props {}

const fetchFakeData = async (): Promise<void | FetchedItemType[]> => {
  return fetch('https://fakestoreapi.com/products/').then(res => res.json())
}
const FetchedCart = (props: Props) => {
  const [fakeItem, setFakeItem] = useState<FetchedItemType[]>([])

  useEffect(() => {
    ;(async () => {
      const data = await fetchFakeData()
      setFakeItem(data as FetchedItemType[])
    })()
  }, [])

  console.log(fakeItem)
  return (
    <div>
      <button>fetch data and log</button> 
    </div>
  )
}

export default FetchedCart
