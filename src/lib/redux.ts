// src/lib/redux.js

// A simple redux store/actions/reducer implementation.
// A true app would be more complex and separated into different files.
import { createStore } from "redux";
import { ITask } from "../components/Task";

// The actions are the "names" of the changes that can happen to the store

export const ARCHIVE_TASK = "ARCHIVE_TASK";
export const PIN_TASK = "PIN_TASK";

interface ArchiveTaskAction {
  type: typeof ARCHIVE_TASK;
  id: string;
}
interface PinTaskAction {
  type: typeof PIN_TASK;
  id: string;
}

export type TaskActionTypes = ArchiveTaskAction | PinTaskAction;

// The action creators bundle actions with the data required to execute them
export const archiveTask = (id: string): TaskActionTypes => ({
  type: ARCHIVE_TASK,
  id
});
export const pinTask = (id: string): TaskActionTypes => ({
  type: PIN_TASK,
  id
});

export interface TaskState {
  tasks: ITask[];
}

const initialState: TaskState = {
  tasks: []
};

// All our reducers simply change the state of a single task.
function taskStateReducer(taskState: string) {
  return (state: TaskState, action: TaskActionTypes) => {
    return {
      ...state,
      tasks: state.tasks.map(task =>
        task.id === action.id ? { ...task, state: taskState } : task
      )
    };
  };
}

// The reducer describes how the contents of the store change for each action
export const reducer = (state = initialState, action: TaskActionTypes) => {
  switch (action.type) {
    case ARCHIVE_TASK:
      return taskStateReducer("TASK_ARCHIVED")(state, action);
    case PIN_TASK:
      return taskStateReducer("TASK_PINNED")(state, action);
    default:
      return state;
  }
};

// The initial state of our store when the app loads.
// Usually you would fetch this from a server
const defaultTasks = [
  { id: "1", title: "Something", state: "TASK_INBOX" },
  { id: "2", title: "Something more", state: "TASK_INBOX" },
  { id: "3", title: "Something else", state: "TASK_INBOX" },
  { id: "4", title: "Something again", state: "TASK_INBOX" }
];

// We export the constructed redux store
export default createStore(reducer, { tasks: defaultTasks });
