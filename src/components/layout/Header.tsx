'use client';

import Button from '@/components/ui/button';
import { Save, Share2, Settings } from 'lucide-react';

export default function Header() {
  const handleSave = () => {
    // TODO: 保存機能を実装
    console.log('保存');
  };

  const handleShare = () => {
    // TODO: 共有機能を実装
    console.log('共有');
  };

  const handleSettings = () => {
    // TODO: 設定機能を実装
    console.log('設定');
  };

  return (
    <header className="border-b bg-white px-4 py-3 shadow-sm">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-900 sm:text-2xl">
          漢字ビルダー
        </h1>
        
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleSave}
            className="flex items-center gap-2"
          >
            <Save className="h-4 w-4" />
            <span className="hidden sm:inline">保存</span>
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={handleShare}
            className="flex items-center gap-2"
          >
            <Share2 className="h-4 w-4" />
            <span className="hidden sm:inline">共有</span>
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={handleSettings}
            className="p-2"
          >
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
