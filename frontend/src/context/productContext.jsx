import { createContext,  useReducer } from "react";


export const ProductContext = createContext()


export const ProductReducer = (state, action) => {

    switch (action.type) {
        case "SET_PRODUCTS":
            return {
                products: action.payload
            }         
        case "CREATE_PRODUCT":
            return {
                products: [action.payload, ...state.products || []]
            }
        case "SET_PRODUCT":
            return{
                singleProduct:action.payload
            }
        case "DELETE_PRODUCT":
            return {
                products: state.products.filter((w) => w._id !== action.payload._id)
            }
            case 'UPDATE_PRODUCT':
                return {
                    products: state.products.map((w) => (w._id === action.payload._id ? action.payload : w))
                }

        default:
            return state
    }
}


export const ProductContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ProductReducer, {
        state: []
    })

    return (
        <ProductContext.Provider value={{ ...state, dispatch }}>
            {children}
        </ProductContext.Provider>
    )
}