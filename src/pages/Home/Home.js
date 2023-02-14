import React from "react";
import Text from "components/Text";
import UserList from "components/UserList";
import {usePeopleFetch} from "hooks";
import * as S from "./style";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Carousel from "../../components/Carousel/Carousel";
import CarouselCategories from "../../components/CarouselCategories/CarouseCategories";
import "./style.scss";
import welcome from "../../assets/welcome.png";
import HomeCard from "components/HomeCard/HomeCard";
import { HomeCardClass } from "models/HomeCardClass";
import Heart from "react-animated-heart";


// import PryceLogo from './assets/PryceLogo.jpeg';



const Home = () => {
     const items = []
     items.push(new HomeCardClass("Dali Oberon 5","","https://media-dali.azureedge.net/6267/oberon-5-dark-walnut-01.png", "175$"),
     new HomeCardClass("iphone 14 Pro","","https://www.pngmart.com/files/22/iPhone-14-PNG-File.png", "1750$"),
     new HomeCardClass("samsung tv","","https://www.pngall.com/wp-content/uploads/5/Samsung-TV-PNG-Image-HD.png", "300$"),
     new HomeCardClass("rolex submariner","","https://freepngimg.com/thumb/watch/22783-7-rolex-watch-file.png", "20000$"),
     new HomeCardClass("hp printer","","https://in-media.apjonlinecdn.com/catalog/product/c/0/c04711282.png", "50$"),
     new HomeCardClass("sony ps5","","https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21?$facebook$", "600$"))
  return (
      <div>
        <img className="welcome-image" src={welcome}/>
        <div style={{justifyContent:"center", display:"flex"}}>
          <Text size="64px" bold >
            PrycePick
          </Text>
        </div>
          {/*<UserList fetchUsers={fetchUsers()} users={users}></UserList>*/}
    <div style={{justifyContent:"center", display:"flex"}}>
        <Text size="12" bold>
          welcome to PrycePick!
        </Text>
    </div>

        <h1 className="heading"  >
          deals of the day
        </h1>
        <div className="deals-grid">

        {items.map(item=> (
            
            <HomeCard imgSrc={item.imgSrc} name={item.name} price={item.price}></HomeCard>
          ))}
        </div>
        <h1 className="heading"  >
          best selling of the day
        </h1>
        <div className="deals-grid">

        {items.map(item=> (
            
            <HomeCard imgSrc={item.imgSrc} name={item.name} price={item.price}></HomeCard>
          ))}
        </div>
        
        {/* <div className="deals">
         
          

          <div className="deals title" >Apple iPhone X Gray 256GB A1865 LTE GSM CDMA Verizon Unlocked
            <p> price 228.99 USD </p><FavoriteBorderIcon/>
            <img style={{mixBlendMode:'multiply'}} src="https://media-dali.azureedge.net/6267/oberon-5-dark-walnut-01.png" alt="Logo" />
          </div>
          <div className="deals title">
            Sony Playstation 5 Disc Version PS5 Disc Video Game Console Japan Import
            <p> price 829.0 USD </p><FavoriteBorderIcon color={'red'}/>
            <img style={{mixBlendMode:'multiply'}} src="https://i.ebayimg.com/thumbs/images/g/IV0AAOSwb4JiLOQ5/s-l140.jpg" alt="Logo" /></div>
          <div className="deals title">
            Full Suspension Mountain Bike Shimano 21 Speed Men\u0027s Bikes Bicycle MTB
            <p> price 319.0 USD </p><FavoriteBorderIcon color={'red'}/>
            <img style={{mixBlendMode:'multiply'}} src="https://i.ebayimg.com/thumbs/images/g/9HAAAOSwZ~hbFKJ4/s-l140.jpg" alt="Logo" /></div>
          <div className="deals title">
            Dell OR HP Desktop PC Computer Dual C 500GB 4GB DUAL 19\" LCD WiFi Windows 10 Pro
            <p> price 189.99 USD </p><FavoriteBorderIcon color={'red'}/>
            <img style={{mixBlendMode:'multiply'}} src="https://i.ebayimg.com/thumbs/images/g/43wAAOSwRglgVCWu/s-l140.jpg" alt="Logo" /></div>
        </div>
   
        <h1 className="heading"  >
          best selling items
        </h1>
        <div className="deals">
        <Carousel/>
        </div>
       <h1 className="heading"  >
           categories
       </h1>
       <div className="deals">
       <CarouselCategories/>
       </div> */}

      </div>

  );
};

export default Home;
