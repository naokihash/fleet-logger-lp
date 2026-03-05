import { Star } from "lucide-react";
import type { Testimonial } from "@/types";

const testimonials: Testimonial[] = [
  {
    quote: "月末集計が丸2日→1時間になりました",
    company: "郡山市・タクシー会社",
    role: "代表取締役",
    age: "60代",
  },
  {
    quote: "高齢のドライバーでも3日で慣れました",
    company: "福島県・運送会社",
    role: "管理部長",
    age: "50代",
  },
  {
    quote: "補助金申請も一緒にやってもらえて助かりました",
    company: "郡山市・食品卸売",
    role: "総務課長",
    age: "40代",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-navy">
          導入した会社の声
        </h2>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.quote}
              className="relative bg-white rounded-xl p-6 shadow-sm"
            >
              <span className="absolute top-4 left-6 text-5xl font-bold text-navy/20 leading-none">
                &ldquo;
              </span>
              <div className="flex gap-0.5 mt-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="mt-3 text-gray-900 font-medium text-lg leading-relaxed">
                {t.quote}
              </p>
              <p className="mt-4 text-sm text-gray-500">
                {t.company}・{t.role}（{t.age}）
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
