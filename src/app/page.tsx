import Link from "next/link";
import { BookOpenText, FileText } from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-amiri font-bold text-brand-darkGreen mb-6 leading-relaxed">
          المقطوع والموصول والتاءات
        </h1>
        <p className="text-lg md:text-xl text-brand-sageGreen max-w-2xl mx-auto leading-loose">
          موقع تعليمي تفاعلي لدراسة المقطوع والموصول ومواضع التاءات في القرآن الكريم، 
          مبني على أبيات <span className="font-bold">منظومة المقدمة الجزرية</span> للإمام ابن الجزري رحمه الله.
        </p>
        <p className="text-md text-brand-brown mt-8 font-medium bg-brand-cream inline-block px-4 py-2 rounded-full shadow-sm border border-brand-lightGold">
          اضغط على أحد القسمين للبدء
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1 */}
        <Link href="/maqtu" className="group">
          <div className="bg-white border-2 border-brand-cream rounded-2xl p-8 h-full shadow-sm hover:shadow-xl hover:border-brand-gold transition-all duration-300 flex flex-col items-center text-center cursor-pointer relative overflow-hidden">
            <div className="absolute inset-0 bg-brand-cream opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <div className="w-20 h-20 bg-brand-ivory rounded-full flex items-center justify-center mb-6 border border-brand-lightGold group-hover:scale-110 transition-transform duration-300">
              <BookOpenText className="w-10 h-10 text-brand-gold" />
            </div>
            <h2 className="text-3xl font-amiri font-bold text-brand-darkGreen mb-4 group-hover:text-brand-gold transition-colors">
              المقطوع والموصول
            </h2>
            <p className="text-brand-sageGreen text-lg leading-relaxed">
              دراسة كلمات المقطوع والموصول في القرآن الكريم من خلال أبيات الجزرية وشواهدها.
            </p>
          </div>
        </Link>

        {/* Card 2 */}
        <Link href="/taat" className="group">
          <div className="bg-white border-2 border-brand-cream rounded-2xl p-8 h-full shadow-sm hover:shadow-xl hover:border-brand-gold transition-all duration-300 flex flex-col items-center text-center cursor-pointer relative overflow-hidden">
            <div className="absolute inset-0 bg-brand-cream opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <div className="w-20 h-20 bg-brand-ivory rounded-full flex items-center justify-center mb-6 border border-brand-lightGold group-hover:scale-110 transition-transform duration-300">
              <FileText className="w-10 h-10 text-brand-gold" />
            </div>
            <h2 className="text-3xl font-amiri font-bold text-brand-darkGreen mb-4 group-hover:text-brand-gold transition-colors">
              التاءات
            </h2>
            <p className="text-brand-sageGreen text-lg leading-relaxed">
              دراسة مواضع التاءات (المبسوطة والمربوطة) في القرآن الكريم كما وردت في المنظومة وشواهدها.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
