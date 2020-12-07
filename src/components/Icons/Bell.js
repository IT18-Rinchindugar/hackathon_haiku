import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
function Bell() {
  return (
    <Svg
      width={30}
      height={30}
      style={{ marginTop: 5 }}
      viewBox="0 0 24 25"
      fill="none"
    >
      <G filter="url(#prefix__filter0_d)">
        <Path
          d="M11.709 16a1.386 1.386 0 001.427-1.333h-2.854A1.387 1.387 0 0011.709 16zm4.282-4V8.667A4.092 4.092 0 0012.78 4.45V4a1.073 1.073 0 00-2.141 0v.45a4.094 4.094 0 00-3.212 4.217V12L6 13.333V14h11.418v-.667L15.991 12zm-1.427.667H8.855v-4a2.858 2.858 0 115.709 0v4z"
          fill="#fff"
        />
      </G>
    </Svg>
  );
}

export default Bell;
