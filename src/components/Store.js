import React, { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';

// Components
import Product from './shared/Product';

// redux
import { fetchProducts } from '../redux/products/productsAction';
// Style
import styles from "./Store.module.css";

const Store = () => {

    const dispatch = useDispatch();
    const productState=useSelector(state=>state.productStete);
    useEffect(()=>{
        if(!productState.products.length) dispatch(fetchProducts())
    },[])
    return (
        <div className={styles.container} >
            {
                productState.loading?
                <h2>loading...</h2>:
                productState.error?
                <p>somthing went wrong</p>:
                productState.products.map(product=><Product key={product.id} productData={product} />)
            }
        </div>
    );
};

export default Store;