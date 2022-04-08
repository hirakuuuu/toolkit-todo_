import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import { createTask } from "../taskSlice";
import styles from "./TaskForm.module.scss";

// 型を定義
// バージョンの違いにより変数の後に？を付ける必要があるらしい
type Inputs = {
  taskTitle?: string;
};

type PropTypes = {
  edit?: boolean;
};

const TaskForm: React.FC<PropTypes> = ({ edit }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();

  // フォームで新しいタスクを追加
  const handleCreate = (data: Inputs) => {
    dispatch(createTask(data.taskTitle));
    reset();
  };

  const handleEdit = (data: Inputs) => {
    console.log(data);
  };

  return (
    <div className={styles.root}>
      <form
        onSubmit={edit ? handleSubmit(handleEdit) : handleSubmit(handleCreate)}
        className={styles.form}
      >
        <TextField
          id="outlined-basic"
          label={edit ? "Edit Task" : "New Task"}
          defaultValue={edit ? "defaultValue" : ""}
          variant="outlined"
          // バージョンの違いでこのようにinputRef とname をまとめて書かないとダメらしい
          // https://qiita.com/yoshiwo/items/bd22512f1c8de6005ba0
          {...register("taskTitle")}
          className={styles.text_field}
        />
        {edit ? (
          <div className={styles.button_wrapper}>
            <button type="submit" className={styles.submit_button}>
              Submit
            </button>
            <button type="button" className={styles.cancel_button}>
              Cancel
            </button>
          </div>
        ) : null}
      </form>
    </div>
  );
};

export default TaskForm;
