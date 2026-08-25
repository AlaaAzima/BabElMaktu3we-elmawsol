"use client";
import { PoemVerseData, ClickablePhrase } from "@/types";

interface PoemVerseProps {
  verse: PoemVerseData;
  onPhraseClick: (phrase: ClickablePhrase) => void;
}

export default function PoemVerse({ verse, onPhraseClick }: PoemVerseProps) {
  
  const playClickSound = () => {
    try {
      // A soft UI click sound using data URI to avoid needing an external file
      const audio = new Audio("data:audio/mp3;base64,//NExAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//NExAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq");
      // Actually, a synthetic beep is more reliable
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.1);
    } catch (e) {
      console.log("AudioContext not supported", e);
    }
  };

  const handleClick = (phrase: ClickablePhrase) => {
    playClickSound();
    onPhraseClick(phrase);
  };

  const renderShatr = (shatr: string) => {
    let result: React.ReactNode[] = [shatr];

    if (verse.interactivePhrases.length > 0) {
      verse.interactivePhrases.forEach((phrase) => {
        const textsToMatch = Array.isArray(phrase.text) ? phrase.text : [phrase.text];
        
        textsToMatch.forEach((textPart) => {
          const newResult: React.ReactNode[] = [];
          
          result.forEach((part) => {
            if (typeof part === "string") {
              let currentIndex = 0;
              let matchIndex = part.indexOf(textPart, currentIndex);
              
              if (matchIndex === -1) {
                newResult.push(part);
                return;
              }

              while (matchIndex !== -1) {
                const before = part.substring(currentIndex, matchIndex);
                if (before) newResult.push(before);
                
                newResult.push(
                  <span 
                    key={`${phrase.id}-${matchIndex}`}
                    onClick={() => handleClick(phrase)}
                    className="relative inline-block cursor-pointer mx-0.5 text-brand-darkGreen border-b-2 border-dashed border-brand-gold bg-brand-cream/40 hover:bg-brand-sageGreen hover:text-white hover:border-transparent transition-all duration-300 rounded px-1 font-bold group"
                    title="اضغط لعرض الشاهد"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        handleClick(phrase);
                      }
                    }}
                  >
                    {textPart}
                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-2 py-1 bg-brand-darkGreen text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      اضغط لعرض الشاهد
                    </span>
                  </span>
                );
                
                currentIndex = matchIndex + textPart.length;
                matchIndex = part.indexOf(textPart, currentIndex);
              }
              
              const after = part.substring(currentIndex);
              if (after) newResult.push(after);
              
            } else {
              newResult.push(part);
            }
          });
          result = newResult;
        });
      });
    }

    return result;
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-brand-cream p-4 md:p-6 mb-4 hover:shadow-md transition-shadow">
      {/* Desktop: original side-by-side layout */}
      <div className="hidden md:flex items-center justify-between w-full font-amiri text-2xl md:text-3xl leading-loose">
        <div className="flex-1 text-center leading-loose">{renderShatr(verse.shatr1)}</div>
        <div className="mx-2 md:mx-6 text-brand-gold font-bold">۞</div>
        <div className="flex-1 text-center leading-loose">{renderShatr(verse.shatr2)}</div>
      </div>

      {/* Mobile: stacked layout */}
      <div className="flex md:hidden flex-col items-center gap-1 font-amiri text-lg leading-relaxed">
        <div className="text-center leading-relaxed w-full">{renderShatr(verse.shatr1)}</div>
        <div className="text-brand-gold text-sm">✦</div>
        <div className="text-center leading-relaxed w-full">{renderShatr(verse.shatr2)}</div>
      </div>
    </div>
  );
}
