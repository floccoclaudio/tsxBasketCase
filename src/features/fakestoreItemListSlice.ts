import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import FetchedItemType from '../types/item'

//primo parametro tipo di ritorno,
//secondo ingresso
//terzo per tupizzare stato(getState) dispatch
export const fetchFakeItems = createAsyncThunk<FetchedItemType[], void, { rejectValue: string }>(
    'fakeItems/fetchItems',
    async function fetchFakeItemList(_, { rejectWithValue }) {
        try {
            let response = await fetch('https://fakestoreapi.com/products/')
            return await response.json() as FetchedItemType[]

        }
        catch (error) {
            return rejectWithValue(error as string)
        }
    }
)



interface FakeStoreInitialStateType {
    fetchedCart: FetchedItemType[]
    isFakeStateError: boolean,
    isFakeStateLoading: boolean,
    isFakeStateSuccess: boolean
}

const cartInitialState: FakeStoreInitialStateType = {
    fetchedCart: [],
    isFakeStateError: false,
    isFakeStateLoading: false,
    isFakeStateSuccess: false
}



const fakeStoreItemSlice = createSlice({
    name: 'fetchedCart',
    initialState: cartInitialState,
    reducers: {

    },
    extraReducers: builder => {
        builder.addCase(fetchFakeItems.pending, state => {
            state.isFakeStateLoading = true
        })
            .addCase(fetchFakeItems.fulfilled, (state, action) => {
                state.isFakeStateLoading = false;
                state.isFakeStateSuccess = true;
                state.fetchedCart = action.payload;
            })
            .addCase(fetchFakeItems.rejected, state => {
                state.isFakeStateLoading = false;
                state.isFakeStateError = true
            })
    }
}
)


export default fakeStoreItemSlice.reducer