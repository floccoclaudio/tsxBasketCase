import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import FetchedItemType from '../types/item'

export const fetchFakeItems = createAsyncThunk(
    'fakeItems/fetchItems',
    async function fetchFakeItemList(fakeItems: FetchedItemType) {
        let response = await fetch('https://fakestoreapi.com/products/')
        response = await response.json()
        console.log(response)
    }
)



interface FakeStoreInitialStateType {
    fetchedCart: FetchedItemType[]
}

const cartInitialState: FakeStoreInitialStateType = {
    fetchedCart: []
}



const fakeStoreItemSlice = createSlice({
    name: 'fetchedCart',
    initialState: cartInitialState,
    reducers: {

    }
})


export default fakeStoreItemSlice.reducer