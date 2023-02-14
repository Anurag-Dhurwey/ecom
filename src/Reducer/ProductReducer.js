

const ProductReducer = (state, action) => {
    switch (action.type) {
        case "Api_Loading":
            return {
                ...state,
                isLoading: true,
            };
        case "Set_Api":
            const featured = action.payload.filter((element) => {
                return element.featured === true
            })
            return {
                ...state,
                isLoading: false,
                products: action.payload,
                faturedProducts: featured
            };
        case "Api_Error":

            return {
                ...state,
                isLoading: false,
                isError: true
            };
        case "Api_Single_Loading":

            return {
                ...state,
                isLoading: true,
            };
        case "Set_Single_Api":

            return {
                ...state,
                isLoading: false,
                singleProduct: { ...action.payload }
            };

        case "Api_SIngle_Error":

            return {
                ...state,
                isLoading: false,
                isError: true
            };
        default:
            return state;
    }
}

export default ProductReducer
