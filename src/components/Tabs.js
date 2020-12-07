import React, { useState } from "react";
import styled from "styled-components/native";
const Tab = styled.View`
  flex-direction: row;
  justify-content: center;
  height: 40px;
  width: 100%;
  background-color: #ffd8d5;
  border-radius: 20px;
  overflow: hidden;
`;
const TabItem = styled.TouchableOpacity`
  border-radius: 40px;
  background-color: ${(props) => (props.active ? "#FF574B" : "#ffd8d5")};
  width: 33.33%;
  justify-content: center;
  align-items: center;
`;
const Title = styled.Text`
  font-family: Verdana;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
  color: white;
`;
const Tabs = (props) => {
  const [active, setActive] = useState(0);
  const { tabs } = props;
  return (
    <Tab>
      {tabs.map((tab) => (
        <TabItem
          onPress={() => setActive(tab.tag)}
          key={tab.name}
          active={tab.tag == active}
        >
          <Title>{tab.name}</Title>
        </TabItem>
      ))}
    </Tab>
  );
};

export default Tabs;
