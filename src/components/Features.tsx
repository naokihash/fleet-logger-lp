import { Camera, WifiOff, AlertTriangle } from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "写真を撮るだけで自動入力",
    description:
      "オドメーターをカメラで撮影するだけで走行距離が自動入力されます。読み取れなかった場合は手入力に切り替えるボタンが常に表示されています。",
  },
  {
    icon: WifiOff,
    title: "電波がなくても止まらない",
    description:
      "山間部・地下駐車場でもアプリは止まりません。電波が戻ったら自動で会社のサーバーに送信されます。",
  },
  {
    icon: AlertTriangle,
    title: "36協定・2024年問題に自動対応",
    description:
      "月間労働時間が上限に近づくと管理者に自動でアラートが届きます。労基署に見せられる記録が、毎日自動で作られます。",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-navy">
          選ばれる3つの理由
        </h2>
        <div className="mt-16 space-y-20">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                i % 2 === 1 ? "md:direction-rtl" : ""
              }`}
            >
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <feature.icon className="text-green" size={40} />
                <h3 className="mt-4 text-xl md:text-2xl font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-4 text-gray-600 leading-relaxed text-lg">
                  {feature.description}
                </p>
              </div>
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <div className="aspect-video rounded-2xl bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">機能イメージ</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
