import { on } from 'cluster'
import React, { useState } from 'react'
import { FetchedItemType } from '../types/item'
interface Props {}

const fetchFakeData = () => {
  fetch('https://fakestoreapi.com/products/')
    .then(res => res.json())
    .then(json => console.log(json))
}

const FetchedCart = (props: Props) => {
  const [fakeItem, setFakeItem] = useState<FetchedItemType[]>([])
  //   const onClickHandler:()=>FetchedItemType[] = () => {
  //     const fetchedData: FetchedItemType[] =  fetchFakeData()
  //     setFakeItem(fetchedData)
  //     console.log(fakeItem)
  //   }

  const onClickHandler = () => {
    fetchFakeData()
  }
  return (
    <div>
      <button
        onClick={() => {
          onClickHandler()
        }}
      >
        fetch data and log
      </button>
    </div>
  )
}

export default FetchedCart
