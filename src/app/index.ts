import { RawFace } from "types/face";

export const generateNextFaces = (): RawFace[] => {
  return [...Array(4)].map(() => ({
    canvasData: {
      vector: [...Array(3)].map(() => Math.floor(Math.random() * 11))
    },
    descriptions: Math.random().toString(36).substr(2, 9)
  }));
};
