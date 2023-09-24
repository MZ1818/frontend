// import { useState, useEffect } from "react";
// import "./tasks.scss";
// import {
//   ITask,
//   ICreateWorkspaceDto,
//   ICreateTaskDto,
//   IWorkspace,
// } from "../../types/global.typing";

// import TextField from "@mui/material/TextField/TextField";
// import FormControl from "@mui/material/FormControl/FormControl";
// import InputLabel from "@mui/material/InputLabel/InputLabel";
// import Select from "@mui/material/Select/Select";
// import MenuItem from "@mui/material/MenuItem/MenuItem";
// import Button from "@mui/material/Button/Button";
// import { useNavigate } from "react-router-dom";
// import httpModule from "../../helpers/http.module";

// const AddTask = () => {
//   const [task, setTask] =
//     useState <
//     ICreateTaskDto >
//     {
//       title: "",
//       titleDescription: "",
//       workspaceId: "",
//     };
//   const [workspaces, setWorkspaces] = useState([]);

//   const redirect = useNavigate();

//   useEffect(() => {
//     httpModule
//       .get("/Workspace/Get") //we need to get all workspaces to later link its id below
//       .then((response) => {
//         setWorkspaces(response.data);
//       })
//       .catch((error) => {
//         alert("Error");
//         console.log(error);
//       });
//   }, []);

//   const handleClickSaveBtn = () => {
//     if (
//       task.title === "" ||
//       task.titleDescription === "" ||
//       task.workspaceId === ""
//     ) {
//       alert("Fill all fields");
//       return;
//     }
//     httpModule
//       .post("/Task/Create", task)
//       .then((responst) => redirect("/tasks"))
//       .catch((error) => console.log(error));
//   };

//   const handleClickBackBtn = () => {
//     redirect("/tasks");
//   };

//   return (
//     <div className="content">
//       <div className="add-task">
//         <h2>Add New Task</h2>
//         <TextField
//           autoComplete="off"
//           label="Title"
//           variant="outlined"
//           value={task.title}
//           onChange={(e) => setTask({ ...task, title: e.target.value })}
//         />

//         <h2>Description</h2>
//         <TextField
//           autoComplete="off"
//           label="Description"
//           variant="outlined"
//           value={task.titleDescription}
//           onChange={(e) =>
//             setTask({ ...task, titleDescription: e.target.value })
//           }
//         />

//         <FormControl fullWidth>
//           <InputLabel>Workspace</InputLabel>
//           <Select
//             value={task.workspaceId}
//             label="Workspace"
//             onChange={(e) => setTask({ ...task, workspaceId: e.target.value })}
//           >
//             {workspaces.map((item) => (
//               // console.log(item)
//               //@ts-ignore
//               <MenuItem key={item.id} value={item.id}>
//                 //@ts-ignore
//                 {item.name}
//               </MenuItem>
//             ))}
//           </Select>
//         </FormControl>

//         <div className="btns">
//           <Button
//             variant="outlined"
//             color="primary"
//             onClick={handleClickSaveBtn}
//           >
//             Save
//           </Button>
//           <Button
//             variant="outlined"
//             color="secondary"
//             onClick={handleClickBackBtn}
//           >
//             Back
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddTask;

import { useState, useEffect } from "react";
import "./tasks.scss";
import {
  ITask,
  ICreateWorkspaceDto,
  ICreateTaskDto,
  IWorkspace,
} from "../../types/global.typing";

import TextField from "@mui/material/TextField/TextField";
import FormControl from "@mui/material/FormControl/FormControl";
import InputLabel from "@mui/material/InputLabel/InputLabel";
import Select from "@mui/material/Select/Select";
import MenuItem from "@mui/material/MenuItem/MenuItem";
import Button from "@mui/material/Button/Button";
import { useNavigate } from "react-router-dom";
import httpModule from "../../helpers/http.module";

const AddTask = () => {
  const [task, setTask] = useState<ICreateTaskDto>({
    title: "",
    titleDescription: "",
    workspaceId: "",
  });
  const [workspaces, setWorkspaces] = useState<IWorkspace[]>([]);

  const redirect = useNavigate();

  useEffect(() => {
    httpModule
      .get<IWorkspace[]>("/Workspace/Get")
      .then((response) => {
        setWorkspaces(response.data);
      })
      .catch((error) => {
        alert("Error");
        console.log(error);
      });
  }, []);

  const handleClickSaveBtn = () => {
    if (
      task.title === "" ||
      task.titleDescription === "" ||
      task.workspaceId === ""
    ) {
      alert("Fill all fields");
      return;
    }
    httpModule
      .post("/Task/Create", task)
      .then((responst) => redirect("/tasks"))
      .catch((error) => console.log(error));
  };

  const handleClickBackBtn = () => {
    redirect("/tasks");
  };
  console.log(workspaces);
  return (
    <div className="content">
      <div className="add-task">
        <h2>Add New Task</h2>
        <TextField
          autoComplete="off"
          label="Title"
          variant="outlined"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
        />

        <h2>Description</h2>
        <TextField
          autoComplete="off"
          label="Description"
          variant="outlined"
          value={task.titleDescription}
          onChange={(e) =>
            setTask({ ...task, titleDescription: e.target.value })
          }
        />

        <FormControl fullWidth>
          <InputLabel>Workspace</InputLabel>
          <Select
            value={task.workspaceId}
            label="Workspace"
            onChange={(e) => setTask({ ...task, workspaceId: e.target.value })}
          >
            {workspaces.map((item) => (
              <MenuItem key={item.workspaceId} value={item.workspaceId}>
                {item.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <div className="btns">
          <Button
            variant="outlined"
            color="primary"
            onClick={handleClickSaveBtn}
          >
            Save
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleClickBackBtn}
          >
            Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
