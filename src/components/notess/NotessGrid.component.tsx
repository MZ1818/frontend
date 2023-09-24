// import "./notess-grid.scss";
// import { Box } from "@mui/material";
// import { DataGrid } from "@mui/x-data-grid";
// import { GridColDef } from "@mui/x-data-grid/models";
// import moment from "moment";
// import React from "react";

// import { INotes } from "../../types/global.typing";
// import { grey } from "@mui/material/colors";

// const column: GridColDef[] = [
//   { field: "noteId", headerName: "ID", width: 200 },

//   { field: "messagText", headerName: "Message Text", width: 2000 },
// ];

// interface INotessGridProps {
//   data: INotes[];
// }

// const NotessGrid = ({ data }: INotessGridProps) => {
//   return (
//     <Box
//       sx={{
//         width: "100%",
//         height: 450,
//         border: 1,
//         borderRadius: "2px",
//         borderColor: "black",
//         padding: "4px 4px 4px 4px",
//       }}
//       className="notess-grid"
//     >
//       <DataGrid
//         rows={data}
//         columns={column}
//         getRowId={(row) => row.noteId}
//         rowHeight={50}
//       />
//     </Box>
//   );
// };

// export default NotessGrid;

import "./notess-grid.scss";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { GridColDef } from "@mui/x-data-grid/models";
import moment from "moment";
import React, { useState } from "react";

import { INotes } from "../../types/global.typing";
import { grey } from "@mui/material/colors";
import NotesModal from "../NotesModal";

const column: GridColDef[] = [
  { field: "noteId", headerName: "ID", width: 50 },
  { field: "taskId", headerName: "Task ID", width: 50 },
  { field: "sender", headerName: "Sender", width: 150 },
  { field: "receiver", headerName: "Receiver", width: 150 },
  { field: "messagText", headerName: "Message Text", width: 400 },
  { field: "dateCreated", headerName: "Date", width: 300 },
];

interface INotessGridProps {
  data: INotes[];
}

const NotessGrid = ({ data }: INotessGridProps) => {
  const [modal, setModal] = useState(false);
  const [id, setId] = useState(2);

  return (
    <Box
      sx={{
        width: "100%",
        height: 450,
        border: 1,
        borderRadius: "2px",
        borderColor: "black",
        padding: "4px 4px 4px 4px",
      }}
      className="notess-grid"
    >
      {/* {modal && <NotesModal />} */}
      {modal && <NotesModal id={id} modalState={true} setModal={setModal} />}
      <DataGrid
        rows={data}
        columns={column}
        getRowId={(row) => row.noteId}
        rowHeight={50}
        // onRowClick={(e) => {
        //   console.log(e);
        //   setModal(true);
        // }}
        onRowClick={(e) => {
          // console.log(e);
          //@ts-ignore
          setId(e.id);
          setModal(true);
        }}
      />
    </Box>
  );
};

export default NotessGrid;
