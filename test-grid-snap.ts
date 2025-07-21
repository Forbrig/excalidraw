// Quick test to verify grid snap action integration
import { actionToggleGridSnap } from "./packages/excalidraw/actions/actionToggleGridSnap";
import { ActionManager } from "./packages/excalidraw/actions/manager";

console.log("Grid Snap Action Test:");
console.log("- Action name:", actionToggleGridSnap.name);
console.log("- Action label:", actionToggleGridSnap.label);
console.log("- Action icon:", actionToggleGridSnap.icon ? "✓" : "✗");
console.log("- Action keyTest:", actionToggleGridSnap.keyTest ? "✓" : "✗");
console.log("- Action perform:", actionToggleGridSnap.perform ? "✓" : "✗");
console.log("- Action checked:", actionToggleGridSnap.checked ? "✓" : "✗");

// Test the keyTest function
const mockEvent = {
  ctrlKey: true,
  metaKey: false,
  shiftKey: true,
  code: "Quote",
};

console.log(
  "- Keyboard shortcut test (Ctrl+Shift+'):",
  actionToggleGridSnap.keyTest?.(
    mockEvent as any,
    {} as any,
    [] as any,
    {} as any,
  )
    ? "✓"
    : "✗",
);

export {};
