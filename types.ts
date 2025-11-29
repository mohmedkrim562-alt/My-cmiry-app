export enum Language {
  ARABIC = 'Arabic',
  ENGLISH = 'English',
  SPANISH = 'Spanish',
  FRENCH = 'French',
  GERMAN = 'German',
  CHINESE = 'Chinese (Simplified)',
  JAPANESE = 'Japanese',
  RUSSIAN = 'Russian',
  PORTUGUESE = 'Portuguese',
  HINDI = 'Hindi',
  TURKISH = 'Turkish',
  KOREAN = 'Korean',
  ITALIAN = 'Italian',
  DUTCH = 'Dutch',
  POLISH = 'Polish',
  SWEDISH = 'Swedish',
  THAI = 'Thai',
  VIETNAMESE = 'Vietnamese',
  INDONESIAN = 'Indonesian',
  GREEK = 'Greek'
}

export interface TranslationState {
  inputText: string;
  inputImage: string | null; // Base64 string
  targetLanguage: Language;
  translatedText: string;
  isLoading: boolean;
  error: string | null;
  mode: 'text' | 'image';
}

export const SUPPORTED_LANGUAGES = Object.values(Language);