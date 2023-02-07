import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import './style.scss';

export default function Carousel(){
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;
    return (
        <div style={{  maxWidth:"fit-content", paddingRight:"10vw" }}>
            <ItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={4}
                gutter={50}
                leftChevron={<button>{'<'}</button>}
                rightChevron={<button>{'>'}</button>}
                outsideChevron
                chevronWidth={chevronWidth}
            >
                <div  className="CarouselElement">
                <div className="title" >Apple iPhone X Gray 256GB A1865 LTE GSM CDMA Verizon Unlocked
                <p>  228.99 USD </p>
                    <img className="image" src="https://i.ebayimg.com/thumbs/images/g/sI8AAOSwSQ5iNQ2t/s-l140.jpg" alt="Logo" /></div>
                </div>
                <div  className="CarouselElement">
                <div className="title" >
                    Sony Playstation 5 Disc Version PS5 Disc Video Game Console Japan Import
                    <p>  829.0 USD </p>
                    <img className="image" src="https://i.ebayimg.com/thumbs/images/g/IV0AAOSwb4JiLOQ5/s-l140.jpg" alt="Logo" /></div>
                </div>
                <div  className="CarouselElement">
                <div className="title" >
                    Full Suspension Mountain Bike Shimano 21 Speed Men\u0027s Bikes Bicycle MTB
                    <p>  319.0 USD </p>
                    <img className="image" src="https://i.ebayimg.com/thumbs/images/g/9HAAAOSwZ~hbFKJ4/s-l140.jpg" alt="Logo" /></div>
                </div>
                <div  className="CarouselElement">
                <div className="title" >
                    Dell OR HP Desktop PC Computer Dual C 500GB 4GB DUAL 19\" LCD WiFi Windows 10 Pro
                    <p>  189.99 USD </p>
                    <img className="image" src="https://i.ebayimg.com/thumbs/images/g/43wAAOSwRglgVCWu/s-l140.jpg" alt="Logo" /></div>
                </div>
            </ItemsCarousel>
        </div>
    );
};