import React from "react";

import { actionToggleRulers } from "../actions";
import { useI18n } from "../i18n";

import { useExcalidrawActionManager } from "./App";
import { rulerIcon } from "./icons";
import { ToolButton } from "./ToolButton";

export const RulerToggle = () => {
  const { t } = useI18n();
  const actionManager = useExcalidrawActionManager();

  if (!actionManager.isActionEnabled(actionToggleRulers)) {
    return null;
  }

  return (
    <ToolButton
      type="button"
      icon={rulerIcon}
      title={t("labels.toggleRulers")}
      aria-label={t("labels.toggleRulers")}
      onClick={() => actionManager.executeAction(actionToggleRulers)}
      data-testid="toggle-rulers"
      size="small"
    />
  );
};
