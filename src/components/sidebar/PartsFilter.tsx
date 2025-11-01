'use client';

interface PartsFilterProps {
  selectedGrade: number | null;
  onGradeChange: (grade: number | null) => void;
}

export default function PartsFilter({ selectedGrade, onGradeChange }: PartsFilterProps) {
  const grades = [
    { value: 1, label: '小1' },
    { value: 2, label: '小2' },
    { value: 3, label: '小3' },
    { value: 4, label: '小4' },
    { value: 5, label: '小5' },
    { value: 6, label: '小6' },
    { value: 7, label: '中1' },
    { value: 8, label: '中2' },
    { value: 9, label: '中3' },
  ];

  return (
    <div className="space-y-3">
      <label className="text-sm font-semibold text-gray-700">
        学年で絞り込み
      </label>
      
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onGradeChange(null)}
          className={`
            rounded-md px-3 py-1.5 text-sm font-medium transition-colors
            touch-target
            ${selectedGrade === null
              ? 'bg-kanji-primary text-white shadow-sm'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }
          `}
        >
          すべて
        </button>
        
        {grades.map((grade) => (
          <button
            key={grade.value}
            onClick={() => onGradeChange(grade.value)}
            className={`
              rounded-md px-3 py-1.5 text-sm font-medium transition-colors
              touch-target
              ${selectedGrade === grade.value
                ? 'bg-kanji-primary text-white shadow-sm'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }
            `}
          >
            {grade.label}
          </button>
        ))}
      </div>
    </div>
  );
}
