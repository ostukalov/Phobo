import React from "react";
import { observer } from "mobx-react";
import i18n from "i18n";
import { facesListState } from "state/face";

export const NextButton = observer(() => {
  return (
    <button onClick={facesListState.generateNextFaces}>
      {i18n("action:next-faces")}
    </button>
  );
});

export const ResetButton = observer(() => {
  return (
    <button onClick={facesListState.generateNextFaces}>
      {i18n("action:reset")}
    </button>
  );
});
