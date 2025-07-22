# Mathematical Utilities Domain Analysis

## Overview

The mathematical utilities domain provides a comprehensive set of geometric calculations, coordinate transformations, and mathematical operations essential for canvas-based drawing. It's implemented as a separate package (`@excalidraw/math`) with strong typing and precision handling.

## Type System

### Branded Types for Type Safety

The math system uses branded types to prevent coordinate system confusion:

```typescript
/**
 * Represents a 2D position in world or canvas space. A
 * global coordinate.
 */
export type GlobalPoint = [x: number, y: number] & {
  _brand: "excalimath__globalpoint";
};

/**
 * Represents a 2D position in whatever local space it's
 * needed. A local coordinate.
 */
export type LocalPoint = [x: number, y: number] & {
  _brand: "excalimath__localpoint";
};

/**
 * By definition one radian is the angle subtended at the centre
 * of a circle by an arc that is equal in length to the radius.
 */
export type Radians = number & { _brand: "excalimath__radian" };

/**
 * An angle measurement of a plane angle in which one full
 * rotation is 360 degrees.
 */
export type Degrees = number & { _brand: "excalimath_degree" };
```

### Range and Vector Types

```typescript
/**
 * A number range which includes the start and end numbers in the range.
 */
export type InclusiveRange = [number, number] & { _brand: "excalimath_degree" };
```

## Point Operations

### Point Creation and Conversion

The system provides multiple ways to create and convert points:

```typescript
/**
 * Create a properly typed Point instance from the X and Y coordinates.
 */
export function pointFrom<Point extends GlobalPoint | LocalPoint>(
  x: number,
  y: number,
): Point {
  return [x, y] as Point;
}

/**
 * Converts and remaps an array containing a pair of numbers to Point.
 */
export function pointFromArray<Point extends GlobalPoint | LocalPoint>(
  numberArray: number[],
): Point | undefined {
  return numberArray.length === 2
    ? pointFrom<Point>(numberArray[0], numberArray[1])
    : undefined;
}

/**
 * Convert a vector to a point.
 */
export function pointFromVector<P extends GlobalPoint | LocalPoint>(
  v: Vector,
  offset: P = pointFrom(0, 0),
): P {
  return pointFrom<P>(offset[0] + v[0], offset[1] + v[1]);
}
```

### Point Validation and Comparison

```typescript
/**
 * Checks if the provided value has the shape of a Point.
 */
export function isPoint(p: unknown): p is LocalPoint | GlobalPoint {
  return (
    Array.isArray(p) &&
    p.length === 2 &&
    typeof p[0] === "number" &&
    !isNaN(p[0]) &&
    typeof p[1] === "number" &&
    !isNaN(p[1])
  );
}

/**
 * Compare two points coordinate-by-coordinate and if
 * they are closer than INVERSE_PRECISION it returns TRUE.
 */
export function pointsEqual<Point extends GlobalPoint | LocalPoint>(
  a: Point,
  b: Point,
  tolerance: number = PRECISION,
): boolean {
  const abs = Math.abs;
  return abs(a[0] - b[0]) < tolerance && abs(a[1] - b[1]) < tolerance;
}
```

## Precision Management

### Consistent Precision Handling

The system maintains consistent precision throughout calculations:

```typescript
import { PRECISION } from "./utils";

// Used in equality comparisons and floating-point operations
// Ensures consistent behavior across mathematical operations
```

## Vector Operations

### Vector Mathematics

Comprehensive vector operations for geometric calculations:

- Vector creation and conversion
- Vector arithmetic (addition, subtraction, scaling)
- Dot product and normalization
- Vector rotation and transformation

## Coordinate Transformations

### Global vs Local Coordinates

The system distinguishes between coordinate systems:

- **GlobalPoint**: World/canvas coordinates
- **LocalPoint**: Element-local coordinates
- Transformation functions between coordinate systems
- Matrix operations for complex transformations

## Angle Operations

### Angle Conversion and Manipulation

```typescript
import { degreesToRadians } from "./angle";

// Support for both degrees and radians
// Conversion utilities for angle calculations
// Rotation operations with proper type safety
```

## Geometric Calculations

### Line and Shape Mathematics

The system provides utilities for:

- Line intersection calculations
- Distance measurements between points and shapes
- Bounding box calculations
- Collision detection algorithms
- Curve and bezier calculations

## Performance Considerations

### Optimized Mathematical Operations

Key performance patterns:

- Efficient distance calculations
- Optimized matrix operations
- Minimal allocation in hot paths
- Precision-aware equality comparisons

## Integration with Canvas System

### Canvas Coordinate Mapping

Mathematical utilities integrate with canvas rendering:

- Viewport to canvas coordinate transformations
- Zoom and pan calculations
- Element positioning and sizing
- Hit testing and collision detection

## Key Files

### Core Types and Utilities

- `packages/math/src/types.ts` - Mathematical type definitions
- `packages/math/src/point.ts` - Point operations and utilities
- `packages/math/src/vector.ts` - Vector mathematics
- `packages/math/src/angle.ts` - Angle operations

### Geometric Operations

- `packages/math/src/line.ts` - Line calculations
- `packages/math/src/polygon.ts` - Polygon operations
- `packages/math/src/rectangle.ts` - Rectangle utilities
- `packages/math/src/utils.ts` - Mathematical constants and utilities

### Integration

- Used throughout canvas rendering pipeline
- Essential for element positioning and transformations
- Critical for user interaction calculations
- Foundation for export/import coordinate mapping
