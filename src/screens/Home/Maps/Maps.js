import React, { useState, useRef } from "react";
import CustomerLocation from "./CustomerLocation";
import styled from "styled-components/native";
import { LineChart } from "react-native-chart-kit";
import data from "../../../utils/map.json";
const chartConfig = {
  backgroundColor: "#FFF",
  backgroundGradientFrom: "#FFF",
  backgroundGradientTo: "#FFF",
  color: (opacity = 0) => `rgba(255,0,0, ${opacity})`,
  labelColor: (opacity = 0) => `rgba(0,0,0, ${opacity})`,
  style: {
    borderRadius: 16,
  },
  propsForDots: {
    r: "4",
    strokeWidth: "1",
    stroke: "red",
  },
};

const Container = styled.SafeAreaView`
  flex: 1;
`;

const MapContainer = styled.View`
  flex: 1;
`;

const GraphContainer = styled.View`
  position: absolute;
  justify-content: center;
  align-items: center;
  bottom: 0;
  height: 250px;
  width: 100%;
  background-color: #fff;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
`;

const GraphItems = styled.View`
  flex: 1;
  flex-direction: column;
  height: 180px;
  justify-content: center;
`;
const GraphDescription = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-horizontal: 14px;
`;
const GraphText = styled.Text``;
const Maps = () => {
  const [activeItem, setActiveItem] = useState(data[0]);
  return (
    <Container>
      <MapContainer>
        <CustomerLocation
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />
      </MapContainer>
      <GraphContainer>
        <GraphItems>
          <GraphDescription>
            <GraphText>{activeItem.name}( нягтрал )</GraphText>
            <GraphText>2020-12-10</GraphText>
          </GraphDescription>
          <LineChart
            data={activeItem.graphData}
            width={300}
            height={180}
            chartConfig={chartConfig}
            bezier
            style={{
              marginVertical: 10,
              marginLeft: 12,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              borderRadius: 16,
              elevation: 5,
            }}
          />
        </GraphItems>
      </GraphContainer>
    </Container>
  );
};
export default Maps;
