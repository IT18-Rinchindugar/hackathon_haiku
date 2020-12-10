import React from "react";
import styled from "styled-components/native";
import FeedbackItem from "./FeedbackItem";
const Container = styled.View`
  flex: 1;
`;
const SearchContainer = styled.View`
  width: 96%;
  height: 54px;
  background-color: #fff;
  border-radius: 24px;
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding-horizontal: 20px;
  margin: 8px;
`;
const SearchCircle = styled.View`
  height: 35px;
  width: 35px;
  border-radius: 20px;
  border-width: 0.3px;
  border-color: grey;
`;
const SearchInput = styled.TextInput`
  margin-left: 15px;
  height: 35px;
  width: 82%;
  border-radius: 20px;
  border-width: 0.3px;
  border-color: grey;
  padding-horizontal: 20px;
`;

const FeedbackItemContainer = styled.View`
  flex: 1;
  flex-direction: column;
`;

const feedbacks = [{ tag: 1 }, { tag: 2 }];

const Feedback = () => {
  return (
    <Container>
      <SearchContainer
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.3,
          shadowRadius: 4.65,

          elevation: 8,
        }}
      >
        <SearchCircle />
        <SearchInput placeholder="Танд тулгамдаж буй асуудал" />
      </SearchContainer>
      <FeedbackItemContainer>
        {feedbacks.map((feedback) => (
          <FeedbackItem feedback={feedback.tag} />
        ))}
      </FeedbackItemContainer>
    </Container>
  );
};

export default Feedback;
