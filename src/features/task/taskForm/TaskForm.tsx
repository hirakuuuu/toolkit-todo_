import React from "react";
import { useForm } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import styles from "./TaskForm.module.scss";

// 型を定義
// バージョンの違いにより変数の後に？を付ける必要があるらしい
type Inputs = {
  taskTitle?: string;
};

const TaskForm: React.FC = () => {
  const { register, handleSubmit, reset } = useForm();

  // フォームで新しいタスクを追加
  const handleCreate = (data: Inputs) => {
    console.log(data);
    reset();
  };

  return (
    <div className={styles.root}>
      <form onSubmit={handleSubmit(handleCreate)} className={styles.form}>
        <TextField
          id="outlined-basic"
          label="New Task"
          variant="outlined"
          // バージョンの違いでこのようにinputRef とname をまとめて書かないとダメらしい
          // https://qiita.com/yoshiwo/items/bd22512f1c8de6005ba0
          {...register("taskTitle")}
          className={styles.text_field}
        />
      </form>
    </div>
  );
};

export default TaskForm;
