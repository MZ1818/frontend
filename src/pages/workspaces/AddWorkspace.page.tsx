// import React from "react";
// import { ICreateWorkspaceDto } from "../../types/global.typing"; //imported create interface
// import { useState } from "react";
// import {} from "@mui/material";
// import TextField from "@mui/material/TextField/TextField";
// import Button from "@mui/material/Button/Button";
// import { useNavigate } from "react-router-dom";
// import httpModule from "../../helpers/http.module";
// import "./workspaces.scss";

// const AddWorkspace = () => {
//   const [workspace, setWorkspace] = useState<ICreateWorkspaceDto>({
//     name: "",
//     companyName: "",
//   }); //state created for workspace with initial name & c name as empty

//   const redirect = useNavigate();

//   //arow fun will check both fields , if emptyreturn an alert | else will create workspace and store in it & redirect to workspace page
//   const handleClickSaveBtn = () => {
//     if (workspace.name === "" || workspace.companyName === "") {
//       alert("Fill all fields");
//       return;
//     }
//     httpModule
//       .post("/Workspace/Create", workspace)
//       .then((responst) => redirect("/workspaces"))
//       .catch((error) => console.log(error));
//   };

//   //back button arrow fun to redirect back to workspace
//   const handleClickBackBtn = () => {
//     redirect("/workspaces");
//   };

//   return (
//     <div className="content">
//       <div className="add-workspace">
//         <h2>Add New Workspace</h2>
//         <TextField
//           autoComplete="off" //textfield imported from mui,label,value,onchange set on it
//           label="Workspace Name"
//           variant="outlined"
//           value={workspace.name}
//           onChange={(e) => setWorkspace({ ...workspace, name: e.target.value })}
//         />

//         <h2>Company Name</h2>
//         <TextField
//           autoComplete="off"
//           label="Company Name"
//           variant="outlined"
//           value={workspace.companyName}
//           onChange={(e) =>
//             setWorkspace({ ...workspace, companyName: e.target.value })
//           }
//         />
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
// export default AddWorkspace;

import React from "react";
import { ICreateWorkspaceDto } from "../../types/global.typing";
import { useState } from "react";
import {} from "@mui/material";
import TextField from "@mui/material/TextField/TextField";
import Button from "@mui/material/Button/Button";
import { useNavigate } from "react-router-dom";
import httpModule from "../../helpers/http.module";
import "./workspaces.scss";

const AddWorkspace = () => {
  const [workspace, setWorkspace] = useState<ICreateWorkspaceDto>({
    title: "",
    comapanyId: "",
    companyName: "",
  });
  const redirect = useNavigate();

  const handleClickSaveBtn = () => {
    if (
      workspace.title === "" ||
      workspace.comapanyId === "" ||
      workspace.companyName === ""
    ) {
      alert("Fill all fields");
      return;
    }
    httpModule
      .post("/Workspace/Create", workspace)
      .then((responst) => redirect("/workspaces"))
      .catch((error) => console.log(error));
  };

  const handleClickBackBtn = () => {
    redirect("/workspaces");
  };

  return (
    <div className="content">
      <div className="add-workspace">
        <h2>Add New Workspace</h2>
        <TextField
          autoComplete="off"
          label="Workspace Title"
          variant="outlined"
          value={workspace.title}
          onChange={(e) =>
            setWorkspace({ ...workspace, title: e.target.value })
          }
        />
        <h2>Company Id</h2>
        <TextField
          autoComplete="off"
          label="Company Id"
          variant="outlined"
          value={workspace.comapanyId}
          onChange={(e) =>
            setWorkspace({ ...workspace, comapanyId: e.target.value })
          }
        />

        <h2>Company Name</h2>
        <TextField
          autoComplete="off"
          label="Company Name"
          variant="outlined"
          value={workspace.companyName}
          onChange={(e) =>
            setWorkspace({ ...workspace, companyName: e.target.value })
          }
        />
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
export default AddWorkspace;
