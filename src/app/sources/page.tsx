import { Book, CheckCircle, ShieldCheck } from "lucide-react";

export default function SourcesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-amiri font-bold text-brand-darkGreen mb-4">
          المصادر والمراجع
        </h1>
        <p className="text-lg text-brand-sageGreen max-w-2xl mx-auto">
          تم الاعتماد في هذا الموقع على أمهات الكتب والمصادر الموثوقة في علم رسم المصحف والقراءات.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-brand-cream p-8 mb-8">
        <div className="flex items-center gap-3 mb-6 text-brand-gold">
          <Book className="w-6 h-6" />
          <h2 className="text-2xl font-bold font-amiri text-brand-darkGreen">الكتب والمراجع العلمية</h2>
        </div>
        
        <ul className="space-y-4 text-brand-sageGreen text-lg list-none">
          <li className="flex items-start gap-3">
            <span className="text-brand-gold mt-1">•</span>
            <div>
              <strong className="text-brand-darkGreen block">المقدمة الجزرية</strong>
              <span className="text-sm">للإمام محمد بن محمد بن محمد بن علي بن يوسف ابن الجزري (ت 833 هـ).</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-brand-gold mt-1">•</span>
            <div>
              <strong className="text-brand-darkGreen block">المقنع في رسم مصاحف الأمصار</strong>
              <span className="text-sm">للإمام أبي عمرو الداني (ت 444 هـ).</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-brand-gold mt-1">•</span>
            <div>
              <strong className="text-brand-darkGreen block">النشر في القراءات العشر</strong>
              <span className="text-sm">للإمام ابن الجزري (ت 833 هـ).</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-brand-gold mt-1">•</span>
            <div>
              <strong className="text-brand-darkGreen block">مصحف المدينة المنورة</strong>
              <span className="text-sm">مجمع الملك فهد لطباعة المصحف الشريف (رواية حفص عن عاصم بالرسم العثماني المعتمد).</span>
            </div>
          </li>
        </ul>
      </div>

      <div className="bg-brand-cream rounded-2xl p-8">
        <div className="flex items-center gap-3 mb-6 text-brand-darkGreen">
          <ShieldCheck className="w-6 h-6" />
          <h2 className="text-2xl font-bold font-amiri text-brand-darkGreen">منهجية التحقق (Verification)</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            "التحقق من صحة النص القرآني",
            "مطابقة التشكيل والرسم العثماني",
            "التأكد من أرقام الآيات وأسماء السور",
            "مراجعة أبيات المنظومة كاملة",
            "ربط الشاهد القرآني الصحيح بموضع المنظومة",
            "توثيق المصدر العلمي لكل مسألة"
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-brand-lightGold">
              <CheckCircle className="w-5 h-5 text-brand-gold flex-shrink-0" />
              <span className="text-brand-darkGreen font-medium">{item}</span>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-brand-sageGreen text-center">
          نسأل الله أن يجعل هذا العمل خالصاً لوجهه الكريم وأن ينفع به طلاب العلم.
        </p>
      </div>
    </div>
  );
}
