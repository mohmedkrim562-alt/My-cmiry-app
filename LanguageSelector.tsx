import React from 'react';
import { Language, SUPPORTED_LANGUAGES } from '../types';

interface LanguageSelectorProps {
  selectedLanguage: Language;
  onSelect: (lang: Language) => void;
  disabled?: boolean;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ selectedLanguage, onSelect, disabled }) => {
  return (
    <div className="relative group">
      <label htmlFor="language-select" className="block text-sm font-bold text-stone-700 mb-2">
        الترجمة إلى:
      </label>
      <div className="relative">
        <select
          id="language-select"
          value={selectedLanguage}
          onChange={(e) => onSelect(e.target.value as Language)}
          disabled={disabled}
          className="block w-full rounded-xl border-stone-300 bg-[#FAF7F2] py-3 pr-4 pl-10 text-stone-800 shadow-sm ring-1 ring-inset ring-stone-300 focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 sm:text-base sm:leading-6 transition-all disabled:bg-stone-200 disabled:text-stone-500 cursor-pointer appearance-none hover:shadow-md hover:bg-[#fffbf5]"
        >
          {SUPPORTED_LANGUAGES.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-3 text-emerald-600">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;