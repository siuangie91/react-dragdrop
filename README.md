# Simple Task/Project Drag-Drop

A simple, front-end only prototype of a drag-drop UI for adding, reorganizing, and deleting tasks.

_*Note: `draggable` is not supported on mobile browsers._

### Implementation
1. Feature is implemented using the HTML5 `draggable` property.
2. Dummy data are stored in `src/data/projects.json`.
    - Currently, the data only have one property, `name`. This is because I may add other properties later on.
3. I used the `Context` API to manage shared state. 

### Functionality
1. The UI will display existing tasks (dummy data) on load.
2. You can add tasks at a desired insertion point (index number). By default, it will be inserted at the end of the list.
		- If the task name is empty, you will get an error message.
3. You can delete tasks.
		- If the task list is empty, you will get a message.