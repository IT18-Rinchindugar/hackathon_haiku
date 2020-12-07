import React from "react";
import { Bell, Menu } from "./Icons";
import Search from "./Search";
import { Feather } from "@expo/vector-icons";
import styled from "styled-components/native";

const Container = styled.View`
  flex-direction: row;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  padding-horizontal: 12px;
`;
const IconPress = styled.TouchableOpacity``;
const Header = ({ search }) => {
  return (
    <Container>
      <IconPress>
        <Menu />
      </IconPress>
      {search && <Search />}
      <IconPress>
        <Feather color="white" size={18} name="bell" />
      </IconPress>
    </Container>
  );
};
export default Header;
