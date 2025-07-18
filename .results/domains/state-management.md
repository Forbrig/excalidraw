# State Management Domain Analysis

## Overview

Excalidraw uses Jotai for atomic state management, providing fine-grained reactivity and avoiding unnecessary re-renders. The state system is built around immutable updates and atomic state pieces that can be composed together.

## Jotai Architecture

### Store Isolation

The system uses isolated Jotai stores for different contexts:

```typescript
// Editor store for core drawing functionality
export const editorJotaiStore: ReturnType<typeof createStore> = createStore();

// App store for application-level state
export const appJotaiStore = createStore();
```

### Atomic State Pattern

State is broken into atomic pieces using Jotai atoms:

```typescript
import {
  atom,
  createStore,
  type PrimitiveAtom,
  type WritableAtom,
} from "jotai";
import { createIsolation } from "jotai-scope";

const jotai = createIsolation();
export const { useAtom, useSetAtom, useAtomValue, useStore } = jotai;
```

### Custom Hooks for State Initialization

The system provides utilities for initializing atoms with default values:

```typescript
export const useAtomWithInitialValue = <
  T extends unknown,
  A extends PrimitiveAtom<T>,
>(
  atom: A,
  initialValue: T | (() => T),
) => {
  const [value, setValue] = useAtom(atom);

  useLayoutEffect(() => {
    if (typeof initialValue === "function") {
      setValue(initialValue());
    } else {
      setValue(initialValue);
    }
  }, []);

  return [value, setValue] as const;
};
```

## AppState Structure

### Core Application State

The central AppState contains all canvas and UI state:

```typescript
export const getDefaultAppState = (): Omit<
  AppState,
  "offsetTop" | "offsetLeft" | "width" | "height"
> => {
  return {
    showWelcomeScreen: false,
    theme: THEME.LIGHT,
    collaborators: new Map(),
    currentChartType: "bar",
    currentItemBackgroundColor: DEFAULT_ELEMENT_PROPS.backgroundColor,
    currentItemEndArrowhead: "arrow",
    currentItemFillStyle: DEFAULT_ELEMENT_PROPS.fillStyle,
    currentItemFontFamily: DEFAULT_FONT_FAMILY,
    currentItemFontSize: DEFAULT_FONT_SIZE,
    currentItemOpacity: DEFAULT_ELEMENT_PROPS.opacity,
    // ... more state properties
  };
};
```

### State Categories

The AppState encompasses several categories:

1. **Drawing Tool State** - Current tool, colors, stroke properties
2. **Canvas State** - Zoom, pan, viewport dimensions
3. **Element State** - Selected elements, editing state
4. **UI State** - Dialogs, panels, theme
5. **Collaboration State** - Connected users, cursors, presence

## Immutable State Updates

### State Mutation Pattern

All state updates follow immutable patterns:

```typescript
// State updates return new state objects
// Actions receive current state and return updated state
const newState = {
  ...currentState,
  selectedElementIds: { ...currentState.selectedElementIds },
  // specific updates
};
```

### Action System Integration

State management integrates with the action system:

- Actions receive current appState
- Actions return updated appState immutably
- History system tracks state snapshots for undo/redo

## UI-Specific State Management

### UI AppState Context

Specialized UI state management through context:

```typescript
// UI-specific state context for component state
// Separate from main drawing state for performance
```

### Component-Level State

Components use local React state for:

- Form inputs and temporary UI state
- Animation states
- Focus and hover states
- Modal/dialog visibility

## Performance Optimizations

### Granular Reactivity

Jotai's atomic approach enables:

- Components subscribe only to needed state atoms
- Minimal re-renders when unrelated state changes
- Fine-grained updates for performance-critical operations

### State Normalization

State is normalized for performance:

- Elements stored in maps by ID for O(1) lookup
- Separate atoms for different concerns
- Computed state through derived atoms

## Collaboration State Sync

### Real-time State Management

Collaborative state follows specific patterns:

- All state changes must be serializable
- Operational transformation for concurrent edits
- Presence state for user cursors and selections
- Conflict resolution strategies

## History Management

### Undo/Redo System

State history management:

- Snapshots of state for undo operations
- Efficient state diffing
- History stack management
- Action-based history tracking

## Key Files

### Core State Management

- `packages/excalidraw/editor-jotai.ts` - Editor store configuration
- `excalidraw-app/app-jotai.ts` - App store configuration
- `packages/excalidraw/appState.ts` - Default app state definition

### State Context

- `packages/excalidraw/context/ui-appState.ts` - UI state context
- Action files in `packages/excalidraw/actions/` - State mutation actions

### Types

- `packages/excalidraw/types.ts` - AppState and related type definitions
- State-related interfaces throughout the codebase
