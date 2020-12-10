import React, { useState } from "react";
import styled from "styled-components/native";
import chatbot from "../../../utils/chatbot.json";
import { Feather } from "@expo/vector-icons";
const steps = [
  {
    id: "0",
    message: "Welcome to react chatbot!",
    trigger: "1",
  },
  {
    id: "1",
    message: "Bye!",
    end: true,
  },
];

const ChatBotContainer = styled.SafeAreaView`
  flex: 1;
`;

const ChatBotInput = styled.TextInput`
  height: 40px;
  width: 85%;
  background-color: #fff;
  border-radius: 25px;
  padding: 10px;
`;
const ChatbotSend = styled.TouchableOpacity`
  height: 40px;
  width: 40px;
  margin-left: 10px;
  border-radius: 20px;
  border-color: grey;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;
const HeaderContainer = styled.View`
  position: relative;
  height: 120px;
  width: 100%;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
`;
const FooterContainer = styled.View`
  position: absolute;
  bottom: 0px;
  height: 90px;
  width: 100%;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  justify-content: center;
  align-items: center;
  background-color: #d2e6ff;
  padding-horizontal: 20px;
`;
const ContentContainer = styled.View`
  flex: 1;
`;
const ChatbotMessage = styled.ScrollView`
  margin-bottom: 95px;
`;
const QuizContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: ${(props) => (props.bot ? "flex-start" : "flex-end")};
`;
const ChatBotHeaderImage = styled.Image`
  height: 120px;
  width: 100%;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
`;
const QuizChat = styled.View`
  width: 200px;
  margin-horizontal: 20px;
  margin-top: 15px;
  background-color: ${(props) => (props.bot ? "#99d6ff" : "#d9b3ff")};
  border-top-left-radius: ${(props) => (props.bot ? "0px" : "10px")};
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: ${(props) => (props.bot ? "10px" : "0px")};
`;
const AnswerChat = styled.Text`
  padding: 10px;
`;
const ChoiceContainer = styled.View`
  flex: 1;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Choice = styled.TouchableOpacity`
  background-color: #ff9999;
  border-radius: 20px;
  margin-right: 5px;
`;
const ChoiceAnswer = styled.View`
  flex: 1;
  position: absolute;
  top: -50px;
  flex-direction: row;
`;
const ChoiceText = styled.Text`
  padding-vertical: 10px;
  padding-horizontal: 20px;
  color: #fff;
`;
const Chatbot = () => {
  const [choice, setChoice] = useState(chatbot[0].chatbotScheme[1].choice);
  return (
    <ChatBotContainer>
      <ContentContainer>
        <HeaderContainer>
          <ChatBotHeaderImage source={require("../../../../assets/bg.png")} />
        </HeaderContainer>
        <ChatbotMessage>
          {chatbot[0].chatbotScheme.map((data) => {
            return (
              <QuizContainer key={data.id} bot={true}>
                <QuizChat bot={true}>
                  <AnswerChat>{data.text}</AnswerChat>
                </QuizChat>
              </QuizContainer>
            );
          })}
          {choice.map((c) => (
            <QuizContainer key={c.id} bot={true}>
              <QuizChat bot={true}>
                <AnswerChat>{c.text}</AnswerChat>
              </QuizChat>
            </QuizContainer>
          ))}
        </ChatbotMessage>
        <FooterContainer>
          <ChoiceAnswer>
            {choice &&
              choice[0].choiceData.map((c) => (
                <Choice onPress={() => console.log(c)}>
                  <ChoiceText>{c.text}</ChoiceText>
                </Choice>
              ))}
          </ChoiceAnswer>
          <ChoiceContainer>
            <ChatBotInput placeholder="Бичих" />
            <ChatbotSend>
              <Feather color="#99d6ff" name="send" size={25} />
            </ChatbotSend>
          </ChoiceContainer>
        </FooterContainer>
      </ContentContainer>
    </ChatBotContainer>
  );
};

export default Chatbot;
