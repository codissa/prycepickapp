import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import "./style.scss";
import {Routes, Route, useNavigate} from 'react-router-dom';

export default function CarouselCategories(){
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;
    let navigate = useNavigate();
    const routeChange = () =>{
        let path = `/search/`+query ;
        navigate(path);
        window.location.reload();
    }
    return (
        <div style={{  maxWidth:"fit-content", paddingRight:"10vw"  }}>
            <ItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={4}
                gutter={50}
                leftChevron={<button>{'<'}</button>}
                rightChevron={<button>{'>'}</button>}
                outsideChevron
                chevronWidth={chevronWidth}

            ><div  className="CarouselElement">
                <div  className="title" >Iphone

                 <a href="http://localhost:3000/PrycePick#/search/iphone" >
                     <img className="image"  src="https://i.ebayimg.com/thumbs/images/g/sI8AAOSwSQ5iNQ2t/s-l140.jpg" alt="Logo" />
                 </a>
                </div>
            </div>
                <div  className="CarouselElement">
                    <div className="title" >
                        kitchen
                        <a href="http://localhost:3000/PrycePick#/search/blender">
                        <img  className="image" src="https://cdn.shopify.com/s/files/1/0291/6427/3757/products/57001_Blender_2000x2000_442ab931-586e-4bad-8954-f8781dbabcb0_1949x.jpg?v=1637279861" alt="Logo" />
                        </a>
                        </div>
                    </div>
                <div  className="CarouselElement">
                <div className="title" >
                    Console
                    <a href="http://localhost:3000/PrycePick#/search/console">
                    <img className="image" src="https://i.ebayimg.com/thumbs/images/g/IV0AAOSwb4JiLOQ5/s-l140.jpg" alt="Logo" />
                    </a>
                    </div>

                </div>
                <div  className="CarouselElement">
                <div className="title" >
                    sports
                    <a href="http://localhost:3000/PrycePick#/search/bike">
                    <img className="image" src="https://i.ebayimg.com/thumbs/images/g/9HAAAOSwZ~hbFKJ4/s-l140.jpg" alt="Logo" />
                    </a>
                    </div>
                </div>
                <div  className="CarouselElement">
                <div className="title" >
                    PC
                    <a href="http://localhost:3000/PrycePick#/search/laptop">
                    <img className="image" src="https://i.ebayimg.com/thumbs/images/g/43wAAOSwRglgVCWu/s-l140.jpg" alt="Logo" />
                    </a>
                    </div>
                </div>

            </ItemsCarousel>
        </div>
    );
};