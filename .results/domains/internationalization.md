# Internationalization Domain Analysis

## Overview

Internationalization uses i18next for translation management with namespace organization, RTL support, and automatic locale detection with fallback mechanisms.

## Translation System

### i18next Integration

Structured translation keys following domain hierarchy with pluralization support and context-aware translations.

### RTL Support

Right-to-left language support for UI layout with automatic text direction handling.

### Locale Management

Automatic locale detection with fallback to English and dynamic translation loading.

## Key Files

- `packages/excalidraw/i18n.ts` - Translation utilities
- `excalidraw-app/app-language/` - Language detection and state
- Translation files in locales directories
