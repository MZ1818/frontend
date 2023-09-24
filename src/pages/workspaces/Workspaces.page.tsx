import { useEffect, useState } from "react";
import "./workspaces.scss";
import httpModule from "../../helpers/http.module";
import { IWorkspace } from "../../types/global.typing";
import { Button, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Add } from "@mui/icons-material";
import WorkspacesGrid from "../../components/workspaces/WorkspacesGrid.component"; //datas from grid part

const Workspaces = () => {
  const [workspaces, setWorkspaces] = useState<IWorkspace[]>([]); //creating states with interface
  const [loading, setLoading] = useState<boolean>(false); //for loading
  const redirect = useNavigate(); //for navigation to be done in button to direct to add part below

  useEffect(() => {
    setLoading(true);
    httpModule
      .get<IWorkspace[]>("/Workspace/Get")
      .then((response) => {
        setWorkspaces(response.data);
        setLoading(false);
      })
      .catch((error) => {
        alert("Error");
        console.log(error);
        setLoading(false);
      });
  }, []);

  console.log(workspaces);

  //if admin then only it will redirect to add part else not
  return (
    <div className="content workspaces">
      <div className="heading">
        <h2>Workspaces</h2>
        {localStorage.getItem("usertype") === "Admin" ? (
          <Button
            variant="outlined"
            onClick={() => redirect("/workspaces/add")}
          >
            <Add />
          </Button>
        ) : null}
      </div>
      {loading ? (
        <CircularProgress size={100} />
      ) : workspaces.length === 0 ? (
        <h1>No Workspace</h1>
      ) : (
        <WorkspacesGrid data={workspaces} />
      )}
    </div>
    //on loading circular dia will be shown & if workspace in empty 'no workspace shown'
    //,,else it will be shown from workspace-grid import
  );
};

export default Workspaces;
