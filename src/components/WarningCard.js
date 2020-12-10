import React from "react";
import styled from "styled-components/native";

const WarningItem = styled.TouchableOpacity`
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 120px;
  width: 160px;
  border-radius: 25px;
  margin-right: 10px;
  margin-bottom: 10px;
  background-color: #f2f2f2;
`;
const WarningImage = styled.Image`
  height: 70%;
  width: 100%;
  border-radius: 25px;
`;
const WarningText = styled.Text`
  font-family: Verdana;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  text-align: left;
  margin-top: 6px;
  color: red;
`;
const WarningCard = ({ grid }) => {
  return (
    <WarningItem>
      <WarningImage source={require("../../assets/bg.png")} />
      <WarningText>Гараа угаагаарай</WarningText>
    </WarningItem>
  );
};
export default WarningCard;
