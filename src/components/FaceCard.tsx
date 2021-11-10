import React from "react";
import { observer } from "mobx-react";
import { ReactP5Wrapper } from "react-p5-wrapper";

import { sketch } from "draw";

import { Face } from "state/face";

import { Box } from "./clayout";

type Props = {
  face: Face;
};

export const FaceCard = observer(({ face }: Props) => {
  return (
    <Box gap="sm" borderColor="silver">
      <Box height={100}>
        <ReactP5Wrapper sketch={sketch} face={face.canvasData} />
      </Box>
      <Box>{face.descriptions}</Box>
    </Box>
  );
});
