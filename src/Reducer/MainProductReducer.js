

const MainProductReducer = (state, action) => {
  switch (action.type) {
    case "GET_ALL_PRODUCTS":
      return {
        ...state,
        filteredProducts: [...action.payload],
        products: [...action.payload],
        isData: true,
      };

    case "sortingMethod":
      const sortForm = document.getElementById("sort");
      const sortValue = sortForm.options[sortForm.selectedIndex].value;
      return {
        ...state,
        sort_value: sortValue,
      };

    case "sorted_product":
      let newSortedData;
      let tempSortedData = [...action.payload];
      if (state.sort_value === "featured") {
        newSortedData = tempSortedData;
      }
      if (state.sort_value === "lowest") {
        newSortedData = tempSortedData.sort((a, b) => {
          return a.price - b.price;
        });
      }
      if (state.sort_value === "higest") {
        newSortedData = tempSortedData.sort((b, a) => {
          return a.price - b.price;
        });
      }
      if (state.sort_value === "a_z") {
        newSortedData = tempSortedData.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      }
      if (state.sort_value === "z_a") {
        newSortedData = tempSortedData.sort((b, a) => {
          return a.name.localeCompare(b.name);
        });
      }
      return {
        ...state,
        filteredProducts: newSortedData,
      };

    case "filterMethod":
      let tempFilteredData = [...action.payload.products];
      if (action.payload.name === "search") {
        tempFilteredData = tempFilteredData.filter((item, i) => {
          return item.name
            .toLowerCase()
            .includes(action.payload.keyWord.toLowerCase());
        });
      }
      if (action.payload.name === "category") {

            tempFilteredData = tempFilteredData.filter((item, i) => {
              if(action.payload.keyWord==="All"){
                return item
              }
                return item.category.toString() === action.payload.keyWord.toString();
              });
      
      }
      if (action.payload.name === "company") {
            tempFilteredData = tempFilteredData.filter((item, i) => {
              if(action.payload.keyWord==="All"){
                return item
              }
                return item.company.toString() === action.payload.keyWord.toString();
              });
         
      
      }

      return {
        ...state,
        filteredProducts: tempFilteredData,
      };

    default:
      return state;
  }
};

export default MainProductReducer;
