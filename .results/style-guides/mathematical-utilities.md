# Mathematical Utilities Style Guide

## Unique Patterns in Excalidraw Math Operations

### Branded Type System

- Strongly typed coordinates with GlobalPoint and LocalPoint branding
- Angle types (Radians/Degrees) with branded types for type safety
- Vector and geometric types with mathematical precision guarantees

### Point Operation Patterns

- Multiple point creation methods (pointFrom, pointFromArray, pointFromVector)
- Precision-aware equality comparisons using PRECISION constant
- Type-safe conversions between coordinate systems

### Geometric Calculation Standards

- Consistent use of mathematical constants and precision handling
- Optimized algorithms for performance-critical canvas operations
- Integration with canvas coordinate transformation pipeline

### Type Safety Enforcement

- Runtime type checking with isPoint validation
- Branded types prevent coordinate system confusion
- Generic type parameters for point type preservation
