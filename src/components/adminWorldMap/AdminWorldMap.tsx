import { useState } from "react";
import { Box } from "@mui/material";
import WorldMap from "react-world-map";
import "./AdminWorldMap.scss";

const AdminWorldMap = () => {
  const [selectedPart, setSelectedPart] = useState("eu");

  const handleSelectPartOfWorld = (part: string) => {
    setSelectedPart(part);
  };

  return (
    <Box>
      <WorldMap selected={selectedPart} onSelect={handleSelectPartOfWorld} />
    </Box>
  );
};

export default AdminWorldMap;
