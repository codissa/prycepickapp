import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';

export default function Carousel(){
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;
    return (
        <div style={{ padding: `0 ${chevronWidth}px` }}>
            <ItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={3}
                gutter={50}
                leftChevron={<button>{'<'}</button>}
                rightChevron={<button>{'>'}</button>}
                outsideChevron
                chevronWidth={chevronWidth}
            >
                <div style={{ height: 200, background: '#ffffff' }}>Apple iPhone X Gray 256GB A1865 LTE GSM CDMA Verizon Unlocked
                <p> price 228.99 USD </p>
                    <img src="https://i.ebayimg.com/thumbs/images/g/sI8AAOSwSQ5iNQ2t/s-l140.jpg" alt="Logo" /></div>
                <div style={{ height: 200, background: '#ffffff' }}>Second card
                    Sony Playstation 5 Disc Version PS5 Disc Video Game Console Japan Import
                    <p> price 829.0 USD </p>
                    <img src="https://i.ebayimg.com/thumbs/images/g/IV0AAOSwb4JiLOQ5/s-l140.jpg" alt="Logo" /></div>
                <div style={{ height: 200, background: '#ffffff' }}>Third card
                    Full Suspension Mountain Bike Shimano 21 Speed Men\u0027s Bikes Bicycle MTB
                    <p> price 319.0 USD </p>
                    <img src="https://i.ebayimg.com/thumbs/images/g/9HAAAOSwZ~hbFKJ4/s-l140.jpg" alt="Logo" /></div>
                <div style={{ height: 200, background: '#ffffff' }}>Fourth card
                    Dell OR HP Desktop PC Computer Dual C 500GB 4GB DUAL 19\" LCD WiFi Windows 10 Pro
                    <p> price 189.99 USD </p>
                    <img src="https://i.ebayimg.com/thumbs/images/g/43wAAOSwRglgVCWu/s-l140.jpg" alt="Logo" /></div>
            </ItemsCarousel>
        </div>
    );
};