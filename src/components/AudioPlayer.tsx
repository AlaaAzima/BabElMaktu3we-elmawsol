"use client";
import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, RotateCcw } from "lucide-react";

export default function AudioPlayer({ source, title = "الشيخ الحصري" }: { source?: string, title?: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (source) {
      audioRef.current = new Audio(source);
      audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
      audioRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
      audioRef.current.addEventListener('ended', handleEnded);
    }
    
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
        audioRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
        audioRef.current.removeEventListener('ended', handleEnded);
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [source]);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const dur = audioRef.current.duration;
      if (dur > 0) {
        setProgress((current / dur) * 100);
      }
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.error("Audio playback failed:", e));
    }
    setIsPlaying(!isPlaying);
  };

  const restart = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      setProgress(0);
      if (!isPlaying) {
        audioRef.current.play().catch(e => console.error("Audio playback failed:", e));
        setIsPlaying(true);
      }
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  if (!source) {
    return (
      <div className="bg-brand-ivory rounded-lg p-3 flex items-center gap-4 border border-brand-cream opacity-50">
        <div className="w-10 h-10 rounded-full bg-gray-300 text-white flex items-center justify-center flex-shrink-0">
          <Play size={20} className="fill-current ml-1" />
        </div>
        <div className="text-sm text-gray-500">الصوت غير متوفر</div>
      </div>
    );
  }

  return (
    <div className="bg-brand-ivory rounded-lg p-3 flex items-center gap-3 border border-brand-cream hover:border-brand-lightGold transition-colors">
      <button 
        onClick={togglePlay}
        className="w-10 h-10 rounded-full bg-brand-gold text-white flex items-center justify-center hover:bg-opacity-90 transition-all flex-shrink-0 shadow-sm"
        aria-label={isPlaying ? "إيقاف مؤقت" : "تشغيل"}
      >
        {isPlaying ? <Pause size={20} className="fill-current" /> : <Play size={20} className="fill-current ml-1" />}
      </button>

      <button 
        onClick={restart}
        className="w-8 h-8 rounded-full text-brand-sageGreen hover:bg-brand-cream flex items-center justify-center transition-all flex-shrink-0"
        aria-label="إعادة التشغيل"
        title="إعادة التشغيل"
      >
        <RotateCcw size={16} />
      </button>
      
      <div className="flex-grow flex flex-col gap-1">
        <div className="flex justify-between text-xs text-brand-sageGreen font-sans" dir="ltr">
          <span>{formatTime(audioRef.current?.currentTime || 0)}</span>
          <span>{formatTime(duration)}</span>
        </div>
        <div className="h-2 bg-brand-cream rounded-full w-full overflow-hidden">
          <div 
            className="h-full bg-brand-gold transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      
      <div className="text-brand-sageGreen flex items-center gap-1 text-sm flex-shrink-0 mr-2">
        <Volume2 size={16} />
        <span className="font-naskh">{title}</span>
      </div>
    </div>
  );
}
