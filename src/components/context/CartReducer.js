import { TYPES } from './CartActions';
import productsList from './Catalogo.json'


export const cartInitialState = {
    products: productsList,
    cart: []
};

export default function CartReducer(state, action) {
    switch (action.type) {
        case TYPES.ADD_TO_CART: {
            console.log(state)
            let newItem = state.products.find(product => product.id === action.payload.id);

            let itemInCart = state.cart.find(item => item.id === newItem.id);

            return itemInCart
                ? {
                    ...state,
                    cart: state.cart.map((item) => item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item)
                }
                : {
                    ...state,
                    cart: [...state.cart, { ...newItem, quantity: action.payload.quantity }]

                }

        }
        case TYPES.ADD_ONE: {
            let newItem = state.products.find(product => product.id === action.payload);

            let itemInCart = state.cart.find(item => item.id === newItem.id);

            return itemInCart
                ? {
                    ...state,
                    cart: state.cart.map((item) => item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item)
                }
                : {
                    ...state,
                    cart: [...state.cart, { ...newItem, quantity: 1 }]
                }
        }
        case TYPES.REMOVE_ONE_FROM_CART: {
            let itemToDelete = state.cart.find(item => item.id === action.payload);

            return itemToDelete.quantity > 1
                ? {
                    ...state,
                    cart: state.cart.map((item) => item.id === action.payload
                        ? {
                            ...item,
                            quantity: item.quantity - 1
                        } : item
                    )

                } : {
                    ...state,
                    cart: state.cart.filter((item) => item.id !== action.payload)
                }



        }
        case TYPES.REMOVE_ALL_FROM_CART: {
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload)
            }
        }
        case TYPES.CLEAR_CART: {
            return cartInitialState;
        }
        default:
            return state;
    }
}
