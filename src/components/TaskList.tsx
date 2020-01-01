// src/components/TaskList.js

import React from "react";

import Task, { ITask } from "./Task";
import { connect } from "react-redux";
import { archiveTask, pinTask, TaskActionTypes } from "../lib/redux";
import { Dispatch } from "redux";

interface PureTaskListProps {
  loading?: boolean;
  tasks: ITask[];
  onArchiveTask: (id: string) => void;
  onPinTask: (id: string) => void;
}

export const PureTaskList: React.FC<PureTaskListProps> = ({
  loading,
  tasks,
  onPinTask,
  onArchiveTask
}) => {
  const events = {
    onPinTask,
    onArchiveTask
  };

  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );

  if (loading) {
    return (
      <div className="list-items">
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className="list-items">
        <div className="wrapper-message">
          <span className="icon-check" />
          <div className="title-message">You have no tasks</div>
          <div className="subtitle-message">Sit back and relax</div>
        </div>
      </div>
    );
  }

  const tasksInOrder = [
    ...tasks.filter(t => t.state === "TASK_PINNED"),
    ...tasks.filter(t => t.state !== "TASK_PINNED")
  ];

  return (
    <div className="list-items">
      {tasksInOrder.map(task => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  );
};

export default connect(
  ({ tasks }: { tasks: ITask[] }) => ({
    tasks: tasks.filter(
      t => t.state === "TASK_INBOX" || t.state === "TASK_PINNED"
    )
  }),
  (dispatch: Dispatch<TaskActionTypes>) => ({
    onArchiveTask: (id: string) => dispatch(archiveTask(id)),
    onPinTask: (id: string) => dispatch(pinTask(id))
  })
)(PureTaskList);
