import { ADD_PRODUCT, DELETE_PRODUCT } from "../actionTypes";


const initialState = {
    products:[{name:"ABCD",id:"1"}],
    userName:"Username"
}

const Reducers = (state = initialState, { type, payload }) => {
    switch (type) {

    case ADD_PRODUCT:
        return { ...state, products:[...state.products, payload] }
    case DELETE_PRODUCT:{
        const id=payload;
        const updateProduct = state.products.filter(item => item.id !== id)
        return { ...state, products: updateProduct }
    }

    default:
        return state
    }
}
export default Reducers;
