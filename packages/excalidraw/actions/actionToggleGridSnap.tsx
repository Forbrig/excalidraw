import { CODES, KEYS } from "@excalidraw/common";

import { CaptureUpdateAction } from "@excalidraw/element";

import { gridIcon } from "../components/icons";

import { register } from "./register";

import type { AppState } from "../types";

export const actionToggleGridSnap = register({
  name: "toggleGridSnap",
  icon: gridIcon,
  keywords: ["snap", "grid", "10px"],
  label: "labels.toggleGridSnap",
  viewMode: true,
  trackEvent: {
    category: "canvas",
    predicate: (appState) => appState.gridSnapEnabled,
  },
  perform(elements, appState) {
    return {
      appState: {
        ...appState,
        gridSnapEnabled: !this.checked!(appState),
      },
      captureUpdate: CaptureUpdateAction.EVENTUALLY,
    };
  },
  checked: (appState: AppState) => appState.gridSnapEnabled,
  predicate: (element, appState, props) => {
    return props.gridSnapEnabled === undefined;
  },
  keyTest: (event) =>
    event[KEYS.CTRL_OR_CMD] && event.shiftKey && event.code === CODES.QUOTE,
});
