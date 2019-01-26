# Simple Task/Project Drag-Drop

A simple, front-end only prototype of a drag-drop UI for adding, reorganizing, and deleting tasks.

_*Note: `draggable` is not supported on mobile browsers._

### Implementation
1. Feature is implemented using the HTML5 `draggable` property.
2. Dummy data are stored in `src/data/projects.json`.
    - Currently, the data only have one property, `name`. This is because I may add other properties later on.
3. I used the `Context` API to manage shared state. 