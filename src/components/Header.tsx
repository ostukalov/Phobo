import React from "react";
import { observer } from "mobx-react";
import i18n from "i18n";

import { globalState } from "state/global";

import { Box, Text } from "./clayout";

export const Header = observer(() => {
  return (
    <Box>
      <Text heading={2}>
        {i18n(`heading:title.${globalState.status}`, { x: "22" })}
      </Text>
      <Text heading={3}>
        {i18n(`heading:desctioption.${globalState.status}`)}
      </Text>
    </Box>
  );
});
