import React, { useState, useEffect } from 'react'
export default function Posts() {
    const [post, getPost] = useState([])
    const API = 'http://ec2-18-157-180-237.eu-central-1.compute.amazonaws.com:8080/Search/GetJson/bike';
    // const API = 'https://randomuser.me/api/?results=25&page=1';
    const fetchPost = () => {
        fetch(API, {mode :'cors'})
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
                getPost(res)
            })
    }
    useEffect(() => {
        fetchPost()
    }, [])
    return (
        <>
            <h2>React Fetch Data with REST API Example</h2>
            <ul>
                {post.map((item, i) => {
                    return <li key={i}>{item.name.first}</li>
                })}
            </ul>
        </>
    )
}