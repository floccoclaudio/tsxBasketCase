import React from 'react'
import Shop from './Shop'
import Item from '../types/item'
import FetchedCart from './FetchedCart'
import ToolkitShop from './ToolkitShop'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from './Navbar'
import AsyncThunkEffect from './AsyncThunkEffect'

//#region inventory coded
export const inventory: Item[] = [
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
//#endregion

//#region  styled components
const StyledPageContainer = styled('div')`
  /* color: white; */
  width: 95vw;
  margin: 0 auto;
  padding: 2vh 5vh 0vh 5vh;
`

const StyledAppSeparator = styled('div')`
  border-bottom: 1px solid #2ec4b6;
  width: 100%;
  margin: 5vh auto;
`
//#endregion

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <StyledPageContainer>
        <StyledAppSeparator />
        <Switch>
          <Route path="/" exact>
            <p>Click on of the exercise in the navbar</p>
          </Route>
          <Route path="/hardCodedShop">
            <Shop inventory={inventory} />
          </Route>
          <Route path="/usingFetch">
            <FetchedCart />
          </Route>
          <Route path="/usingToolkit">
            <ToolkitShop />
          </Route>
          <Route path="/asyncThunk">
            <AsyncThunkEffect />
          </Route>
          <Route path="*">Page not found sorry</Route>
        </Switch>
      </StyledPageContainer>
    </BrowserRouter>
  )
}

export default App
