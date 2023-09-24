import * as React from "react";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { useEffect, useState } from "react";
import httpModule from "../helpers/http.module";

export default function NotesModal(props) {
  // const [open, setOpen] = React.useState(true);
  // console.log("In modal");
  const [open, setOpen] = useState(props.modalState);
  console.log("In modal");
  const id = props.id;
  console.log(id);
  const [notesData, setNotesData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    httpModule
      .get(`/Notes?noteId=${id}`)
      .then((response) => {
        console.log(response.data);
        setNotesData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        alert("Error");
        console.log(error);
        setLoading(false);
      });
  }, []);
  console.log(notesData);

  return (
    <React.Fragment>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        // open={open}
        // onClose={() => setOpen(false)}
        open={props.modalState}
        onClose={() => props.setModal(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 500,
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
          }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
            mb={1}
          >
            Notes
          </Typography>
          {notesData && (
            <Typography id="modal-desc" textColor="text.tertiary">
              <h3>Id : {notesData[0].noteId}</h3>
              <h3>DateCreated : {notesData[0].dateCreated}</h3>
              <h3>Receiver : {notesData[0].receiver}</h3>
              <h3>Sender : {notesData[0].sender}</h3>
              <h3>Message Text : {notesData[0].sender}</h3>
              <h3>Status : {notesData[0].status ? "True" : "False"}</h3>
              <h3>TaskId : {notesData[0].taskId}</h3>

            </Typography>
          )}
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}
