import React from "react";
import styled from "styled-components/native";

const AlertContainer = styled.View`
  height: 88px;
  border-radius: 15px;
  padding: 14px;
`;
const AlertContent = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Title = styled.Text`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  text-align: left;
  color: #fff;
`;
const AlertCard = (props) => {
  const { color, title, width, count } = props;
  return (
    <AlertContainer style={{ backgroundColor: color, width: width }}>
      <AlertContent>
        <Title>{title}</Title>
        <Title style={{ fontWeight: "700", marginTop: 16 }}>{count}</Title>
      </AlertContent>
    </AlertContainer>
  );
};

export default AlertCard;
