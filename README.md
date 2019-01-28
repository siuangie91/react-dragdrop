# Simple Task/Project Drag-Drop

A simple, front-end only prototype of a drag-drop UI for adding, reorganizing, and deleting tasks.

**Demo:** [http://projects.angiesiudevworks.com/reactdragdrop/](http://projects.angiesiudevworks.com/reactdragdrop/)

:warning: _*Note:_ `draggable` _is not supported on touch screen-only devices._ :warning:

### Functionality
1. The UI will display existing tasks (dummy data) on load.
2. Drag tasks to reprioritize them.
3. You can add tasks at a desired insertion point (index number). By default, it will be inserted at the end of the list.
    - If the task name is empty, you will get an error message.
4. You can delete tasks.
    - If the task list is empty, you will get a message.

### Implementation
1. Feature is implemented using the HTML5 `draggable` property.
2. Dummy data are stored in `src/data/projects.json`.
    - Currently, the data only have one property, `name`. This is because I may add other properties later on.
3. I used the [`Context` API](https://reactjs.org/docs/context.html) to manage shared state between the input field (`ProjectInput`) and the task-list display (`ProjectsContainer`). 

### Console Messages
I kept my console messages in there because I like to keep a record of what my thought process was. However, I have put all these messages behind a cookie that expires after 24 hours so that not everyone can see them (unless you're reading this, of course :wink:). If you'd like to see the messages, run
```javascript
document.cookie="dev_console=true;"
```
in the console. Then refresh the page. Check the console again to see the messages! 

Enhanced console logger is found in `src/helpers/index.js`:
```javascript
export function logMsg(...msgs) { // hide all console msgs behind a cookie
  if(dev_console) {
    console.log("[DEV CONSOLE MSG]: ", ...msgs);
  }
  // do nothing if no cookie!
}
```