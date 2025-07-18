# Tech Stack Analysis

## Core Technology Analysis

**Programming Language(s):**

- TypeScript (primary) - Used throughout the entire codebase with strict typing
- JavaScript - Minimal usage, mainly in build scripts and configuration files
- SCSS/CSS - For styling with CSS modules pattern

**Primary Framework:**

- React 19.0.0 - Modern functional components with hooks pattern
- Vite 5.0.12 - Build tool and development server

**Secondary/Tertiary Frameworks:**

- Jotai 2.11.0 - Atomic state management library for granular reactive state
- RoughJS 4.6.4 - Core drawing library for hand-drawn aesthetic rendering
- Canvas API - Native HTML5 Canvas for rendering graphics
- WebAssembly (WASM) - For font subsetting (woff2-bindings.ts)

**State Management Approach:**

- Jotai atomic state management for fine-grained reactivity
- Local component state via React hooks (useState, useEffect, etc.)
- Custom hooks for complex state logic (e.g., useCanvas, UI state management)

**Other Relevant Technologies:**

- Monorepo architecture with Yarn workspaces
- i18next for internationalization
- Perfect Freehand for smooth drawing curves
- Socket.io for real-time collaboration
- Firebase for backend services (collaboration, storage)
- PWA capabilities with offline support

## Domain Specificity Analysis

**Core Problem Domain:** Virtual collaborative whiteboard for creating hand-drawn style diagrams, wireframes, and sketches. Excalidraw targets digital drawing and collaborative visual communication with an emphasis on the hand-drawn aesthetic.

**Core Mathematical/Technical Concepts:**

- 2D geometric mathematics (points, lines, curves, transformations)
- Canvas rendering and coordinate systems (global vs local coordinates)
- Vector graphics and path operations
- Collision detection and hit testing
- Bezier curves and smooth drawing algorithms
- Matrix transformations (rotation, scaling, translation)
- Real-time collaborative algorithms with conflict resolution

**Primary User Interactions:**

- Drawing tools (rectangle, circle, diamond, arrow, line, free-draw, eraser)
- Shape manipulation (select, move, resize, rotate)
- Text editing with WYSIWYG capabilities
- Collaborative real-time editing with multiple users
- Import/export operations (PNG, SVG, JSON)
- Library management for reusable components
- Canvas navigation (zoom, pan, infinite scroll)

**Primary Data Types and Structures:**

- **Point types**: `GlobalPoint`, `LocalPoint` for coordinate systems
- **Geometric types**: `Line`, `LineSegment`, `Rectangle`, `Polygon`
- **Element types**: Various drawing element interfaces (shapes, text, images)
- **Canvas state**: Zoom level, scroll position, viewport transforms
- **Collaboration data**: Real-time sync messages, user cursors, presence data

## Application Boundaries

**Features/Functionality Clearly Within Scope:**

- 2D drawing and sketching tools
- Shape manipulation and transformation
- Text editing and bound text elements
- Canvas-based infinite whiteboard
- Real-time collaboration features
- Import/export of various formats
- Library system for reusable components
- Undo/redo operations
- Theming (dark/light mode)
- Internationalization support

**Features Architecturally Inconsistent:**

- 3D graphics or modeling (strictly 2D focused)
- Complex animation systems (static/minimal animation focus)
- Document editing beyond simple text labels
- Database-heavy features (file-based/JSON export focus)
- Complex file management systems
- Heavy computational workflows unrelated to drawing

**Specialized Libraries/Mathematical Constraints:**

- **RoughJS dependency**: All shape rendering must use RoughJS for hand-drawn aesthetic
- **Canvas-centric architecture**: All visual elements must work within HTML5 Canvas
- **Real-time collaboration constraints**: All state changes must be serializable and collaborative
- **Mathematical precision**: Heavy use of geometric algorithms and coordinate transformations
- **Performance constraints**: Must handle large numbers of canvas elements efficiently
- **Export compatibility**: Must maintain compatibility with SVG/PNG export formats
