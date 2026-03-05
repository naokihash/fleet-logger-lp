import { FileSpreadsheet, Clock, Smartphone } from "lucide-react";

const problems = [
  {
    icon: FileSpreadsheet,
    title: "月末の集計に丸2日かかっている",
    description:
      "紙の日報をExcelに転記して、計算して、確認して…。毎月同じ作業に時間を取られていませんか？",
  },
  {
    icon: Clock,
    title: "2024年問題で労基署が怖い",
    description:
      "労働時間の上限規制が始まりました。正確な記録がなければ、いつ指摘されてもおかしくありません。",
  },
  {
    icon: Smartphone,
    title: "高齢ドライバーが使えるか心配",
    description:
      "新しいアプリを入れても、現場が使いこなせなければ意味がない。操作の難しさが一番の不安です。",
  },
];

export default function Problem() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-navy">
          こんな悩みはありませんか？
        </h2>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="bg-white rounded-xl border-l-4 border-navy p-6 shadow-sm"
            >
              <problem.icon className="text-navy" size={32} />
              <h3 className="mt-4 text-lg font-bold text-gray-900">
                {problem.title}
              </h3>
              <p className="mt-2 text-gray-600 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
