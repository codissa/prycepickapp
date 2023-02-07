import React, { useEffect, useState } from "react";
import Text from "components/Text";
import FavoriteUserList from "../../components/FavoriteUserList";
import * as S from "./style";
import Posts from "../../hooks/fetchdata";
import { Routes, Route, useParams } from "react-router-dom";
import Pagination from '@mui/material/Pagination';
import { usePeopleFetch } from "hooks";
import { Slider } from '@mui/material';


const Favorites = () => {
  const [begin, setBegin]= useState(0);
  const [end, setEnd]= useState(16);
const{query} = useParams();
const[resLen, setResLen] = useState(0);
const getLength = num=>{
setResLen(num)
}
const [items,setItems]=useState()
useEffect(()=>{
  console.log("Component is first mounted or re-mounted");
  console.warn(<Posts query={query} begin={begin} end={end} getLength={getLength}></Posts>)
  setItems(<Posts query={query} begin={begin} end={end} getLength={getLength}></Posts>)
  console.log(query)
  console.log(items)
  console.log("fetched")
},[query, begin, end])


const handleChange = (event,num) =>{
  setBegin((num-1)*16)
  setEnd(num*16)
  console.log(num)
}
console.log(resLen)
  return (
      <S.Content>
        <S.Header>
          <Text size="20px" bold>
            search results
          </Text>
        </S.Header>
        <div className="result-page">
          <div className="filters">
            price
            <Slider   defaultValue={80}
  step={10}
  valueLabelDisplay="auto"></Slider>
          </div>
        {items}
        </div>
        <Pagination count={(Math.floor(resLen/ 25) )} color="primary" onChange={handleChange} />
      </S.Content>
  );
};

export default Favorites;