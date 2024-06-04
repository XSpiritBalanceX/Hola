import { useState } from "react";
import { Box } from "@mui/material";
import WorldMap from "react-world-map";
import { translate } from "@i18n";
import "./AdminWorldMap.scss";

const AdminWorldMap = () => {
  const { t } = translate("translate", { keyPrefix: "adminAnalyticsPage" });

  const namePartOfWorld = [
    { part: "na", label: "northAmerica" },
    { part: "sa", label: "southAmerica" },
    { part: "eu", label: "europe" },
    { part: "as", label: "asia" },
    { part: "af", label: "africa" },
    { part: "oc", label: "australia" },
  ];

  const [selectedPart, setSelectedPart] = useState("eu");

  const handleSelectPartOfWorld = (part: string) => {
    setSelectedPart(part);
  };

  return (
    <Box className="analyticsByUsersContainer">
      <Box className="usersByLocationsBox">
        <p className="titleBox">{t("usersByLocations")}</p>
      </Box>
      <Box className="worldMapContainer">
        {namePartOfWorld.map((el, ind) => (
          <p
            key={ind}
            className={`nameOfPart part_${el.label} ${
              el.part === selectedPart ? "selectedPart" : ""
            }`}
          >
            {t(el.label)}
          </p>
        ))}
        <WorldMap selected={selectedPart} onSelect={handleSelectPartOfWorld} />
      </Box>
    </Box>
  );
};

export default AdminWorldMap;
