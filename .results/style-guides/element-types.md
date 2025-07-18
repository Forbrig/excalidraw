# Element Types Style Guide

## Unique Patterns in Excalidraw Element Types

### Element Base Structure

- All elements extend `_ExcalidrawElementBase` with readonly properties for immutability
- Branded string types for IDs and references with type safety enforcement
- Specialized element types with type-specific properties and behaviors

### Immutability Enforcement

- All element properties marked as readonly to prevent accidental mutation
- Element updates through dedicated mutation utilities that return new instances
- Preservation of element relationships and ID consistency across mutations

### Type Discrimination Pattern

- Element type field used for type discrimination in TypeScript
- Specialized interfaces for different element types (image, text, shapes, etc.)
- Type guards and validation functions for runtime type checking

### Serialization Compatibility

- All element properties JSON serializable for export/import operations
- Version compatibility considerations for schema evolution
- File reference handling through string IDs for cross-platform compatibility
