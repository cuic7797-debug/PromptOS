export type WorkflowStatus =
  | "pending"
  | "running"
  | "completed";



export interface WorkflowStep {

  id:string;

  title:string;

  description:string;

  prompt:string;

  status:WorkflowStatus;

  result?:string;

}



export interface WorkflowResult {

  industry:string;

  goal:string;

  steps:WorkflowStep[];

}