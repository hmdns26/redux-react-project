const additem =product=>{
    return{
        type:'ADD_ITEM',
        payload:product
    }
}
const removeitem =product=>{
    return{
        type:'REMOVE_ITEM',
        payload:product
    }
}
const increase =product=>{
    return{
        type:'INCREASE',
        payload:product
    }
}
const decrease =product=>{
    return{
        type:'DECREASE',
        payload:product
    }
}
const checkout=()=>{
    return{
        type:'CHECKOUT'
    }
}
const clear=()=>{
    return{
        type:'CLEAR'
    }
}
export {additem,removeitem,increase,decrease,checkout,clear};