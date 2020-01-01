// src/components/Task.tsx

import React from "react";

export interface ITask {
  id: string;
  title: string;
  state: string;
}

interface TaskProps {
  task: ITask;
  onArchiveTask: (id: string) => void;
  onPinTask: (id: string) => void;
}

const Task: React.FC<TaskProps> = ({
  task: { id, title, state },
  onArchiveTask,
  onPinTask
}) => {
  return (
    <div className={`list-item ${state}`}>
      <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={state === "TASK_ARCHIVED"}
          disabled={true}
          name="checked"
        />
        <span className="checkbox-custom" onClick={() => onArchiveTask(id)} />
      </label>
      <div className="title" style={{ background: "green" }}>
        <input
          type="text"
          value={title}
          readOnly={true}
          placeholder="Input title"
        />
      </div>

      <div className="actions" onClick={event => event.stopPropagation()}>
        {state !== "TASK_ARCHIVED" && (
          <a onClick={() => onPinTask(id)}>
            <span className={`icon-star`} />
          </a>
        )}
      </div>
    </div>
  );
};

export default Task;
