"use client";
import { useState } from "react";
import { maqtuData } from "@/data/maqtu";
import PoemVerse from "@/components/PoemVerse";
import QuranEvidencePanel from "@/components/QuranEvidencePanel";
import { ClickablePhrase } from "@/types";
import { BookOpen, Info, Youtube } from "lucide-react";

export default function MaqtuPage() {
  const [selectedPhrase, setSelectedPhrase] = useState<ClickablePhrase | null>(null);
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-cream border border-brand-lightGold mb-6 shadow-sm">
          <BookOpen className="w-10 h-10 text-brand-gold" />
        </div>
        <h1 className="text-4xl md:text-5xl font-amiri font-bold text-brand-darkGreen mb-6 leading-relaxed">
          {maqtuData.title}
        </h1>
        
        {/* Poem Audio Embed Toggle */}
        {!showVideo ? (
          <button 
            onClick={() => setShowVideo(true)}
            className="inline-flex items-center gap-3 bg-white border border-brand-gold text-brand-darkGreen px-6 py-3 rounded-full hover:bg-brand-cream transition-colors shadow-sm font-medium"
          >
            <Youtube size={20} className="text-red-600" />
            <span>استماع إلى المنظومة بصوت د. أيمن سويد</span>
          </button>
        ) : (
          <div className="w-full max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-lg border-4 border-brand-cream aspect-video relative">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/kxWzBARsS0k?start=462&autoplay=1" 
                title="متن الجزرية" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                className="absolute top-0 left-0"
              ></iframe>
          </div>
        )}
      </div>

      {/* Intro Explanation */}
      <div className="bg-white rounded-2xl shadow-sm border border-brand-cream p-8 mb-12">
        <div className="flex items-center gap-3 mb-4 text-brand-gold">
          <Info className="w-6 h-6" />
          <h2 className="text-2xl font-bold font-amiri text-brand-darkGreen">مقدمة</h2>
        </div>
        <p className="text-lg text-brand-sageGreen leading-relaxed font-naskh">
          {maqtuData.description}
        </p>
      </div>

      {/* Verses */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold font-amiri text-brand-darkGreen mb-6 border-r-4 border-brand-gold pr-4">
          أبيات المنظومة كاملة
        </h2>
        
        <div className="bg-brand-cream/30 p-2 sm:p-6 rounded-2xl space-y-4">
          {maqtuData.verses.map((verse, index) => (
            <div key={verse.id} className="relative">
              <div className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-brand-cream border border-brand-lightGold flex items-center justify-center text-brand-gold font-bold font-sans text-sm z-10 shadow-sm hidden md:flex">
                {index + 1}
              </div>
              <PoemVerse 
                verse={verse} 
                onPhraseClick={(phrase) => setSelectedPhrase(phrase)} 
              />
            </div>
          ))}
        </div>
      </div>

      {/* Evidence Panel (Modal) */}
      {selectedPhrase && (
        <QuranEvidencePanel 
          phrase={selectedPhrase} 
          onClose={() => setSelectedPhrase(null)} 
        />
      )}
    </div>
  );
}
