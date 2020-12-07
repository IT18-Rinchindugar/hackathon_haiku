import React from "react";
import { View, ScrollView } from "react-native";
import Header from "../../../components/Header";
import Tabs from "../../../components/Tabs";
import styled from "styled-components/native";

const tabs = [
  {
    tag: 0,
    name: "Мэдээ",
  },
  { tag: 1, name: "Зөвөлгөө" },
  { tag: 2, name: "Гомдол" },
];
const MainContainer = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

const HeaderContainer = styled.ImageBackground`
  flex: 0.5;
`;
const FooterContainer = styled.View`
  flex: 1;
  background-color: white;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
  padding: 16px;
`;
const Feed = () => {
  return (
    <MainContainer>
      <HeaderContainer source={{ uri: "https://reactjs.org/logo-og.png" }}>
        <Header search={true} />
      </HeaderContainer>
      <View style={{ flex: 1, backgroundColor: "black" }}>
        <FooterContainer>
          <Tabs tabs={tabs} />
          <ScrollView></ScrollView>
        </FooterContainer>
      </View>
    </MainContainer>
  );
};

export default Feed;
