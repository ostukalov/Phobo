import React from "react";
import { observer } from "mobx-react";
import { facesListState } from "state/face";

import { Box } from "./clayout";
import { FaceCard } from "./FaceCard";

export const FaceList = observer(() => {
  return (
    <Box row inline gap="m">
      {facesListState.items.map((face) => {
        return <FaceCard face={face} key={face.id} />;
      })}
    </Box>
  );
});
