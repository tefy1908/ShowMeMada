import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import NavBar from "../Components/TourNavBar";

const Tours = () => {
  // onglets: 0-tour, 1-hotel, 2-transport
  const [tab, setTab] = useState(0);
  return (
    <Box>
      {" "}
      <NavBar tab={tab} setTab={setTab} />
    </Box>
  );
};

export default Tours;
