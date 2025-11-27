import { createSlice, current } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { IProductType } from '../../productData'

// Define a type for the slice state
interface productState {
  productList: IProductType[]
  likedProducts: IProductType[]
  cartProducts: IProductType[]
  currentProduct: IProductType | null
}

// Define the initial state using that type
const initialState: productState = {
  productList: [],
  likedProducts: [],
  cartProducts: [],
  currentProduct: null,
}

export const productSlice = createSlice({
  name: 'proucts',
  initialState,
  reducers: {
    setProductList: (state, action: PayloadAction<IProductType[]>)=> {
      state = {...state, productList: action.payload}
    },
    addToLikes: (state, action: PayloadAction<IProductType>)=> {
      const newItem = action.payload;
      console.log({ newItem})
      state.likedProducts.push(newItem)
    },
    removeFromLikes: (state, action: PayloadAction<IProductType>)=> {
      const newList = current(state).likedProducts.filter(item => item.id !== action.payload.id)
      state.likedProducts = newList
    },
    addToCart: (state, action: PayloadAction<IProductType>)=> {
      const newItem = action.payload;
      const existingItem = state.cartProducts.find(item => item.id === newItem.id);
      existingItem ? existingItem.QTY += 1 : state.cartProducts.push({ ...newItem, QTY: 1 })
    },
    setCurrentProduct: (state, action: PayloadAction<IProductType>)=> {
      state.currentProduct = action.payload
    },
  },
})

export const { addToCart, addToLikes, setCurrentProduct, setProductList, removeFromLikes } = productSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectedProductState = (state: RootState) => state.products

export default productSlice.reducer