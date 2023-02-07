import React from "react";
import { useLocation } from 'react-router-dom';
import "./style.scss";

const Item = (item) => {
    //debugger;
    const location = useLocation();

    let product = location.state.state;
    console.log(product);
    return(
       <div className="wrapper">
        <p className="product-title">
        {product.m_title}
        </p>
        <div className="product-body">
            <div className="image-area">
            <img
        className="image-product"
        src={product.m_img}
        alt={product.m_title}
    />
            </div>
            <div className="product-description">
                <div className="product-title">
                    <p>
                    
                    {product.m_title}
                    </p>
                    <br></br>
                    <p>product price: {product.m_price} {product.m_currencyId}</p>
                    <p>shipping price: {product.m_shippingPrice} {product.m_currencyId}</p>
                    <p>product is found on: <a href={product.m_src}>{product.m_enumSite} </a> </p>
                </div>
                

            </div>
        </div>
       </div>
    );

};
export default Item