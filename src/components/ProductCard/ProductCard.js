import React, { useEffect, useState } from "react";
//import * as S from "./style";
import "./main.scss";
import StarRatings from "react-star-ratings";
import Heart from "react-animated-heart";
import { Link } from "react-router-dom";

 export default function ProductCard ({product})
{
    const [isClick, setClick] = useState(false);
    const Truncate = (string, number) => {
        if (!string) {
            return null;
        }
        if (string.length <= number) {
            return string;
        }
        return string.slice(0, number) + "...";
    };

    return(
<div className="card" key={product.m_id}>
    <div className="column">
    <img
        className="card-image"
        src={product.m_img}
        alt={product.m_title}
    />
    <div className="card-body">
        <h5
            className="card-title"
            title={product.m_title.length >= 50 ? product.m_title : null}
        >
            {Truncate(product.m_title, 55)}
        </h5>
        <p className="card-description">
            {Truncate(product.m_description, 55)}
        </p>
        <p className="card-price">${product.m_price}</p>

    </div>
    </div>
        <div className="card-detail">
            <button variant="contained" className="blue">
            <Link to={"/item"} className="button-link"
            state= {{state : product}}

            >buy</Link>
            </button>
            <div className="heart">
            <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
            </div>
            
        </div>
</div>
)
}