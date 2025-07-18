# Excalidraw Copilot Instructions

## Overview

This file enables AI coding assistants to generate features aligned with Excalidraw's architecture and style. It is based only on actual, observed patterns from the codebase — not invented practices.

Excalidraw is a virtual collaborative whiteboard for creating hand-drawn style diagrams, wireframes, and sketches. It targets digital drawing and collaborative visual communication with an emphasis on the hand-drawn aesthetic using React, TypeScript, Canvas API, and RoughJS.

## File Category Reference

### React Components

**Purpose**: UI components following React functional patterns with TypeScript **Examples**: `packages/excalidraw/components/Button.tsx`, `packages/excalidraw/components/App.tsx` **Key Conventions**:

- Extend native HTML element props with custom properties
- Use `composeEventHandlers` for event handler composition
- CSS classes follow `excalidraw-{component-name}` pattern with `clsx` for conditional classes
- Canvas components extend base canvas classes for specialized rendering

### React Hooks

**Purpose**: Custom hooks for state management and component logic **Examples**: `packages/excalidraw/hooks/useCallbackRefState.ts`, `packages/excalidraw/hooks/useEmitter.ts` **Key Conventions**:

- Integrate with Jotai atoms for reactive state
- Performance optimization with `useStable` and `useStableCallback`
- Event-driven architecture with `useEmitter`

### State Management

**Purpose**: Jotai-based atomic state management with immutable updates  
**Examples**: `packages/excalidraw/editor-jotai.ts`, `packages/excalidraw/appState.ts` **Key Conventions**:

- Isolated stores for editor and app contexts using `createIsolation`
- All state mutations return new objects preserving immutability
- Custom initialization with `useAtomWithInitialValue`

### Actions

**Purpose**: Structured state mutations with undo/redo support **Examples**: `packages/excalidraw/actions/actionHistory.tsx`, `packages/excalidraw/actions/actionStyles.ts` **Key Conventions**:

- Actions receive readonly AppState and return ActionResult
- Validation of preconditions before execution
- Integration with keyboard shortcuts and UI components

### Canvas Rendering

**Purpose**: HTML5 Canvas rendering with RoughJS for hand-drawn aesthetic **Examples**: `packages/excalidraw/components/canvases/StaticCanvas.tsx`, `packages/excalidraw/renderer/staticScene.ts` **Key Conventions**:

- Three canvas types: StaticCanvas, InteractiveCanvas, NewElementCanvas
- RoughJS integration for all shape rendering
- Viewport culling and performance optimization

### Mathematical Utilities

**Purpose**: Geometric calculations and coordinate transformations **Examples**: `packages/math/src/point.ts`, `packages/math/src/types.ts` **Key Conventions**:

- Branded types for GlobalPoint/LocalPoint coordinate safety
- Precision-aware calculations using PRECISION constant
- Type-safe geometric operations with validation

### Element Types

**Purpose**: Drawable element definitions and type system **Examples**: `packages/element/src/types.ts`, `packages/element/src/mutateElement.ts` **Key Conventions**:

- All elements extend `_ExcalidrawElementBase` with readonly properties
- Element mutations through dedicated utilities maintaining immutability
- Type discrimination pattern with specialized element interfaces

## Feature Scaffold Guide

### Planning a New Feature

1. **Determine categories needed**: Identify which file types are required
2. **Follow placement conventions**: Use established directory structures
3. **Apply naming patterns**: Follow component and file naming conventions
4. **Integrate with existing systems**: Use established state management and action patterns

### Component Creation

For a new UI component:

- Create `.tsx` file in appropriate `packages/excalidraw/components/` subdirectory
- Create matching `.scss` file for styling
- Extend HTML element props with custom interface
- Use `clsx` for conditional class composition
- Integrate with Jotai atoms for state

### Hook Creation

For custom logic:

- Create `.ts` file in `packages/excalidraw/hooks/`
- Use `useStable` for performance optimization
- Integrate with event emitters when needed
- Follow reactive patterns with Jotai atoms

### Action Creation

For state mutations:

- Create `.tsx` file in `packages/excalidraw/actions/`
- Define action with readonly state input and ActionResult output
- Include validation and precondition checks
- Integrate with keyboard shortcuts

## Integration Rules

### Canvas Operations

- All canvas logic must use appropriate canvas component types
- RoughJS must be used for shape rendering to maintain hand-drawn aesthetic
- Coordinate operations must use typed Point system from `@excalidraw/math`

### State Management

- All state changes must flow through Jotai atoms and action system
- State mutations must maintain immutability
- Use isolated stores for different application contexts

### Element System

- New drawable elements must extend `_ExcalidrawElementBase`
- Element properties must be readonly and JSON serializable
- Element mutations must use dedicated utilities

### Performance Requirements

- Canvas operations must be optimized for large element collections
- Use viewport culling for rendering performance
- Implement proper event throttling for expensive operations

## Example Prompt Usage

**User Request**: "Create a searchable dropdown that lets users filter by category"

**Expected Response**: Generate these files following Excalidraw conventions:

- `packages/excalidraw/components/SearchableDropdown/SearchableDropdown.tsx` - Main component extending HTML select props
- `packages/excalidraw/components/SearchableDropdown/SearchableDropdown.scss` - CSS module with `excalidraw-searchable-dropdown` base class
- `packages/excalidraw/hooks/useSearchableDropdown.ts` - Custom hook for search logic integrating with Jotai atoms
- `packages/excalidraw/components/SearchableDropdown/SearchableDropdown.test.tsx` - Tests using React Testing Library

The component would:

- Extend HTML element props with custom search properties
- Use `clsx` for conditional styling
- Integrate with existing state management through Jotai atoms
- Follow accessibility patterns with ARIA labels
- Support internationalization with `t()` function
