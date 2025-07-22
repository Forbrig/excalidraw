# React Hooks Style Guide

## Unique Patterns in Excalidraw Hooks

### Hook Naming Convention

- All hooks prefixed with `use` following React conventions
- Descriptive names indicating specific functionality (`useCallbackRefState`, `useLibraryItemSvg`)
- Domain-specific hooks for canvas operations and state management

### State Management Integration

- Hooks integrate with Jotai atoms for reactive state updates
- Custom hooks abstract complex state interactions
- Stable callback patterns using `useStableCallback` for performance

### Performance Optimization Patterns

- `useStable` hook for reference equality optimization
- Callback ref state pattern for DOM element references
- Throttled and debounced operations for expensive calculations

### Event System Integration

- `useEmitter` for event-driven architecture
- Outside click detection with `useOutsideClick`
- Transition state management with `useTransition`

### Canvas-Specific Hooks

- Library item SVG generation with `useLibraryItemSvg`
- Portal container creation for overlay rendering
- Scroll position tracking for canvas navigation

### Custom Hook Composition

- Hooks compose together for complex functionality
- Reusable patterns for common UI interactions
- State-dependent behavior encapsulation
