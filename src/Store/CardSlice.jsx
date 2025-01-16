import { createSlice } from "@reduxjs/toolkit";

const CardSlice = createSlice({
    name: 'card',
    initialState: {
        card: []
    },
    reducers: {
        addCard: (state, action) => {
            const existingItem = () => {
                state.card = state.card.find((item)=>item.id === action.payload.id)
                if (existingItem) {
                    state.card = state.card.map((item) => item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item)
                } else {
                    state.card.push(action.payload)
                }
            }
        },
        removeCard: (state, action) => {
            state.card = state.card.filter((item) => item.id !== action.payload.id)
        }
    }
})
export const { addCard, removeCard } = CardSlice.actions
export default CardSlice.reducer