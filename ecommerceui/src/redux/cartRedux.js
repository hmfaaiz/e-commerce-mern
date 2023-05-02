import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {

        //get product from add to cart btn
        addProduct: (state, action) => {
            //when btn click qty increase by 1
            state.quantity += 1;
            //{...product,quantity,color,size,price:product.price*quantity}
            state.products.push(action.payload.product);
            state.total += action.payload.price;
          

        }
    }
})

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;