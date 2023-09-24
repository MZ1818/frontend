import "./tasks-grid.scss";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { GridColDef } from "@mui/x-data-grid/models";
import moment from "moment";
import React from "react";
import { ITask } from "../../types/global.typing";

const column: GridColDef[] = [
  { field: "taskId", headerName: "ID", width: 200 },
  { field: "workspaceId", headerName: "Workspace ID", width: 200 },
  { field: "title", headerName: "Title", width: 300 },
  { field: "titleDescription", headerName: "Description", width: 2000 },
];

interface ITasksGridProps {
  data: ITask[];
}

const TasksGrid = ({ data }: ITasksGridProps) => {
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
      className="tasks-grid"
    >
      <DataGrid
        rows={data}
        columns={column}
        getRowId={(row) => row.taskId}
        rowHeight={50}
      />
    </Box>
  );
};

export default TasksGrid;
