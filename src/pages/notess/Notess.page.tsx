import { useEffect, useState } from "react";
import "./notess.scss";
import httpModule from "../../helpers/http.module";
import { INotes } from "../../types/global.typing";
import { Button, CircularProgress } from "@mui/material";
import { Add } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import NotessGrid from "../../components/notess/NotessGrid.component";

const Notess = () => {
  const [notess, setNotess] = useState<INotes[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const redirect = useNavigate();

  useEffect(() => {
    setLoading(true);
    httpModule
      .get<INotes[]>("/Notes/Get")
      .then((response) => {
        setNotess(response.data);
        console.log(response.data)
        setLoading(false);
      })
      .catch((error) => {
        alert("Error");
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="content notess">
      <div className="heading">
        <h2>Notess</h2>
        {localStorage.getItem("usertype") === "Admin" ? (
          <Button variant="outlined" onClick={() => redirect("/notes/add")}>
            <Add />
          </Button>
        ) : null}
      </div>
      {loading ? (
        <CircularProgress size={100} />
      ) : notess.length === 0 ? (
        <h1>No Notes</h1>
      ) : (
        <NotessGrid data={notess} />
      )}
    </div>
  );
};

export default Notess;
