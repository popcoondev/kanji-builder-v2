/**
 * 部首データの型定義
 */
export interface Radical {
  id: string;
  character: string;
  name: string;
  nameKana: string;
  readings: {
    on: string[];
    kun: string[];
  };
  meaning: string;
  origin: string;
  grade: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  strokes: number;
  category: RadicalCategory;
  keywords: string[];
}

export type RadicalCategory = 
  | 'person'      // 人部
  | 'nature'      // 自然
  | 'animal'      // 動物
  | 'plant'       // 植物
  | 'body'        // 身体
  | 'object'      // 物品
  | 'action'      // 動作
  | 'shape'       // 形状
  | 'number'      // 数字
  | 'other';      // その他

export const RADICAL_CATEGORY_LABELS: Record<RadicalCategory, string> = {
  person: '人',
  nature: '自然',
  animal: '動物',
  plant: '植物',
  body: '身体',
  object: '物品',
  action: '動作',
  shape: '形状',
  number: '数字',
  other: 'その他',
};
