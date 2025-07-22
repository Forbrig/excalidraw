# Element System Domain Analysis

## Overview

The element system is the core of Excalidraw's data model, defining all drawable objects and their properties. It's implemented as a separate package (`@excalidraw/element`) with comprehensive type definitions, manipulation utilities, and rendering logic.

## Element Type Hierarchy

### Base Element Structure

All elements extend from a common base with essential properties:

```typescript
type _ExcalidrawElementBase = Readonly<{
  id: string;
  x: number;
  y: number;
  strokeColor: string;
  backgroundColor: string;
  fillStyle: FillStyle;
  strokeWidth: number;
  strokeStyle: StrokeStyle;
  roundness: null | { type: RoundnessType; value?: number };
  roughness: number;
  // ... additional base properties
}>;
```

### Element Type Definitions

The system defines specific element types with their unique properties:

```typescript
export type FillStyle = "hachure" | "cross-hatch" | "solid" | "zigzag";
export type StrokeStyle = "solid" | "dashed" | "dotted";
export type StrokeRoundness = "round" | "sharp";
export type RoundnessType = ValueOf<typeof ROUNDNESS>;
export type TextAlign = typeof TEXT_ALIGN[keyof typeof TEXT_ALIGN];
export type VerticalAlign = typeof VERTICAL_ALIGN[VerticalAlignKeys];
```

### Specialized Element Types

Different drawable elements have specific implementations:

1. **Basic Shapes**: Rectangle, ellipse, diamond
2. **Linear Elements**: Lines, arrows with point arrays
3. **Text Elements**: Standalone and bound text
4. **Images**: With file references and cropping
5. **Embedded Content**: iframes and embeddable elements
6. **Frames**: Organizational containers

## Element Immutability Pattern

### Readonly Properties

All element properties are marked as readonly to enforce immutability:

```typescript
export type ExcalidrawImageElement = _ExcalidrawElementBase &
  Readonly<{
    type: "image";
    fileId: FileId | null;
    // All properties are readonly
  }>;
```

### Element Mutation

Elements are updated through dedicated mutation functions that return new instances:

```typescript
// Element mutations through specialized utilities
// Located in packages/element/src/mutateElement.ts
// Maintains immutability while updating properties
```

## Branded Types and Type Safety

### ID and Reference Types

The system uses branded types for type safety:

```typescript
export type GroupId = string;
export type FontString = string & { _brand: "fontString" };
export type FractionalIndex = string & { _brand: "franctionalIndex" };
```

### Element Relationships

Elements can have relationships through IDs and references:

```typescript
type BoundElement = Readonly<{
  id: ExcalidrawLinearElement["id"];
  type: "arrow" | "text";
}>;
```

## Advanced Element Features

### Image Handling

Image elements support cropping and file management:

```typescript
export type ImageCrop = {
  x: number;
  y: number;
  width: number;
  height: number;
  naturalWidth: number;
  naturalHeight: number;
};
```

### Embedded Content

Support for iframe and embeddable content:

```typescript
export type ExcalidrawIframeElement = _ExcalidrawElementBase &
  Readonly<{
    type: "iframe";
    customData?: { generationData?: MagicGenerationData };
  }>;

export type IframeData = {
  intrinsicSize: { w: number; h: number };
  error?: Error;
  sandbox?: { allowSameOrigin?: boolean };
};
// ... iframe-specific properties
```

## Element Operations

### Element Validation and Type Checking

The system provides comprehensive type guards and validation:

```typescript
// Located in packages/element/src/typeChecks.ts
// Type guards for different element types
// Validation functions for element properties
```

### Element Bounds and Collision

Geometric operations for elements:

```typescript
// packages/element/src/bounds.ts - Bounding box calculations
// packages/element/src/collision.ts - Collision detection
// packages/element/src/selection.ts - Selection algorithms
```

### Element Transformation

Transform operations maintain element integrity:

```typescript
// packages/element/src/transformHandles.ts - Resize and rotation
// packages/element/src/delta.ts - Position and size changes
// packages/element/src/shape.ts - Shape-specific operations
```

## Text Element System

### Text Element Properties

Text elements have specialized properties:

```typescript
// Text alignment, font family, font size
// Vertical alignment, baseline calculations
// Text bounds and line wrapping
```

### Bound Text

Text can be bound to other elements:

```typescript
// Located in packages/element/src/textElement.ts
// Text binding to shapes and arrows
// Automatic text positioning and sizing
```

## Element Persistence

### Serialization

Elements must be JSON serializable:

- All properties are primitive or serializable objects
- File references use string IDs
- Custom data structures maintain serialization compatibility

### Version Compatibility

The element system supports schema evolution:

- Backward compatibility for older file formats
- Migration utilities for element property changes
- Graceful handling of unknown element types

## Key Files

### Core Types and Structure

- `packages/element/src/types.ts` - Element type definitions
- `packages/element/src/typeChecks.ts` - Type guards and validation
- `packages/element/src/mutateElement.ts` - Element mutation utilities

### Element Operations

- `packages/element/src/bounds.ts` - Bounding box calculations
- `packages/element/src/selection.ts` - Selection algorithms
- `packages/element/src/transformHandles.ts` - Transform operations

### Specialized Elements

- `packages/element/src/textElement.ts` - Text element handling
- `packages/element/src/image.ts` - Image element operations
- `packages/element/src/binding.ts` - Element binding system

### Geometric Operations

- `packages/element/src/shape.ts` - Shape-specific operations
- `packages/element/src/delta.ts` - Position and size changes
- `packages/element/src/cropElement.ts` - Element cropping utilities
