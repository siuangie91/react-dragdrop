# Task/Project Drag-Drop

> ### **:bangbang: This project is archived and no longer maintained.**

A simple, front-end only prototype of a drag-drop UI for adding, reorganizing, and deleting tasks.

Exploring `Context`, `@reach/router`, higher order components, and decorators.

## Demo

https://user-images.githubusercontent.com/11896191/204190720-b2709cba-db17-4278-bc49-7a8ea94ee834.mov

## Dev Setup

1. `git clone` and `npm install`.
2. `npm start` to start application. `npm run test` to run tests.

#### :warning: Known-issues :warning:

- `draggable` is not supported on touch screen-only devices.

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

### To-do:

**Updates**

- [x] Fix slowness with `shouldComponentUpdate`
- [x] Use HOCs in conjunction with Context
- [x] Configure decorators

**Initial Launch**

- [x] Add route `/detail/:id` that shows project details (name, ID, priority number)
- [x] Add edit functionality
- [x] Dynamic `ref`s
- [x] Add project IDs
