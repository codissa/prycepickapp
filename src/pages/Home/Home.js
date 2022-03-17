import React from "react";
import Text from "components/Text";
import UserList from "components/UserList";
import {usePeopleFetch} from "hooks";
import * as S from "./style";
// import PryceLogo from './assets/PryceLogo.jpeg';



const Home = () => {
  const { users, isLoading, fetchUsers } = usePeopleFetch();
  return (
    <S.Home >
      <S.Content >
        <S.Header >
          {/*<img src={PryceLogo}/>*/}
          <Text size="64px" bold >
            PrycePick
          </Text>
        </S.Header>
        <Text size="12" bold>
          welcome to PrycePick!
        </Text>
      </S.Content>
    </S.Home>
  );
};

export default Home;
