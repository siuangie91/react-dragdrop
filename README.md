# Task/Project Drag-Drop

A simple, front-end only prototype of a drag-drop UI for adding, reorganizing, and deleting tasks. 

Exploring `Context`, `@reach/router`, higher order components, and decorators.

**Demo:** [http://projects.angiesiudevworks.com/reactdragdrop/](http://projects.angiesiudevworks.com/reactdragdrop/)

:warning:

**Note:** `draggable` is not supported on touch screen-only devices.

**Known-issue:** 404 page not working in demo link, but is fine when running a dev build. This has to do with server (which is on LAMP stack) configuration.

### To-do:
**Updates**
* [x] Fix slowness with `shouldComponentUpdate`
* [x] Use HOCs in conjunction with Context
* [x] Configure decorators

**Initial Launch**
* [x] Unit test
* [x] Add route `/detail/:id` that shows project details (name, ID, priority number)
* [x] Add edit functionality
* [x] Dynamic `ref`s
* [x] Add project IDs

## Functionality
1. The UI will display existing tasks (dummy data) on load.
2. Drag tasks to reprioritize them.
3. You can add tasks at a desired insertion point (index number). By default, it will be inserted at the end of the list.
    - If the task name is empty, you will get an error message.
4. You can delete tasks.
    - If the task list is empty, you will get a message.
5. Edit tasks by clicking on the pencil icon. Once you hit `Enter` or exit text area (e.g., `Esc` or click off), the change is saved automatically.
    - Max character length is 68. Hitting the max character length triggers a dismissable modal.
6. Navigate to project details with the "i" icon.

## Implementation
1. Feature is implemented using the HTML5 `draggable` property.
2. Dummy data are stored in `src/data/projects.json`.
3. I used the [`Context` API](https://reactjs.org/docs/context.html) to manage shared state between the input field (`ProjectInput`) and the task-list display (`ProjectsContainer`). 
4. Task editing was done by making the `span` containing the project node name `contenteditable` and `focus`ing the cursor into the `span`. `contenteditable` is reset to `false` on `blur` and the new project name is saved.
5. Routing is implemented with [Reach Router](https://reach.tech/router). While not necessarily valuable to this application, I wanted to practice creating routed applications. Additionally, I've used `react-router-dom` before and I wanted to try out something different.

## Dev Setup
1. `git clone` and `npm install`.
2. `npm start` to start application. `npm run test` to run tests.

## Console Messages
I kept my console messages in there because I like to keep a record of what my thought process was. However, I have put all these messages behind a cookie that expires after 24 hours so that not everyone can see them (unless you're reading this, of course :wink:). If you'd like to see the messages, run
```javascript
document.cookie="dev_console=true;"
```
in the console. Then refresh the page. Check the console again to see the messages! (Cookie is not necessary when in dev mode.)

Enhanced console logger is found in `src/helpers/index.js`:
```javascript
export function logMsg(...msgs) { // hide all console msgs behind a cookie
  if(dev_console) {
    console.log("[DEV CONSOLE MSG]: ", ...msgs);
  }
  // do nothing if no cookie!
}
```
