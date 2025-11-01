'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import PartsList from '@/components/sidebar/PartsList';
import PartsSearch from '@/components/sidebar/PartsSearch';
import PartsFilter from '@/components/sidebar/PartsFilter';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGrade, setSelectedGrade] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'parts' | 'canvas'>('parts');

  return (
    <div className="flex h-screen flex-col bg-gray-50">
      <Header />
      
      {/* デスクトップ: サイドバイサイド表示 */}
      <main className="hidden md:flex flex-1 overflow-hidden">
        {/* サイドバー */}
        <aside className="w-80 border-r bg-white overflow-y-auto">
          <div className="p-4 space-y-4">
            <div>
              <h2 className="text-lg font-semibold mb-3 text-gray-900">
                パーツ選択
              </h2>
              <PartsSearch 
                value={searchQuery}
                onChange={setSearchQuery}
              />
            </div>
            
            <PartsFilter
              selectedGrade={selectedGrade}
              onGradeChange={setSelectedGrade}
            />
            
            <div className="pt-2">
              <PartsList 
                searchQuery={searchQuery}
                selectedGrade={selectedGrade}
              />
            </div>
          </div>
        </aside>

        {/* キャンバスエリア */}
        <div className="flex-1 bg-gray-100 p-8 overflow-auto">
          <div className="flex h-full items-center justify-center">
            <div className="relative">
              <div className="h-[500px] w-[500px] rounded-lg border-2 border-gray-300 bg-white shadow-lg">
                {/* TODO: Canvas コンポーネント */}
                <div className="flex h-full items-center justify-center">
                  <div className="text-center text-gray-400">
                    <p className="text-lg font-medium mb-2">キャンバス</p>
                    <p className="text-sm">左から部首を選んで配置してください</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* モバイル: タブ切り替え表示 */}
      <main className="md:hidden flex-1 overflow-hidden flex flex-col">
        {/* タブ切り替えボタン */}
        <div className="flex border-b bg-white">
          <button
            onClick={() => setActiveTab('parts')}
            className={`
              flex-1 py-3 px-4 text-sm font-medium transition-colors
              ${activeTab === 'parts' 
                ? 'border-b-2 border-kanji-primary text-kanji-primary' 
                : 'text-gray-600 hover:text-gray-900'
              }
            `}
          >
            パーツ選択
          </button>
          <button
            onClick={() => setActiveTab('canvas')}
            className={`
              flex-1 py-3 px-4 text-sm font-medium transition-colors
              ${activeTab === 'canvas' 
                ? 'border-b-2 border-kanji-primary text-kanji-primary' 
                : 'text-gray-600 hover:text-gray-900'
              }
            `}
          >
            キャンバス
          </button>
        </div>

        {/* タブコンテンツ */}
        <div className="flex-1 overflow-hidden">
          {activeTab === 'parts' && (
            <div className="h-full overflow-y-auto bg-white p-4 space-y-4">
              <PartsSearch 
                value={searchQuery}
                onChange={setSearchQuery}
              />
              <PartsFilter
                selectedGrade={selectedGrade}
                onGradeChange={setSelectedGrade}
              />
              <PartsList 
                searchQuery={searchQuery}
                selectedGrade={selectedGrade}
              />
            </div>
          )}

          {activeTab === 'canvas' && (
            <div className="h-full bg-gray-100 p-4 overflow-auto">
              <div className="flex items-center justify-center min-h-full">
                <div className="w-full max-w-[400px]">
                  <div className="aspect-square rounded-lg border-2 border-gray-300 bg-white shadow-lg">
                    {/* TODO: Canvas コンポーネント */}
                    <div className="flex h-full items-center justify-center">
                      <div className="text-center text-gray-400 p-4">
                        <p className="text-base font-medium mb-2">キャンバス</p>
                        <p className="text-sm">
                          「パーツ選択」タブから部首を選んでください
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* フッター（メタデータ入力欄） */}
      <footer className="border-t bg-white p-4">
        <div className="max-w-4xl mx-auto space-y-2">
          <div className="text-sm font-semibold text-gray-700 mb-2">
            漢字の情報
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="音読み（例: セイ）"
              className="rounded border-2 border-gray-200 px-3 py-2 text-sm focus:border-kanji-primary focus:outline-none"
            />
            <input
              type="text"
              placeholder="訓読み（例: い-きる）"
              className="rounded border-2 border-gray-200 px-3 py-2 text-sm focus:border-kanji-primary focus:outline-none"
            />
          </div>
          <input
            type="text"
            placeholder="意味（例: 生きる、命）"
            className="w-full rounded border-2 border-gray-200 px-3 py-2 text-sm focus:border-kanji-primary focus:outline-none"
          />
        </div>
      </footer>
    </div>
  );
}
