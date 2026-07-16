export interface NavItem {
  path: string;
  label: string;
  icon: string;
  badge?: number;
}

export interface PromptTemplate {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  content: string;
  variables: string[];
  aiModels: string[];
  isHot?: boolean;
  isNew?: boolean;
  usage?: number;
}

export interface PromptHistory {
  id: string;
  title: string;
  content: string;
  model: string;
  createdAt: number;
  quality?: number;
  favorite?: boolean;
  tags?: string[];
}

export interface UserSettings {
  theme: 'dark' | 'light' | 'system';
  language: string;
  autoSave: boolean;
  defaultModel: string;
  defaultMode: 'basic' | 'advanced' | 'expert';
}

export interface AppState {
  sidebarOpen: boolean;
  currentPage: string;
  isMobile: boolean;
}

export interface GeneratorForm {

  role:string;

  goal:string;

  context:string;

  task:string;

  constraint:string;

  outputFormat:string;

  qualityCheck:string;

  aiAdapter:string;

  mode:'basic' | 'advanced' | 'expert';

}



export interface QualityScore {

  clarity:number;

  specificity:number;

  structure:number;

  completeness:number;

  executability:number;

  overall:number;

  grade:string;

  suggestions:string[];

}

export interface AIModel {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: 'chat' | 'image' | 'video' | 'code';
}
