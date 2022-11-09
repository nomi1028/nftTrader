import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CreateTrade from "./CreateTrade";

import { CreateTradeData } from "./opendata";
import { CloseTradedata } from "./opendata";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="" sx={{ width: "100%" }}>
      <Box mb={6} ml={-1} mr={-1}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
          width="100%"
          sx={{
            "& button": {
              fontFamily: "MuseoModerno",
              fontWeight: "bold",
            },
          }}
        >
          <Tab  label="Create Trade" {...a11yProps(0)} />
          <Tab  label="Close Trade" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {CreateTradeData.map((elem) => {
          return <CreateTrade elem={elem} />;
        })}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {CloseTradedata.map((elem) => {
          return <CreateTrade elem={elem} />;
        })}
      </TabPanel>
    </Box>
  );
}
