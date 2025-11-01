/**
 * キャンバス上のパーツ（配置済み部首）
 */
export interface KanjiPart {
  id: string;
  radicalId: string;
  position: {
    x: number;
    y: number;
  };
  transform: {
    scale: number;
    rotation: number;
  };
  zIndex: number;
}

/**
 * 作成した漢字データ
 */
export interface Kanji {
  id: string;
  name: string;
  parts: KanjiPart[];
  metadata: {
    on: string[];
    kun: string[];
    meaning: string;
  };
  settings: {
    fontFamily: FontFamily;
    canvasSize: number;
  };
  createdAt: string;
  updatedAt: string;
}

export type FontFamily = 
  | 'noto-sans'
  | 'noto-serif'
  | 'default';

export const FONT_FAMILY_LABELS: Record<FontFamily, string> = {
  'noto-sans': 'ゴシック体',
  'noto-serif': '明朝体',
  'default': 'デフォルト',
};

/**
 * キャンバスの状態管理
 */
export interface CanvasState {
  parts: KanjiPart[];
  selectedPartId: string | null;
  history: KanjiPart[][];
  historyIndex: number;
  canvasSize: number;
  gridEnabled: boolean;
  snapEnabled: boolean;
}

export type CanvasAction =
  | { type: 'ADD_PART'; payload: KanjiPart }
  | { type: 'UPDATE_PART'; payload: { id: string; updates: Partial<KanjiPart> } }
  | { type: 'DELETE_PART'; payload: string }
  | { type: 'SELECT_PART'; payload: string | null }
  | { type: 'DUPLICATE_PART'; payload: string }
  | { type: 'UNDO' }
  | { type: 'REDO' }
  | { type: 'CLEAR' };
