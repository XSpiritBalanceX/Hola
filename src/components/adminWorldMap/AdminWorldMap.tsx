import { useState } from "react";
import { Box } from "@mui/material";
import WorldMap from "react-world-map";
import { translate } from "@i18n";
import "./AdminWorldMap.scss";

interface IPartOfWorldData {
  eu: { country: string; value: number }[];
  na: { country: string; value: number }[];
  sa: { country: string; value: number }[];
  as: { country: string; value: number }[];
  af: { country: string; value: number }[];
  oc: { country: string; value: number }[];
}

const mockDataAnalytics: IPartOfWorldData = {
  eu: [
    { country: "Germany", value: 5987 },
    { country: "Netherlands", value: 5056 },
    { country: "Sweden", value: 4587 },
    { country: "Austria", value: 3587 },
    { country: "Switzerland", value: 3100 },
    { country: "Norway", value: 2287 },
    { country: "Denmark", value: 2287 },
    { country: "Italy", value: 2513 },
    { country: "Finland", value: 2315 },
    { country: "Spain", value: 1525 },
    { country: "Belgium", value: 1501 },
    { country: "France", value: 1065 },
    { country: "United Kingdom", value: 915 },
    { country: "Poland", value: 867 },
    { country: "Czech Republic", value: 765 },
    { country: "Estonia", value: 549 },
    { country: "Latvia", value: 256 },
    { country: "Lithuania", value: 123 },
  ],
  na: [
    { country: "Haiti", value: 385 },
    { country: "Dominican Republic", value: 132 },
    { country: "Canada", value: 6281 },
    { country: "Mexico", value: 8452 },
    { country: "Panama", value: 452 },
    { country: "USA", value: 7812 },
    { country: "Jamaica", value: 1274 },
  ],
  sa: [
    { country: "Argentina", value: 853 },
    { country: "Bolivia", value: 1287 },
    { country: "Venezuela", value: 1375 },
    { country: "Colombia", value: 512 },
    { country: "Peru", value: 178 },
    { country: "Uruguay", value: 7862 },
  ],
  as: [
    { country: "Azerbaijan", value: 1285 },
    { country: "Armenia", value: 1596 },
    { country: "Vietnam", value: 186 },
    { country: "Israel", value: 9657 },
    { country: "India", value: 10587 },
    { country: "Kazakhstan", value: 4128 },
    { country: "China", value: 12863 },
    { country: "South Korea", value: 1845 },
  ],
  af: [
    { country: "Algeria", value: 186 },
    { country: "Guinea", value: 86 },
    { country: "Egypt", value: 982 },
  ],
  oc: [
    { country: "Australia", value: 1563 },
    { country: "New Zealand", value: 385 },
    { country: "Fiji", value: 81 },
  ],
};

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

  const handleSelectPartOfWorld = (part: string | null) => {
    part === null && setSelectedPart("eu");
    part !== null && setSelectedPart(part);
  };

  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return (
    <Box className="analyticsByUsersContainer">
      <Box className="usersByLocationsBox">
        <p className="titleBox">{t("usersByLocations")}</p>
        <Box className="boxWithUsersLocations">
          {mockDataAnalytics[selectedPart as keyof IPartOfWorldData].length ? (
            mockDataAnalytics[selectedPart as keyof IPartOfWorldData]
              .sort((a, b) => b.value - a.value)
              .map((el, ind, arr) => (
                <Box key={ind} className="itemUserLocation">
                  <p className="nameOfCountry">{el.country}</p>
                  <Box className="containerForBar">
                    <Box
                      width={`${
                        (el.value /
                          arr.reduce((max, d) => Math.max(max, d.value), 0)) *
                        100
                      }%`}
                      className="barUsersBox"
                    />
                    <p>{formatNumber(el.value)}</p>
                  </Box>
                </Box>
              ))
          ) : (
            <p className="emptyUsers">{t("emptyData")}</p>
          )}
        </Box>
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
