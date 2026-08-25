export interface QuranReference {
  surahName: string;
  surahNumber: number;
  ayahNumber: number;
  exactText: string;
  audioSource?: string;
  source: string;
}

export interface ClickablePhrase {
  id: string;
  text: string | string[];
  explanation: string;
  status: "VERIFIED" | "NEEDS_MANUAL_VERIFICATION";
  quranReferences: QuranReference[];
  scholarlySources: string[];
}

export interface PoemVerseData {
  id: string;
  shatr1: string;
  shatr2: string;
  interactivePhrases: ClickablePhrase[];
}

export interface SectionData {
  title: string;
  description: string;
  verses: PoemVerseData[];
}
