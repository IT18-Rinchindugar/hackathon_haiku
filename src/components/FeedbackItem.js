import React, { useState } from "react";
import styled from "styled-components/native";
import ReadMore from "react-native-read-more-text";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import Modal from "react-native-modal";

const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 170px;
  width: 96%;
  background-color: #fff;
  padding: 10px;
  border-radius: 20px;
  margin: 8px;
`;

const FeedbackImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 24px;
`;
const FeedbackImageAll = styled.View`
  width: 38%;
  height: 100%;
  border-radius: 24px;
`;
const CircleImage = styled.Image`
  position: relative;
  height: 35px;
  width: 35px;
  top: -45px;
  left: 10px;
  border-radius: 20px;
  border-width: 1px;
  border-color: #fff;
`;
const FeedbackContent = styled.View`
  flex: 1;
  flex-direction: column;
  width: 60%;
  height: 100%;
  padding: 10px;
`;

const Title = styled.Text`
  height: 30%;
  width: 94%;
  font-family: Verdana;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 15px;
  text-align: left;
`;

const Description = styled.Text`
  height: 50%;
  font-family: Arial;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  text-align: left;
`;
const GroupIcon = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Icon = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const IconCount = styled.Text`
  padding-left: 3px;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px;
  text-align: left;
  color: #f1948a;
`;
const ModalTitle = styled.Text`
  height: 40px;
  margin-top: 10px;
  font-family: Verdana;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  text-align: left;
`;
const CloseButton = styled.TouchableOpacity`
  position: relative;
  top: -10px;
  right: -260px;
  height: 30px;
  width: 30px;
  background-color: #e6e6e6;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
`;
const ModalImage = styled.Image`
  width: 100%;
  height: 140px;
  border-radius: 24px;
`;
const ModalIcons = styled.View`
  flex: 1;
  height: 50px;
  flex-direction: row;
`;
const ModalCircleImage = styled.Image`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  border-width: 1px;
  border-color: #fff;
`;
const UserDetail = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 6px;
`;

const DetaultText = styled.Text`
  font-family: Arial;
  margin-top: 4px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
`;
const UserIcon = styled.View`
  flex: 1;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;
const ModalText = styled.Text``;
const ModalContainer = styled.View``;
const ModalGroupIcon = styled.View`
  flex: 1;
  flex-direction: row;
  margin-top: 20px;
  justify-content: space-between;
  align-items: center;
`;
const FeedbackItem = ({ feedback }) => {
  const [modelVisible, setModelVisible] = useState(false);
  const [comVisible, setComVisible] = useState(false);
  const renderTruncatedFooter = () => {
    return (
      <Text
        style={{
          color: "#000",
          textAlign: "right",
          fontSize: 12,
          marginTop: 2,
        }}
        onPress={() => setModelVisible(true)}
      >
        Read more
      </Text>
    );
  };
  return (
    <Container
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
      <FeedbackImageAll>
        <FeedbackImage
          resizeMode="stretch"
          source={require("../../assets/default.jpg")}
        />
        <CircleImage source={require("../../assets/bg.png")} />
      </FeedbackImageAll>
      <FeedbackContent>
        <Title>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr consetetur
          sadipscing elitr,
        </Title>
        <ReadMore
          numberOfLines={4}
          renderTruncatedFooter={renderTruncatedFooter}
        >
          <Description>
            Lorem ipsum dolor sit amet, consetetur sadipscing elit r, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua . At vero eos et accusam et justo duo
            dolores et ea rebum.
          </Description>
        </ReadMore>
        <GroupIcon>
          <Icon>
            <Feather name="heart" size={14} color="#000" />
            <IconCount>1,6K</IconCount>
          </Icon>
          <Icon>
            <Feather name="message-circle" size={14} color="#000" />
            <IconCount>60K</IconCount>
          </Icon>
          <Icon>
            <MaterialCommunityIcons
              name="share-outline"
              size={14}
              color="#000"
            />
            <IconCount>16</IconCount>
          </Icon>
        </GroupIcon>
      </FeedbackContent>
      <ModalContainer>
        <Modal
          isVisible={modelVisible}
          animationIn={"zoomInDown"}
          animationOut={"zoomOutUp"}
          animationInTiming={1000}
          animationOutTiming={1000}
          backdropTransitionInTiming={1000}
          backdropTransitionOutTiming={1000}
          style={{ marginBottom: 5 }}
        >
          <View
            style={{
              flex: 0.9,
              backgroundColor: "#fff",
              borderRadius: 35,
              padding: 25,
            }}
          >
            <CloseButton onPress={() => setModelVisible(false)}>
              <Feather color="#000" name="x" size={16} />
            </CloseButton>
            <ScrollView style={{ width: "100%" }}>
              <ModalImage source={require("../../assets/bg.png")} />
              <ModalTitle>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                consetetur sadipscing elitr,
              </ModalTitle>
              <ModalIcons>
                <ModalCircleImage source={require("../../assets/bg.png")} />
                <UserDetail>
                  <DetaultText>О. Ринчиндугар</DetaultText>
                  <UserIcon>
                    <View style={{ flexDirection: "row" }}>
                      <Feather
                        color="#000"
                        name="heart"
                        size={14}
                        style={{ paddingRight: 5 }}
                      />
                      <Description>барилгачин</Description>
                    </View>
                    <Description>11min ago</Description>
                  </UserIcon>
                </UserDetail>
              </ModalIcons>
              <ModalText>
                Lorem ipsum dolor sit amet, consetetur sadipscing elit r, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua . At vero eos et accusam et
                justo duo dolores et ea rebum.
              </ModalText>
              <ModalGroupIcon>
                <Icon>
                  <Feather name="heart" size={18} color="#000" />
                  <IconCount>1,6K</IconCount>
                </Icon>
                <Icon onPress={() => console.log("Bna")}>
                  <Feather name="message-circle" size={18} color="#000" />
                  <IconCount>60K</IconCount>
                </Icon>
                <Icon>
                  <MaterialCommunityIcons
                    name="share-outline"
                    size={18}
                    color="#000"
                  />
                  <IconCount>16</IconCount>
                </Icon>
              </ModalGroupIcon>
            </ScrollView>
          </View>
        </Modal>
      </ModalContainer>
    </Container>
  );
};

export default FeedbackItem;
