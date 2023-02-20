import React, { useState, useEffect } from 'react'
import ProductCard from'../components/ProductCard/ProductCard';
import '../components/ProductCard/main.scss'

export default function Post({query, begin, end, getLength}) {
    const [post, getPost] = useState([])
    let API = 'http://52.59.220.46:8080/Search/GetJson/' ;
    // console.log({query});
    // const API = 'https://randomuser.me/api/?results=25&page=1';
    const fetchPost = (query) => {
        console.log(API+query.query);
        fetch(API+query.query, {
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin':'*'
            }})
            .then((res) => res.json())
            .then((res) => {
                // console.log(res)
                getPost(res)
            })

    }
    useEffect(() => {
        fetchPost({query})
    }, [query])
    let part = post.slice(begin,end)
    getLength(post.length)
    return (
        <div className="grid">
                {part.map((item, i) => {
                    return <ProductCard product={item}/>

                })}
        </div>
    )
}