import { makeObservable, observable, action } from "mobx";
import { RawFace, CanvasData } from "types/face";
import { generateNextFaces } from "app";

export class Face {
  id: string;
  canvasData: CanvasData = { vector: [] };

  descriptions: string = "";

  constructor({ id, canvasData, descriptions }: { id: string } & RawFace) {
    makeObservable(this, {
      canvasData: observable,
      descriptions: observable
    });

    this.id = id;
    this.canvasData = canvasData;
    this.descriptions = descriptions;
  }
}

const prepareRawFaces = (faces: RawFace[]) => {
  return faces.map((face, i) => new Face({ id: String(i), ...face }));
};

export class FacesList {
  items: Face[] = [];

  constructor(faces: RawFace[] = []) {
    makeObservable(this, {
      items: observable,
      generateNextFaces: action
    });
  }

  generateNextFaces = () => {
    this.items = prepareRawFaces(generateNextFaces());
  };
}

export const facesListState = new FacesList();
