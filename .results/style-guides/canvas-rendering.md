# Canvas Rendering Style Guide

## Unique Patterns in Excalidraw Canvas Rendering

### Canvas Component Hierarchy

- Three specialized canvas types: StaticCanvas, InteractiveCanvas, NewElementCanvas
- RoughJS integration for hand-drawn aesthetic in all shape rendering
- Canvas context management with proper bootstrapping and dimension handling

### Rendering Pipeline Pattern

- Viewport culling for performance with visible element filtering
- Scene nonce tracking to avoid unnecessary re-renders
- Batched element rendering with optimization for large element collections

### Coordinate System Management

- Typed coordinate points (GlobalPoint/LocalPoint) from @excalidraw/math
- Transformation matrix handling for zoom, pan, and element transformations
- Precision-aware coordinate calculations throughout rendering pipeline

### Performance Optimization

- Render throttling using throttleRAF for expensive operations
- Canvas reuse across render cycles
- Grid rendering optimization with configurable density and styling
