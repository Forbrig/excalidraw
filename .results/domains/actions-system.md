# Actions System Domain Analysis

## Overview

The actions system provides a structured way to handle user interactions and state mutations in Excalidraw. All state changes flow through actions that maintain immutability, support undo/redo, and integrate with keyboard shortcuts.

## Action Architecture

### Action Definition Structure

Actions follow a standardized structure with type safety:

```tsx
import type { Action, ActionResult } from "./types";

const executeHistoryAction = (
  app: AppClassProperties,
  appState: Readonly<AppState>,
  updater: () => [SceneElementsMap, AppState] | void,
): ActionResult => {
  // Action implementation with validation
  // Returns updated state or capture instructions
};
```

### Action Result Pattern

Actions return structured results indicating state changes:

```tsx
return {
  appState: nextAppState,
  elements: nextElements,
  captureUpdate: CaptureUpdateAction.NEVER,
};
```

## State Mutation Principles

### Immutable Updates

All actions maintain state immutability:

- Accept readonly AppState as input
- Return new state objects
- Never mutate input parameters
- Preserve element order and relationships

### Validation and Preconditions

Actions validate preconditions before execution:

```tsx
if (
  !appState.multiElement &&
  !appState.resizingElement &&
  !appState.editingTextElement &&
  !appState.newElement &&
  !appState.selectedElementsAreBeingDragged &&
  !appState.selectionElement &&
  !app.flowChartCreator.isCreatingChart
) {
  // Safe to execute action
}
```

## Action Categories

### Element Manipulation Actions

- Element creation, deletion, modification
- Transform operations (move, resize, rotate)
- Style changes (color, stroke, fill)
- Text editing and bound text operations

### History Actions

- Undo/redo functionality with state snapshots
- History capture control
- State restoration with element ordering

### Navigation Actions

- Canvas pan and zoom operations
- Element selection and focus
- Viewport management

### Export/Import Actions

- Scene export in various formats
- File import and parsing
- Image and library operations

## Keyboard Shortcut Integration

### Action Registration

Actions integrate with keyboard shortcuts:

```tsx
import { isWindows, KEYS, matchKey } from "@excalidraw/common";

// Actions can specify keyboard shortcuts
// Integration with platform-specific key combinations
// Support for modifier keys and key sequences
```

### Shortcut Management

The system provides:

- Platform-aware shortcut definitions
- Conflict resolution for key combinations
- Context-sensitive shortcut activation
- Help system integration

## Component Integration

### Tool Button Pattern

Actions integrate with UI components:

```tsx
import { ToolButton } from "../components/ToolButton";
import { UndoIcon, RedoIcon } from "../components/icons";

// Actions can be triggered from UI components
// Icons and labels are associated with actions
// State updates trigger UI re-renders
```

### Event Emitter Integration

Actions use event emitters for loose coupling:

```tsx
import { HistoryChangedEvent } from "../history";
import { useEmitter } from "../hooks/useEmitter";

// Actions can emit events for cross-component communication
// History changes notify interested components
// Decoupled architecture for complex interactions
```

## History System Integration

### Capture Update Control

Actions control how they interact with history:

```tsx
import { CaptureUpdateAction } from "@excalidraw/element";

// Actions specify when to capture history snapshots
// NEVER - Don't capture (for undo/redo actions)
// IMMEDIATELY - Capture right away
// EVENTUALLY - Capture at next opportunity
```

### Element Ordering

Actions maintain element ordering:

```tsx
import { orderByFractionalIndex } from "@excalidraw/element";

// Elements ordered by fractional indices
// Maintains visual stacking order
// Supports collaborative editing with order preservation
```

## Performance Considerations

### Action Batching

Multiple state changes can be batched:

- Avoid unnecessary re-renders
- Optimize history capture
- Maintain UI responsiveness

### State Diffing

Actions minimize state changes:

- Only update modified properties
- Preserve unchanged references
- Optimize React reconciliation

## Error Handling

### Action Validation

Actions include comprehensive validation:

- Precondition checks before execution
- State consistency validation
- Error recovery strategies

### Graceful Failure

Actions handle errors gracefully:

- Return appropriate error states
- Maintain application stability
- Provide user feedback for failures

## Key Files

### Core Action System

- `packages/excalidraw/actions/types.ts` - Action type definitions
- `packages/excalidraw/actions/manager.ts` - Action registration and management
- `packages/excalidraw/actions/actionHistory.tsx` - Undo/redo implementation

### Element Actions

- `packages/excalidraw/actions/actionStyles.ts` - Style manipulation actions
- `packages/excalidraw/actions/actionBoundText.tsx` - Text binding actions
- `packages/excalidraw/actions/actionZindex.tsx` - Element ordering actions

### Navigation Actions

- `packages/excalidraw/actions/actionNavigate.tsx` - Canvas navigation
- `packages/excalidraw/actions/actionToggleZenMode.tsx` - UI mode toggles

### Export Actions

- `packages/excalidraw/actions/actionExport.tsx` - Export functionality
- File operations and format conversions

### Distribution and Alignment

- `packages/excalidraw/actions/actionDistribute.tsx` - Element distribution
- `packages/excalidraw/actions/actionAlign.tsx` - Element alignment
