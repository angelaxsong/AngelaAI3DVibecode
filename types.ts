
export enum AgentType {
  CLAUDE = 'Claude',
  CURSOR = 'Cursor',
  CODEX = 'Codex',
  GPT = 'GPT-4',
  GEMINI = 'Gemini'
}

export interface Agent {
  id: string;
  name: string;
  type: AgentType;
  position: [number, number, number];
  color: string;
}

export enum ZoneType {
  APP = 'App Development',
  WEBSITE = 'Website Design',
  RESEARCH = 'Research Lab',
  BLUEPRINT = 'Blueprint Archive'
}

export interface WorkZone {
  id: string;
  name: string;
  type: ZoneType;
  position: [number, number, number];
  color: string;
}
