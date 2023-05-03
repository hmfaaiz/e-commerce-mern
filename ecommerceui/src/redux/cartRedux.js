import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity1: 0,
        total: 0,
    },
    reducers: {

        //get product from add to cart btn
        addProduct: (state, action) => {
            //when btn click qty increase by 1
            state.quantity1 += 1;
            //{...product,quantity,color,size,price:product.price*quantity}
            state.products.push(action.payload);
            state.total += action.payload.price;
            console.log("products info",action.payload)
          
          
          

        }
    }
})

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;