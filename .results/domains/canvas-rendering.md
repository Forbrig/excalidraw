# Canvas Rendering Domain Analysis

## Overview

The canvas rendering domain handles all drawing and visual representation of elements on HTML5 Canvas. It uses RoughJS for the hand-drawn aesthetic and implements a sophisticated rendering pipeline for performance and visual quality.

## Core Canvas Architecture

### Canvas Component Hierarchy

The system uses three main canvas components with distinct responsibilities:

1. **StaticCanvas** - Non-interactive rendering for exports and backgrounds
2. **InteractiveCanvas** - User interaction handling and live drawing
3. **NewElementCanvas** - Preview rendering for elements being created

```tsx
type StaticCanvasProps = {
  canvas: HTMLCanvasElement;
  rc: RoughCanvas;
  elementsMap: RenderableElementsMap;
  allElementsMap: NonDeletedSceneElementsMap;
  visibleElements: readonly NonDeletedExcalidrawElement[];
  sceneNonce: number | undefined;
  selectionNonce: number | undefined;
  scale: number;
  appState: StaticCanvasAppState;
  renderConfig: StaticCanvasRenderConfig;
};
```

### RoughJS Integration

All shape rendering uses RoughJS for the distinctive hand-drawn aesthetic:

```typescript
// RoughCanvas instance is passed to all rendering functions
rc: RoughCanvas;

// Elements are rendered through the renderElement function
// which uses RoughJS internally for shape drawing
```

## Rendering Pipeline

### Scene Rendering Process

The rendering system follows a structured pipeline:

1. **Canvas Preparation** - Bootstrap canvas with proper dimensions and context
2. **Element Filtering** - Determine visible elements within viewport
3. **Batch Rendering** - Render elements in optimized batches
4. **Grid Rendering** - Draw background grid when enabled
5. **UI Overlays** - Render selection handles, cursors, etc.

```typescript
const GridLineColor = {
  Bold: "#dddddd",
  Regular: "#e5e5e5",
} as const;

const strokeGrid = (
  context: CanvasRenderingContext2D,
  gridSize: number,
  gridStep: number,
  // ... grid rendering implementation
```

### Performance Optimizations

Key performance patterns observed:

- **Viewport Culling** - Only render elements visible in current viewport
- **Render Throttling** - Use `throttleRAF` for performance-sensitive operations
- **Scene Nonces** - Track scene changes to avoid unnecessary re-renders
- **Canvas Reuse** - Reuse canvas instances across renders

## Coordinate System Management

### Point Type System

The system uses typed coordinate points for precision:

```typescript
// From @excalidraw/math package
GlobalPoint; // World coordinates
LocalPoint; // Element-local coordinates
```

### Transformation Handling

Canvas transformations are managed through:

- Zoom levels and scaling
- Pan offset calculations
- Element-specific transformations (rotation, resize)
- Viewport to canvas coordinate mapping

## Element Rendering

### Element Type Rendering

Each element type has specialized rendering logic:

- Rectangles, ellipses, diamonds use RoughJS shapes
- Arrows use custom path calculations
- Text elements use canvas text rendering
- Images use canvas drawImage with transformations
- Frames provide clipping boundaries for child elements

### Frame Clipping System

Frames provide clipping boundaries for organizational purposes:

```typescript
elementOverlapsWithFrame,
getTargetFrame,
shouldApplyFrameClip,
```

## Export Rendering

### Static Scene Export

Export functionality uses the static rendering pipeline:

- Render to dedicated export canvas
- Apply export-specific configurations
- Support multiple formats (PNG, SVG, JSON)
- Maintain aspect ratios and quality settings

## Accessibility in Rendering

Canvas accessibility is handled through:

- Alternative text representations
- Screen reader compatible element descriptions
- Keyboard navigation overlays
- High contrast mode support

## Key Files

### Core Rendering

- `packages/excalidraw/renderer/staticScene.ts` - Main static rendering pipeline
- `packages/excalidraw/renderer/helpers.ts` - Canvas utilities and helpers
- `packages/excalidraw/components/canvases/StaticCanvas.tsx` - Static canvas component

### Canvas Components

- `packages/excalidraw/components/canvases/InteractiveCanvas.tsx` - Interactive canvas
- `packages/excalidraw/components/canvases/NewElementCanvas.tsx` - Element preview canvas

### Element Rendering

- `packages/excalidraw/element/renderElement.ts` - Individual element rendering
- `packages/excalidraw/element/` - Element-specific rendering logic

### Performance

- `packages/excalidraw/reactUtils.ts` - React rendering optimizations
- `packages/excalidraw/scene/` - Scene management and optimization
