'use client';

import { useState, useMemo } from 'react';
import radicalsData from '@/data/radicals.json';
import type { Radical } from '@/lib/types/radical';

interface PartsListProps {
  searchQuery?: string;
  selectedGrade?: number | null;
}

export default function PartsList({ searchQuery = '', selectedGrade = null }: PartsListProps) {
  const [radicals] = useState<Radical[]>(radicalsData as Radical[]);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // 検索とフィルターを適用
  const filteredRadicals = useMemo(() => {
    return radicals.filter((radical) => {
      // 学年フィルター
      if (selectedGrade !== null && radical.grade !== selectedGrade) {
        return false;
      }

      // 検索クエリフィルター
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        return (
          radical.character.includes(query) ||
          radical.name.toLowerCase().includes(query) ||
          radical.meaning.toLowerCase().includes(query) ||
          radical.keywords.some(keyword => keyword.toLowerCase().includes(query))
        );
      }

      return true;
    });
  }, [radicals, searchQuery, selectedGrade]);

  const handleRadicalClick = (radical: Radical) => {
    setSelectedId(radical.id);
    console.log('選択された部首:', radical);
    // TODO: キャンバスに追加する処理
  };

  if (filteredRadicals.length === 0) {
    return (
      <div className="py-8 text-center text-gray-500">
        <p className="text-sm">該当する部首が見つかりません</p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {filteredRadicals.map((radical) => (
        <div
          key={radical.id}
          onClick={() => handleRadicalClick(radical)}
          className={`
            cursor-pointer rounded-lg border-2 bg-white p-3 transition-all
            hover:border-kanji-primary hover:bg-blue-50
            touch-target
            ${selectedId === radical.id ? 'border-kanji-primary bg-blue-50' : 'border-gray-200'}
          `}
        >
          <div className="flex items-center gap-3">
            <span className="text-3xl select-none">{radical.character}</span>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-gray-900 truncate">
                {radical.name}
              </div>
              <div className="text-xs text-gray-600 truncate">
                {radical.meaning} · {radical.strokes}画
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
