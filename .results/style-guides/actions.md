# Actions Style Guide

## Unique Patterns in Excalidraw Actions

### Action Structure Pattern

- Actions receive readonly AppState and return ActionResult with updated state
- Validation of preconditions before action execution
- Integration with history capture control through CaptureUpdateAction

### Immutable State Mutation

- Actions never mutate input state directly
- Return new state objects maintaining element order with fractional indices
- Support for undo/redo through reversible state changes

### Keyboard Shortcut Integration

- Platform-aware keyboard shortcuts with modifier key support
- Action registration with shortcut definitions and conflict resolution
- Context-sensitive shortcut activation based on application state

### Component Integration

- Actions integrate with UI components through ToolButton pattern
- Event emitter integration for cross-component communication
- Icon and label association for UI representation
