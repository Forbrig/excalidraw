# Rulers Feature Test Instructions

## Quick Test Steps

1. **Open the app** in your browser at http://localhost:3000
2. **Look for the main menu** (hamburger icon ☰ in the top-left)
3. **Click the main menu** to open it
4. **Find "Toggle rulers"** in the menu list
5. **Click "Toggle rulers"** to enable/disable the rulers feature

## Expected Behavior

### When rulers are ENABLED:

- You should see ruler markings along the **top** and **left** edges of the canvas
- Rulers show coordinate values that correspond to the canvas coordinate system
- Rulers should update/move as you pan the canvas
- The menu item should indicate the current state

### When rulers are DISABLED:

- No ruler markings should be visible
- Clean canvas edges without any overlays

## Testing Scenarios

1. **Initial State**: Check if rulers are off by default
2. **Toggle On**: Enable rulers and verify they appear
3. **Canvas Interaction**:
   - Pan the canvas and verify rulers update
   - Zoom in/out and check ruler scaling
4. **Toggle Off**: Disable rulers and verify they disappear
5. **Persistence**: Refresh the page and check if the rulers setting is remembered

## Troubleshooting

If you don't see the "Toggle rulers" option:

1. Make sure you're looking in the **main menu** (☰ icon)
2. Try refreshing the page (Cmd/Ctrl + R)
3. Check the browser console for any errors (F12 → Console tab)

## Success Criteria

✅ Menu item "Toggle rulers" is visible in the main menu  
✅ Clicking the menu item toggles rulers on/off  
✅ Rulers appear along top and left canvas edges when enabled  
✅ Rulers display coordinate markings  
✅ Rulers update when panning/zooming the canvas  
✅ Setting persists across page refreshes
