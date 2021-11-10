import P5 from "p5";
import { P5Instance } from "react-p5-wrapper";
import { CanvasData } from "types/face";

export default class MyCircle {
  _p5: P5;
  _pos: P5.Vector;
  _size: number;

  constructor(p5: P5Instance, atPosition: P5.Vector, size: number, state) {
    this._p5 = p5;
    this._pos = atPosition;
    this._size = size;
    this.state = state;
  }

  draw() {
    const p5 = this._p5; // just for convenience

    p5.push();

    p5.translate(this._pos.add(this.state.shift));
    p5.noStroke();
    p5.fill("orange");
    p5.ellipse(0, 0, this._size);

    p5.pop();
  }
}

export const sketch = (p5: P5Instance) => {
  // Creating the sketch itself
  // DEMO: Prepare an array of MyCircle instances
  const myCircles: MyCircle[] = [];
  const state = { shift: p5.createVector(0, 0) };

  // The sketch setup method
  p5.setup = () => {
    // Creating and positioning the canvas
    p5.createCanvas(200, 200);

    // Configuring the canvas
    p5.background("white");

    p5.noLoop();

    // DEMO: Create three circles in the center of the canvas
    for (let i = 1; i < 4; i++) {
      const p = p5.width / 4;
      const circlePos = p5.createVector(p * i, p5.height / 2);
      const size = i % 2 !== 0 ? 24 : 32;
      myCircles.push(new MyCircle(p5, circlePos, size, state));
    }
  };

  // The sketch draw method
  p5.draw = () => {
    // DEMO: Let the circle instances draw themselves
    myCircles.forEach((circle) => circle.draw());
  };

  p5.updateWithProps = ({ face }: { face: CanvasData }) => {
    p5.redraw();
    if (!face) return;
    state.shift = p5.createVector(...face.vector);
  };
};
