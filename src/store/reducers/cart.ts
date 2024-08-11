import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { v4 as uuidv4 } from 'uuid'

import { Diner } from '../../pages/Home'

type CartItem = Diner['cardapio'][number] & { cartItemId: string }

type CartState = {
  items: CartItem[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Diner['cardapio'][number]>) => {
      state.items.push({ ...action.payload, cartItemId: uuidv4() })
    },
    remove: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        (item) => item.cartItemId !== action.payload
      )
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, remove, open, close } = cartSlice.actions

export default cartSlice.reducer
