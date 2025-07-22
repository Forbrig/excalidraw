import { CODES, KEYS } from "@excalidraw/common";

import { CaptureUpdateAction } from "@excalidraw/element";

import { rulerIcon } from "../components/icons";

import { register } from "./register";

import type { AppState } from "../types";

export const actionToggleRulers = register({
  name: "toggleRulers",
  icon: rulerIcon,
  keywords: ["rulers", "measure"],
  label: "labels.toggleRulers",
  viewMode: true,
  trackEvent: {
    category: "canvas",
    predicate: (appState) => appState.rulersEnabled,
  },
  perform(elements, appState) {
    return {
      appState: {
        ...appState,
        rulersEnabled: !this.checked!(appState),
      },
      captureUpdate: CaptureUpdateAction.EVENTUALLY,
    };
  },
  checked: (appState: AppState) => appState.rulersEnabled,
  predicate: (element, appState, props) => {
    return props.rulersEnabled !== false;
  },
  keyTest: (event) =>
    event[KEYS.CTRL_OR_CMD] && event.altKey && event.code === CODES.R,
});
