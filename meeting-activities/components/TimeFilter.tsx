'use client';

import { filterOptions, FilterValue } from '@/data/activities';
import { clsx } from 'clsx';

interface TimeFilterProps {
  value: FilterValue;
  onChange: (value: FilterValue) => void;
}

export function TimeFilter({ value, onChange }: TimeFilterProps) {
  return (
    <div className="relative">
      {/* Background pill container */}
      <div className="inline-flex items-center p-1.5 bg-gray-100 rounded-2xl">
        {filterOptions.map((option) => (
          <button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={clsx(
              'relative px-5 py-2.5 rounded-xl text-sm font-medium',
              'transition-all duration-300 ease-out',
              'focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2',
              value === option.value
                ? 'text-gray-900'
                : 'text-gray-500 hover:text-gray-700'
            )}
          >
            {/* Active indicator */}
            {value === option.value && (
              <span
                className={clsx(
                  'absolute inset-0 rounded-xl bg-white',
                  'shadow-sm',
                  'animate-scale-in'
                )}
              />
            )}
            <span className="relative z-10">{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

