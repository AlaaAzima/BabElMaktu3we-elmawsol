import type { Metadata } from "next";
import { Noto_Naskh_Arabic, Amiri } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const notoNaskh = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-naskh",
});

const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-amiri",
});

export const metadata: Metadata = {
  title: "المقطوع والموصول والتاءات | الجزرية",
  description: "موقع تعليمي تفاعلي لدراسة المقطوع والموصول والتاءات في القرآن الكريم من منظومة المقدمة الجزرية",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={`${notoNaskh.variable} ${amiri.variable}`}>
      <body className="font-naskh antialiased min-h-screen flex flex-col selection:bg-brand-gold selection:text-white">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <footer className="bg-brand-darkGreen text-brand-ivory text-center py-8 mt-12 border-t-4 border-brand-gold">
          <div className="max-w-5xl mx-auto px-4 flex flex-col items-center">
            <p className="font-amiri text-xl mb-3 opacity-90">جميع الحقوق محفوظة © {new Date().getFullYear()}</p>
            <p className="text-brand-lightGold text-sm font-sans tracking-wide mb-2">
              Designed & Developed by
            </p>
            <a 
              href="https://www.linkedin.com/in/alaaazima" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-cream/10 hover:bg-brand-gold text-white px-4 py-2 rounded-full transition-colors duration-300 border border-brand-gold/30 hover:border-brand-gold"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              <span className="font-bold text-base tracking-wider">Alaa Azima</span>
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
