import { BadgeCheck } from "lucide-react";

export default function SubsidyBanner() {
  return (
    <section className="bg-green-surface py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start md:items-center gap-4">
            <BadgeCheck className="text-green shrink-0" size={32} />
            <p className="text-gray-800 leading-relaxed">
              <span className="font-bold">IT導入補助金対応。</span>
              郡山市DX補助金（最大100万円・補助率2/3）対象。
              補助金を使えば、実質負担10万円以下で導入できます。
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 rounded-full bg-green px-6 py-2.5 text-sm font-medium text-white hover:bg-green-light transition-colors"
          >
            補助金について相談する
          </a>
        </div>
      </div>
    </section>
  );
}
