
const MainProductReducer = (state,action) => {
 
    switch (action.type) {
        case "GET_ALL_PRODUCTS":
            return{
               ...state,
               filteredProducts:action.payload,
               products:action.payload,
               isData:true

            }
            
    
        default: return state;
    }

}

export default MainProductReducer
