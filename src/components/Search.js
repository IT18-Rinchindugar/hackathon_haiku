import React from "react";
import { Feather } from "@expo/vector-icons";
import styled from "styled-components/native";

const SearchContainer = styled.View`
  height: 30px;
  width: 70%;
  overflow: hidden;
  padding-horizontal: 10px;
  border-radius: 15px;
  background-color: white;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const SearchInput = styled.TextInput`
  width: 85%;
`;
const Search = () => {
  return (
    <SearchContainer>
      <Feather
        name="search"
        size={18}
        color="#EDE6FF"
        style={{ paddingRight: 5 }}
      />
      <SearchInput />
    </SearchContainer>
  );
};

export default Search;
