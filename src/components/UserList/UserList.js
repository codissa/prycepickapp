import React, {  useState} from "react";
import Text from "components/Text";
import Spinner from "components/Spinner";
import CheckBox from "components/CheckBox";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import EmailIcon from '@material-ui/icons/Email';
import * as S from "./style";


const UserList = ({ users, isLoading, fetchUsers }) => {
    const localData = localStorage.getItem('favoriteUsers');
    const [favoriteUsers, setFavoriteUsers]= useState(JSON.parse(localData));
  const [hoveredUserId, setHoveredUserId] = useState();
  const [filteredUserList, setFilteredUserList]=useState([]);
  const handleMouseEnter = (index) => {
    setHoveredUserId(index);
  };
  const [checkCounter, setCheckCounter]=useState(0);
  const handleMouseLeave = () => {
    setHoveredUserId();
  };
function buildUserList(user,index){
      return(<S.User
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
          >
              <S.UserPicture src={user?.picture.large} alt="" />
              <S.UserInfo>
                  <Text size="22px" bold>
                      {user?.name.title} {user?.name.first} {user?.name.last}
                  </Text>
                  <Text size="14px">{user?.email}</Text>
                  <Text size="14px">
                      {user?.location.street.number} {user?.location.street.name}
                  </Text>
                  <Text size="14px">
                      {user?.location.city} {user?.location.country}
                  </Text>
              </S.UserInfo>
              <S.IconButtonWrapper onClick={()=>user.isFavorite===false?user.isFavorite=true:user.isFavorite=false } isVisible={(index === hoveredUserId)|| user.isFavorite===true}>
                  <IconButton >
                      <FavoriteIcon  color="error" />
                  </IconButton>
              </S.IconButtonWrapper>
              <S.IconButtonWrapper onClick={() => {navigator.clipboard.writeText(user.email)}} isVisible={(index === hoveredUserId)}>
                  <IconButton >
                      <EmailIcon  color="primary" />
                  </IconButton>
              </S.IconButtonWrapper>
          </S.User>
      )
    }
    const handleScroll = (event) => {
        const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
        if(checkCounter===0){
        if (scrollHeight - scrollTop === clientHeight) {
            fetchUsers();

        }}
    };
    function checkCountry( label, isChecked) {
        let tempList=[];
        if (isChecked) {
            setCheckCounter(checkCounter + 1);
            users.forEach((user) => {
                if (user.location.country === label) {
                    tempList.push(user);
                }
            })
            setFilteredUserList([...filteredUserList,...tempList]);
        } else {
            setCheckCounter(checkCounter - 1);
            setFilteredUserList(filteredUserList.filter((user) => user.location.country !== label));
        }
    }
    function sendToFavorites(user){
        if(user.isFavorite===true && !favoriteUsers.includes(user)){
            setFavoriteUsers([...favoriteUsers,user]);
        }
        if(user.isFavorite===false && favoriteUsers.includes(user) ){
            setFavoriteUsers(favoriteUsers.filter(current=> current!==user))
        }
        localStorage.setItem("favoriteUsers",JSON.stringify(favoriteUsers));
    }
  return (
    <S.UserList   >
      <S.Filters >
        <CheckBox onChange={checkCountry} value="BR" label="Brazil"  />
        <CheckBox onChange={checkCountry} value="AU" label="Australia" />
        <CheckBox onChange={checkCountry} value="CA" label="Canada" />
        <CheckBox onChange={checkCountry} value="DE" label="Germany" />
        <CheckBox onChange={checkCountry} value="DN" label="Denmark" />
      </S.Filters>
      <S.List onScroll={handleScroll}>
        {checkCounter===0
            ? users.map((user, index) => {
          return (buildUserList(user,index)
          );
        })
           : filteredUserList.map((user, index) => {
                return (
                    buildUserList(user,index)
                );
            })}
          {users.map(user=> sendToFavorites(user))}
        {isLoading && (
          <S.SpinnerWrapper>
            <Spinner color="primary" size="45px" thickness={6} variant="indeterminate" />
          </S.SpinnerWrapper>
        )}
      </S.List>
    </S.UserList>
  );
};

export default UserList;