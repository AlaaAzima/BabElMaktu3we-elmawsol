"use client";
import { ClickablePhrase } from "@/types";
import { X, Info, Book, ShieldCheck, AlertTriangle } from "lucide-react";
import { useEffect, useState } from "react";
import AudioPlayer from "./AudioPlayer";

interface Props {
  phrase: ClickablePhrase | null;
  onClose: () => void;
}

export default function QuranEvidencePanel({ phrase, onClose }: Props) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!phrase) return null;

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${mounted ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      
      <div className={`fixed top-0 left-0 h-full w-full md:w-[550px] md:max-w-full bg-brand-ivory shadow-2xl z-50 overflow-y-auto transform transition-transform duration-300 ease-in-out border-r-4 border-brand-gold ${mounted ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 pb-24">
          <div className="flex justify-between items-center mb-6 pb-4 border-b border-brand-cream sticky top-0 bg-brand-ivory z-10 pt-4">
            <h2 className="text-2xl font-bold font-amiri text-brand-darkGreen">
              {Array.isArray(phrase.text) ? phrase.text.join(' ') : phrase.text}
            </h2>
            <button 
              onClick={onClose}
              className="p-2 bg-brand-cream hover:bg-brand-gold hover:text-white rounded-full transition-colors text-brand-sageGreen"
              aria-label="إغلاق"
            >
              <X size={24} />
            </button>
          </div>

          <div className="space-y-6">
            {/* Status Badge */}
            {phrase.status === "VERIFIED" ? (
              <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-lg text-sm font-bold border border-green-200 w-full">
                <ShieldCheck size={20} />
                <span>موضع موثق ومطابق للمصحف العثماني</span>
              </div>
            ) : (
              <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-4 py-2 rounded-lg text-sm font-bold border border-amber-200 w-full">
                <AlertTriangle size={20} />
                <span>يحتاج إلى مراجعة وتدقيق</span>
              </div>
            )}

            {/* Explanation Section */}
            <div className="bg-white p-5 rounded-xl border border-brand-cream shadow-sm">
              <div className="flex items-center gap-2 mb-3 text-brand-gold">
                <Info size={20} />
                <h3 className="font-bold text-lg">الشرح والتوضيح</h3>
              </div>
              <p className="text-brand-darkGreen leading-loose text-lg font-naskh">
                {phrase.explanation}
              </p>
            </div>

            {/* Quranic References */}
            {phrase.quranReferences.length > 0 ? (
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-brand-gold border-b border-brand-cream pb-2">
                  <Book size={20} />
                  <h3 className="font-bold text-lg">الشواهد القرآنية ({phrase.quranReferences.length})</h3>
                </div>
                
                {phrase.quranReferences.map((ref, idx) => {
                  // To highlight the specific word in the Quran text, we can do a simple string replace
                  // but we need to be careful with diacritics. For now, we display the exact text fully written.
                  return (
                    <div key={idx} className="bg-white p-6 rounded-xl border border-brand-lightGold shadow-sm relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-2 h-full bg-brand-gold"></div>
                      
                      <div className="flex justify-between items-center mb-6 bg-brand-cream/50 py-3 px-4 rounded-lg border border-brand-cream">
                        <span className="font-bold text-brand-darkGreen text-lg">{ref.surahName}</span>
                        <span className="text-sm font-bold text-white bg-brand-sageGreen px-3 py-1 rounded-full shadow-inner">
                          آية {ref.ayahNumber}
                        </span>
                      </div>
                      
                      {/* FULL AYAH DISPLAY */}
                      <div className="my-8 px-2 relative">
                        <div className="absolute -right-4 -top-4 text-brand-cream text-6xl opacity-30 select-none font-serif">"</div>
                      <p className="font-amiri text-3xl md:text-4xl leading-loose md:leading-[2.2] text-center text-brand-darkGreen quran-text px-4 py-4">
                        {ref.exactText}
                      </p>
                        <div className="absolute -left-4 -bottom-4 text-brand-cream text-6xl opacity-30 select-none font-serif rotate-180">"</div>
                      </div>
                      
                      <div className="mt-6 pt-5 border-t border-brand-cream space-y-4 bg-brand-ivory/50 rounded-b-xl -mx-6 -mb-6 px-6 pb-6">
                        <div className="text-sm text-brand-sageGreen flex items-center gap-2 font-medium">
                          <Book size={16} className="text-brand-gold" />
                          <span>المصدر:</span> <span className="text-brand-darkGreen">{ref.source}</span>
                        </div>

                        {/* Audio Player for this specific Ayah */}
                        <AudioPlayer source={ref.audioSource} title="تلاوة الشاهد - الشيخ الحصري" />
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="bg-brand-cream p-5 rounded-xl text-brand-sageGreen text-center border border-brand-lightGold font-medium">
                القاعدة عامة ولا توجد شواهد قرآنية محددة.
              </div>
            )}

            {/* Scholarly Sources */}
            {phrase.scholarlySources && phrase.scholarlySources.length > 0 && (
              <div className="bg-white p-5 rounded-xl border border-brand-cream shadow-sm mt-6">
                <h3 className="font-bold text-brand-darkGreen mb-3 border-b border-brand-cream pb-2">المصادر العلمية المرجعية</h3>
                <ul className="list-disc list-inside text-brand-sageGreen space-y-2 text-sm font-medium">
                  {phrase.scholarlySources.map((source, idx) => (
                    <li key={idx}>{source}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
