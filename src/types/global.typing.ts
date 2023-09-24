//whatever getting from get request of workspace
// export interface IWorkspace {
//   id: string;
//   name: string;
//   companyName: string;
// }
export interface IWorkspace {
  workspaceId: string;
  title: string;
  comapanyId: string;
  companyName: string;
}

//whatever creating for workspace
// export interface ICreateWorkspaceDto {
//   name: string;
//   companyName: string;
// }
export interface ICreateWorkspaceDto {
  title: string;
  comapanyId: string;
  companyName: string;
}

//whatever getting from get request of task
export interface ITask {
  taskId: string;
  title: string;
  titleDescription: string;
  workspaceId: string;
}
//whatever creating for task
export interface ICreateTaskDto {
  title: string;
  titleDescription: string;
  workspaceId: string;
}

//whatever getting from get request of notes
export interface INotes {
  id: string;
  notesTitle: string;
  messagText: string;
  taskId: string;
}

//whatever creating for notes
// export interface ICreateNotesDto {
//   notesTitle: string;
//   messagText: string;
//   taskId: string;
// }
export interface ICreateNotesDto {
  sender: string;
  receiver: string;
  messagText: string;
  dateCreated: Date;
  taskId: string;
  status: true;
}
