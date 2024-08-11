import * as React from "react";
import Svg, { G, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgVector = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={127}
    height={133}
    fill="none"
    {...props}
  >
    <G filter="url(#vector_svg__a)">
      <Path
        stroke="#0E3E3E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={8.66}
        d="M60.434 119.778V66.999H81.64v52.779m-56.71 0V94.173h21.205v25.605m50.66 0V41.781H118v77.997M9 78.59l45.364-45.364 15.44 13.913 41.107-41.087m-.937 18.781 1.894-17.151a2.448 2.448 0 0 0-1.621-2.543 2.44 2.44 0 0 0-1.067-.126L92.048 6.908"
        shapeRendering="crispEdges"
      />
    </G>
    <Defs></Defs>
  </Svg>
);
export default SvgVector;
