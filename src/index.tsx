import React from "react";
import { render } from "react-dom";
import { App } from "./components/App";

import { facesListState } from "state/face";

render(<App />, document.getElementById("app"));

facesListState.generateNextFaces();
