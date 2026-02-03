
import { AgentType, ZoneType, Agent, WorkZone } from './types';

export const COLORS = {
  BACKGROUND: '#050505',
  GRID: '#1a2e05',
  NEON_GREEN: '#ccff00',
  NEON_GREEN_DIM: '#4d6100',
  CLAUDE: '#ccff00',
  CURSOR: '#ffffff',
  CODEX: '#888888',
  APP: '#ccff00',
  WEBSITE: '#84cc16',
  BLUEPRINT: '#4d7c0f',
  TEXT_LIGHT: '#f3f4f6'
};

export const INITIAL_AGENTS: Agent[] = [
  { id: '1', name: 'Claude-3.5', type: AgentType.CLAUDE, position: [2, 0, 2], color: COLORS.NEON_GREEN },
  { id: '2', name: 'Cursor-Dev', type: AgentType.CURSOR, position: [-2, 0, 1], color: COLORS.CURSOR },
  { id: '3', name: 'Codex-Core', type: AgentType.CODEX, position: [0, 0, -3], color: COLORS.CODEX },
  { id: '4', name: 'Gemini-Bot', type: AgentType.GEMINI, position: [4, 0, -1], color: COLORS.NEON_GREEN_DIM }
];

export const INITIAL_ZONES: WorkZone[] = [
  { id: 'z1', name: 'Mobile App', type: ZoneType.APP, position: [-3, 0, -3], color: COLORS.NEON_GREEN },
  { id: 'z2', name: 'Portfolio Site', type: ZoneType.WEBSITE, position: [3, 0, -4], color: COLORS.NEON_GREEN_DIM },
  { id: 'z3', name: 'Logic Drafts', type: ZoneType.BLUEPRINT, position: [-4, 0, 3], color: COLORS.NEON_GREEN }
];
