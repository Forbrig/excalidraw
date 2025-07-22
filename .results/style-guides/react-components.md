# React Components Style Guide

## Unique Patterns in Excalidraw Components

### Component Naming and File Organization

- Components use PascalCase with descriptive, feature-specific names
- Complex components organized in folders with index files (e.g., `Sidebar/`, `ColorPicker/`)
- Canvas-specific components prefixed appropriately (`InteractiveCanvas`, `StaticCanvas`)

### Props Interface Pattern

- All components extend native HTML element props while adding custom properties
- Extensive use of `React.DetailedHTMLProps` for prop inheritance
- Custom props defined in separate interfaces extending HTML props

```tsx
interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  onSelect: () => any;
  selected?: boolean;
  children: React.ReactNode;
  className?: string;
}
```

### Event Handler Composition

- Uses `composeEventHandlers` utility from `@excalidraw/common` to combine custom and native event handlers
- Allows components to have custom logic while preserving native HTML behavior

```tsx
onClick={composeEventHandlers(rest.onClick, (event) => {
  onSelect();
})}
```

### CSS Class Naming Convention

- Base classes follow `excalidraw-{component-name}` pattern
- Uses `clsx` for conditional class composition
- Supports theme variations through conditional classes

```tsx
className={clsx("excalidraw-button", className, { selected })}
```

### Canvas Component Specialization

- Canvas components extend base canvas classes
- Implement specialized rendering and interaction patterns
- Use `RoughCanvas` for hand-drawn aesthetic rendering
- Manage element maps and visibility optimizations

### Component Composition Patterns

- Heavy use of compound components (Sidebar with SidebarHeader, SidebarTabs, etc.)
- Portal-based rendering for modals and overlays
- Island architecture for isolated UI components

### Accessibility Integration

- Consistent ARIA label implementation
- Keyboard navigation support built into base components
- Focus management for complex interactions
- Screen reader compatibility considerations

### State Integration Patterns

- Components integrate with Jotai atoms for reactive state
- Custom hooks for complex component state logic
- Action dispatchers for triggering state mutations
- Minimal local state, prefer global state atoms

### Internationalization Support

- All user-facing text uses `t()` translation function
- Translation keys follow hierarchical domain structure
- RTL layout considerations in component design

### Icon and Asset Integration

- Icons imported as React components from `components/icons`
- SVG icons with consistent sizing and theming
- Asset loading handled through dedicated utilities
