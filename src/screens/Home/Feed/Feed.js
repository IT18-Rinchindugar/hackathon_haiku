import React, { useState } from "react";
import { View, ScrollView, FlatList } from "react-native";
import {
  Tabs,
  CovidCard,
  Header,
  WarningCard,
  AlertCard,
  Feedback,
} from "../../../components";
import styled from "styled-components/native";

const tabs = [
  {
    tag: 0,
    name: "Мэдээ",
  },
  { tag: 1, name: "Зөвөлгөө" },
  { tag: 2, name: "Санал хүсэлт" },
];
const MainContainer = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

const HeaderContainer = styled.ImageBackground`
  flex: 0.56;
`;
const FooterContainer = styled.View`
  flex: 1;
  background-color: white;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
  padding-horizontal: 16px;
  padding-top: 16px;
`;

const Warning = styled.ScrollView`
  margin-vertical: 5px;
  height: 130px;
`;
const Title = styled.Text`
  margin-vertical: 10px;
  font-family: Verdana;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
  color: #000;
`;
const AlertScroll = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-vertical: 5px;
`;
const Feed = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].tag);
  return (
    <MainContainer>
      <HeaderContainer
        resizeMode="center"
        source={require("../../../../assets/bg.png")}
      >
        <Header search={true} />
      </HeaderContainer>
      <View style={{ flex: 1, backgroundColor: "#DED2FF" }}>
        <FooterContainer>
          <Tabs setActiveTab={setActiveTab} tabs={tabs} />
          <ScrollView
            style={{ marginTop: 20 }}
            showsVerticalScrollIndicator={false}
          >
            {activeTab === tabs[0].tag && (
              <>
                <AlertScroll>
                  <AlertCard
                    width={181}
                    color="#4CB5FF"
                    title="Нийт халдвар"
                    count={800}
                  />
                  <AlertCard
                    width={155}
                    color="#4CD97B"
                    title="Эдгэрсэн"
                    count={350}
                  />
                </AlertScroll>
                <AlertScroll>
                  <AlertCard
                    width={140}
                    color="#FF5959"
                    title="Нас барсан "
                    count={0}
                  />
                  <AlertCard
                    width={195}
                    color="#9059FF"
                    title="Эмчилэгдэж байгаа"
                    count={350}
                  />
                </AlertScroll>
                <Title>Урьдчилсан сэргийлэх </Title>
                <Warning horizontal showsHorizontalScrollIndicator={false}>
                  <WarningCard />
                  <WarningCard />
                  <WarningCard />
                </Warning>
                <Title>Мэдээ мэдээлэл </Title>
                <CovidCard />
                <CovidCard />
                <CovidCard />
              </>
            )}
            {activeTab === tabs[2].tag && <Feedback />}
            {activeTab === tabs[1].tag && (
              <FlatList
                data={tabs}
                numColumns={2}
                keyExtractor={(data) => data.tag}
                renderItem={() => {
                  return <WarningCard grid={true} />;
                }}
              />
            )}
          </ScrollView>
        </FooterContainer>
      </View>
    </MainContainer>
  );
};
export default Feed;
