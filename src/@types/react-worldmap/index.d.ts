declare module "react-world-map" {
  import * as React from "react";

  export interface WorldMapProps {
    style?: React.CSSProperties;
    selected: any;
    onSelect: (country: string) => void;
  }

  const WorldMap: React.ComponentType<WorldMapProps>;
  export default WorldMap;
}
