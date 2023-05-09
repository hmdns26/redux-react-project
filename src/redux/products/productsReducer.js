const initialState={
    products:[],
    error:'',
    loading:false,
}

const productsReducer =(state=initialState,action)=>{
    switch(action.type){
        case 'FETCH_PRODUCTS_REQUEST':
            return{
                ...state,
                loading:true
            }
        case 'FETCH_PRODUCTS_SUCCES':
            return{
                loading:false,
                products:action.payload
            }
        case 'FETCH_PRODUCTS_FAIL':
            return{
                loading:false,
                error:action.payload
            }
        default:
            return state
    }
}
export default productsReducer; 