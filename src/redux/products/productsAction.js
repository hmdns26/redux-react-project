import axios from "axios";

const fetchProductsRequest = ()=>{
    return {
        type:'FETCH_PRODUCTS_REQUEST'
    }
}

const fetchProductsSUCCES =product=>{
    return {
        type:'FETCH_PRODUCTS_SUCCES',
        payload:product
    }
}
const fetchProductsFail =error=>{
    return {
        type:'FETCH_PRODUCTS_FAIL',
        payload:error
    }
}

export const fetchProducts = ()=>{
    return (dispatch)=>{
        dispatch(fetchProductsRequest());
        axios.get( "https://fakestoreapi.com/products")
        .then(response=>{
            const product=response.data;
            dispatch(fetchProductsSUCCES(product))
        })
        .catch(error=>{
            const errorMsg=error.massage;
            dispatch(fetchProductsFail(errorMsg))
        })

    }
}