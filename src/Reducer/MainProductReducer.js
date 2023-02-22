
const MainProductReducer = (state,action) => {
 
    switch (action.type) {
        case "GET_ALL_PRODUCTS":
            return{
               ...state,
               filteredProducts:[...action.payload],
               products:[...action.payload],
               isData:true

            }
        
        case "sortingMethod":
            const sortForm=document.getElementById("sort")
            const sortValue=sortForm.options[sortForm.selectedIndex].value
            return{
                ...state,
                sort_value:sortValue,
            }    
            
        case "sorted_product":
            let newSortedData;
            let tempSortedData=[...action.payload];
            if(state.sort_value==="featured"){
                newSortedData=tempSortedData
            }
            if(state.sort_value==="lowest"){
                newSortedData=tempSortedData.sort((a,b)=>{
                  return  a.price - b.price
                })
            }
            if(state.sort_value==="higest"){
                newSortedData=tempSortedData.sort((b,a)=>{
                  return  a.price - b.price
                })
            }
            if(state.sort_value==="a_z"){
                newSortedData=tempSortedData.sort((a,b)=>{
                  return  a.name.localeCompare(b.name)
                })
            }
            if(state.sort_value==="z_a"){
                newSortedData=tempSortedData.sort((b,a)=>{
                  return  a.name.localeCompare(b.name)
                })
            }
        return{
            ...state,
            filteredProducts:newSortedData
        }

        case "filterMethod":
            let newFilterdData
            let tempFilteredData=[...action.payload.products]
                newFilterdData=tempFilteredData.filter((item,i)=>{
                    return  item.name.toLowerCase().includes(action.payload.keyWord.toLowerCase());
                })
            
            return {
               ...state,
               filteredProducts:newFilterdData
            }
    
        default: return state;
    }

}

export default MainProductReducer
