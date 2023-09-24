// import { Box } from "@mui/material"; //same as div but allows to use styling also
// import { DataGrid } from "@mui/x-data-grid"; //to present responses in table
// import { GridColDef } from "@mui/x-data-grid/models"; // represent colums part of table

// import { IWorkspace } from "../../types/global.typing";

// //defining columns part
// const column: GridColDef[] = [
//   { field: "workspaceId", headerName: "ID", width: 300 },
//   { field: "title", headerName: "Workspace Name", width: 400 },
//   { field: "companyName", headerName: "Company Name", width: 400 },
// ];

// interface IWorkspacesGridProps {
//   data: IWorkspace[];
// }

// const WorkspacesGrid = ({ data }: IWorkspacesGridProps) => {
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
//       className="companies-grid"
//     >
//       <DataGrid
//         rows={data} //importing data as props in rows
//         columns={column}
//         getRowId={(row) => row.workspaceId}
//         rowHeight={50}
//       />
//     </Box>
//   );
// };

// export default WorkspacesGrid;

import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { GridColDef } from "@mui/x-data-grid/models";

import { IWorkspace } from "../../types/global.typing";

const column: GridColDef[] = [
  { field: "workspaceId", headerName: "ID", width: 300 },
  { field: "title", headerName: "Title", width: 300 },
  { field: "comapanyId", headerName: "Company Id", width: 400 },
  { field: "companyName", headerName: "Company Name", width: 400 },
];

interface IWorkspacesGridProps {
  data: IWorkspace[];
}

const WorkspacesGrid = ({ data }: IWorkspacesGridProps) => {
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
      className="companies-grid"
    >
      <DataGrid
        rows={data}
        columns={column}
        getRowId={(row) => row.workspaceId}
        rowHeight={50}
      />
    </Box>
  );
};

export default WorkspacesGrid;
