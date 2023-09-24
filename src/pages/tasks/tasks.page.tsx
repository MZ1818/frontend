import { useEffect, useState } from "react";
import "./tasks.scss";
import httpModule from "../../helpers/http.module";
import { ITask } from "../../types/global.typing";
import { Button, CircularProgress } from "@mui/material";
import { Add } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import TasksGrid from "../../components/tasks/TasksGrid.component";

const Tasks = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const redirect = useNavigate();

  useEffect(() => {
    setLoading(true);
    httpModule
      .get<ITask[]>("/Task/Get")
      .then((response) => {
        setTasks(response.data);
        setLoading(false);
      })
      .catch((error) => {
        alert("Error");
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="content tasks">
      <div className="heading">
        <h2>Tasks</h2>
        {localStorage.getItem("usertype") === "Admin" ? (
          <Button variant="outlined" onClick={() => redirect("/tasks/add")}>
            <Add />
          </Button>
        ) : null}
      </div>
      {loading ? (
        <CircularProgress size={100} />
      ) : tasks.length === 0 ? (
        <h1>No Task</h1>
      ) : (
        <TasksGrid data={tasks} />
      )}
    </div>
  );
};

export default Tasks;
