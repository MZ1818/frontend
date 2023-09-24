// import { useState, useEffect } from "react";
// import "./notess.scss";
// import {
//   IWorkspace,
//   ICreateNotesDto,
//   ICreateWorkspaceDto,
//   ICreateTaskDto,
//   ITask,
// } from "../../types/global.typing";

// import TextField from "@mui/material/TextField/TextField";
// import FormControl from "@mui/material/FormControl/FormControl";
// import InputLabel from "@mui/material/InputLabel/InputLabel";
// import Select from "@mui/material/Select/Select";
// import MenuItem from "@mui/material/MenuItem/MenuItem";
// import Button from "@mui/material/Button/Button";
// import { useNavigate } from "react-router-dom";
// import httpModule from "../../helpers/http.module";

// const AddNotes = () => {
//   const [notes, setNotes] = useState<ICreateNotesDto>({
//     notesTitle: "",
//     messagText: "",
//     taskId: "",
//   });
//   const [tasks, setTasks] = useState<ITask[]>([]);

//   const redirect = useNavigate();

//   useEffect(() => {
//     httpModule
//       .get<ITask[]>("/Task/Get")
//       .then((response) => {
//         setTasks(response.data);
//       })
//       .catch((error) => {
//         alert("Error");
//         console.log(error);
//       });
//   }, []);

//   const handleClickSaveBtn = () => {
//     if (
//       notes.notesTitle === "" ||
//       notes.messagText === "" ||
//       notes.taskId === ""
//     ) {
//       alert("Fill all fields");
//       return;
//     }
//     httpModule
//       .post("/Notes/Create", notes)
//       .then((responst) => redirect("/notess"))
//       .catch((error) => console.log(error));
//   };

//   const handleClickBackBtn = () => {
//     redirect("/notess");
//   };

//   return (
//     <div className="content">
//       <div className="add-notes">
//         <h2>Add New Notes</h2>
//         <TextField
//           autoComplete="off"
//           label="Title"
//           variant="outlined"
//           value={notes.notesTitle}
//           onChange={(e) => setNotes({ ...notes, notesTitle: e.target.value })}
//         />

//         <h2>Description</h2>
//         <TextField
//           autoComplete="off"
//           label="Description"
//           variant="outlined"
//           value={notes.messagText}
//           onChange={(e) => setNotes({ ...notes, messagText: e.target.value })}
//         />

//         <FormControl fullWidth>
//           <InputLabel>Task</InputLabel>
//           <Select
//             value={notes.taskId}
//             label="Task"
//             onChange={(e) => setNotes({ ...notes, taskId: e.target.value })}
//           >
//             {tasks.map((item) => (
//               <MenuItem key={item.id} value={item.id}>
//                 {item.title}
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

// export default AddNotes;

import { useState, useEffect } from "react";
import "./notess.scss";
import {
  IWorkspace,
  ICreateNotesDto,
  ICreateWorkspaceDto,
  ICreateTaskDto,
  ITask,
} from "../../types/global.typing";

import TextField from "@mui/material/TextField/TextField";
import FormControl from "@mui/material/FormControl/FormControl";
import InputLabel from "@mui/material/InputLabel/InputLabel";
import Select from "@mui/material/Select/Select";
import MenuItem from "@mui/material/MenuItem/MenuItem";
import Button from "@mui/material/Button/Button";
import { useNavigate } from "react-router-dom";
import httpModule from "../../helpers/http.module";

const AddNotes = () => {
  const [notes, setNotes] = useState<ICreateNotesDto>({
    sender: "",
    receiver: "",
    messagText: "",
    dateCreated: new Date(),
    taskId: "",
    status: true,
  });
  const [tasks, setTasks] = useState<ITask[]>([]);

  const redirect = useNavigate();

  useEffect(() => {
    httpModule
      .get<ITask[]>("/Task/Get")
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        alert("Error");
        console.log(error);
      });
  }, []);

  const handleClickSaveBtn = () => {
    if (
      notes.sender === "" ||
      notes.receiver === "" ||
      notes.messagText === "" ||
      notes.taskId === ""
    ) {
      alert("Fill all fields");
      return;
    }
    httpModule
      .post("/Notes/Create", notes)
      .then((responst) => redirect("/notes"))
      .catch((error) => console.log(error));
  };

  const handleClickBackBtn = () => {
    redirect("/notes");
  };

  return (
    <div className="content">
      <div className="add-notes">
        <h2>Sender Name</h2>
        <TextField
          autoComplete="off"
          label="Sender Name"
          variant="outlined"
          value={notes.sender}
          onChange={(e) => setNotes({ ...notes, sender: e.target.value })}
        />

        <h2>Receiver Name</h2>
        <TextField
          autoComplete="off"
          label="Receiver Name"
          variant="outlined"
          value={notes.receiver}
          onChange={(e) => setNotes({ ...notes, receiver: e.target.value })}
        />

        <h2>Message Text</h2>
        <TextField
          autoComplete="off"
          label="Message Text"
          variant="outlined"
          value={notes.messagText}
          onChange={(e) => setNotes({ ...notes, messagText: e.target.value })}
        />

        <FormControl fullWidth>
          <InputLabel>Task</InputLabel>
          <Select
            value={notes.taskId}
            label="Task"
            onChange={(e) => setNotes({ ...notes, taskId: e.target.value })}
          >
            {tasks.map((item) => (
              <MenuItem key={item.taskId} value={item.taskId}>
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

export default AddNotes;
