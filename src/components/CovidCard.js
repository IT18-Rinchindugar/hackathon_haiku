import React from "react";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

const CardContainer = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 130px;
  background-color: #fff;
  border-radius: 25px;
  margin-horizontal: 4px;
  margin-vertical: 6px;
`;
const CardImage = styled.Image`
  height: 130px;
  width: 40%;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
`;

const CardContent = styled.View`
  width: 60%;
  height: 100%;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #fff;
  padding: 10px;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
`;
const CategoryTitle = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const CategoryText = styled.Text`
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px;
  text-align: left;
  color: black;
`;
const CustomerName = styled.Text`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
  color: black;
`;
const Desciption = styled.Text`
  height: 55px;
  width: 95%;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  text-align: left;
  margin-vertical: 10px;
  color: black;
`;
const LoadIcon = styled.TouchableOpacity`
  position: relative;
  top: -15px;
  left: 150px;
  width: 20px;
  height: 20px;
  background-color: #e6e6e6;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;
const CovidCard = () => {
  return (
    <CardContainer
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
      }}
    >
      <CardImage source={require("../../assets/bg.png")} />
      <CardContent>
        <CustomerName>Батжаргал</CustomerName>
        <CategoryTitle>
          <Feather
            size={12}
            color="black"
            name="bell"
            style={{ top: 1, marginRight: 5 }}
          />
          <CategoryText>уурхайчин</CategoryText>
        </CategoryTitle>
        <Desciption>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor Lorem ipsum dolor sit amet, consetetur sadipscing
          elitr, sed diam nonumy eirmod tempor
        </Desciption>
        <LoadIcon>
          <Feather
            size={12}
            color="#000"
            name="chevron-down"
            style={{ top: 1 }}
          />
        </LoadIcon>
      </CardContent>
    </CardContainer>
  );
};

export default CovidCard;
