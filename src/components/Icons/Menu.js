import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
function Menu() {
  return (
    <Svg
      width={30}
      height={30}
      style={{ marginTop: 5 }}
      viewBox="0 0 27 23"
      fill="none"
    >
      <G filter="url(#prefix__filter0_d)">
        <Path
          d="M6 14h9.3v-1.833H6V14zm0-4.583h14.53V7.583H6v1.834zM11.279 3v1.833h9.25V3h-9.25z"
          fill="#fff"
        />
      </G>
    </Svg>
  );
}

export default Menu;
