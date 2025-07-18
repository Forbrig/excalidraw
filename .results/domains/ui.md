# UI Domain Analysis

## Overview

The UI domain in Excalidraw handles all user interface components, styling patterns, and interactive elements. It follows React functional component patterns with TypeScript interfaces and uses CSS modules for styling.

## Component Architecture

### Base Component Pattern

All UI components follow a consistent pattern with TypeScript interfaces for props and CSS module imports:

```tsx
interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  type?: "button" | "submit" | "reset";
  onSelect: () => any;
  selected?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Button = ({
  type = "button",
  onSelect,
  selected,
  children,
  className = "",
  ...rest
}: ButtonProps) => {
  return (
    <button
      onClick={composeEventHandlers(rest.onClick, (event) => {
        onSelect();
      })}
      type={type}
      className={clsx("excalidraw-button", className, { selected })}
      {...rest}
    >
      {children}
    </button>
  );
};
```

### Key Patterns Observed:

1. **Props Interface Extension**: Components extend native HTML element props while adding custom properties
2. **Event Handler Composition**: Uses `composeEventHandlers` utility to combine custom and native event handlers
3. **CSS Class Composition**: Uses `clsx` for conditional class names with base prefixes like "excalidraw-button"
4. **Props Spreading**: Native HTML props are spread using rest operator

## Styling System

### CSS Modules Pattern

Components use SCSS files with the same name:

- `Button.tsx` → `Button.scss`
- Styles are scoped to prevent global conflicts
- Base classes follow naming convention: `excalidraw-{component-name}`

### Theme Support

The styling system supports light/dark themes through CSS variables and theme classes applied at the root level.

## Component Categories

### Core UI Components

- **Button.tsx** - Generic button with selection states
- **TextField.tsx** - Text input fields
- **Tooltip.tsx** - Hover tooltips
- **Spinner.tsx** - Loading indicators
- **Modal.tsx** - Modal dialogs
- **Dialog.tsx** - Dialog containers

### Layout Components

- **Stack.tsx** - Flexbox layout container
- **Sidebar/** - Collapsible sidebar system with tabs
- **Footer/** - Bottom toolbar components

### Specialized Components

- **Canvas Components** - InteractiveCanvas, StaticCanvas, NewElementCanvas
- **Dropdown Menus** - Hierarchical dropdown menu system
- **Command Palette** - Quick action search interface

## Canvas-Specific UI Patterns

Canvas components follow a specialized pattern where they extend base canvas classes and implement canvas-specific interfaces:

```tsx
// Canvas components inherit from base canvas classes
// and implement rendering/interaction patterns specific to drawing
```

## State Integration

UI components integrate with the global state system through:

- Jotai atoms for reactive state updates
- Custom hooks for complex UI state logic
- Action dispatchers for state mutations

## Accessibility Patterns

Components consistently implement:

- ARIA labels and roles
- Keyboard navigation support
- Focus management
- Screen reader compatibility

## Testing Patterns

UI components use:

- React Testing Library for component testing
- Test files colocated with components (.test.tsx)
- Mock utilities for external dependencies
- Accessibility testing with axe

## Key Files

### Primary Components

- `packages/excalidraw/components/App.tsx` - Main application component
- `packages/excalidraw/components/Button.tsx` - Generic button component
- `packages/excalidraw/components/Modal.tsx` - Modal dialog system
- `packages/excalidraw/components/Sidebar/` - Sidebar component system

### Canvas Components

- `packages/excalidraw/components/canvases/InteractiveCanvas.tsx` - Interactive drawing canvas
- `packages/excalidraw/components/canvases/StaticCanvas.tsx` - Static rendering canvas
- `packages/excalidraw/components/canvases/NewElementCanvas.tsx` - New element preview canvas

### Utility Components

- `packages/excalidraw/components/Stack.tsx` - Layout container
- `packages/excalidraw/components/Tooltip.tsx` - Tooltip system
- `packages/excalidraw/components/Ellipsify.tsx` - Text truncation utility
