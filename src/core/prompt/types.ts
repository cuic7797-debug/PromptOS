export interface PromptInput {
  role: string;
  goal: string;
  context: string;
  task: string;
  constraint: string;
  outputFormat: string;
  qualityCheck: string;
  aiAdapter: string;
}

export interface PromptResult {
  raw: string;
  optimized: string;
  score: number;
}