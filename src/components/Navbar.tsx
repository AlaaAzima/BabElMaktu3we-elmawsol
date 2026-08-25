"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, BookOpen } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-brand-darkGreen text-brand-ivory shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <BookOpen className="h-8 w-8 text-brand-gold" />
              <span className="font-amiri text-2xl font-bold tracking-wide">الجزرية</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            <Link href="/" className="hover:text-brand-gold transition-colors text-lg">الرئيسية</Link>
            <Link href="/maqtu" className="hover:text-brand-gold transition-colors text-lg">المقطوع والموصول</Link>
            <Link href="/taat" className="hover:text-brand-gold transition-colors text-lg">التاءات</Link>
            <Link href="/sources" className="hover:text-brand-gold transition-colors text-lg">المصادر والمراجع</Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-ivory hover:text-brand-gold focus:outline-none"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-darkGreen border-t border-brand-sageGreen pb-4">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium hover:bg-brand-sageGreen hover:text-brand-gold rounded-md">الرئيسية</Link>
            <Link href="/maqtu" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium hover:bg-brand-sageGreen hover:text-brand-gold rounded-md">المقطوع والموصول</Link>
            <Link href="/taat" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium hover:bg-brand-sageGreen hover:text-brand-gold rounded-md">التاءات</Link>
            <Link href="/sources" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium hover:bg-brand-sageGreen hover:text-brand-gold rounded-md">المصادر والمراجع</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
