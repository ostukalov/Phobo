import React from "react";

import { Box } from "./clayout";
import { Header } from "./Header";
import { FaceList } from "./FaceList";
import { NextButton, ResetButton } from "./buttons";

export const App = () => {
  return (
    <Box gap="l">
      <Header />
      <FaceList />
      <Box row gap="sm" inline alignItems="stretch" height={50}>
        <NextButton />
        <ResetButton />
      </Box>
    </Box>
  );
};
