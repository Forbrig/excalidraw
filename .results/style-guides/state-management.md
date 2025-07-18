# State Management Style Guide

## Unique Patterns in Excalidraw State Management

### Jotai Atomic Architecture

- Isolated stores for editor and app contexts using `createIsolation`
- Atomic state pieces with fine-grained reactivity
- Custom initialization patterns with `useAtomWithInitialValue`

### Immutable State Updates

- All state mutations return new objects preserving immutability
- Action-based state changes with validation and preconditions
- History integration with capture control mechanisms

### Store Isolation Pattern

- Separate stores for different application contexts
- Provider-based state scoping for component trees
- Context-aware state management for UI and editor separation

### Performance Optimization

- Granular atom subscriptions to minimize re-renders
- Efficient state diffing and reference preservation
- Optimized state normalization for large element collections
