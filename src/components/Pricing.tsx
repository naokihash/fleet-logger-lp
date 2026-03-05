import { Check } from "lucide-react";
import type { PricingPlan } from "@/types";

const plans: PricingPlan[] = [
  {
    name: "Free",
    price: "無料",
    description: "まず試したい方に",
    features: [
      "日報作成",
      "OCR撮影（走行距離の自動読取）",
      "CSVエクスポート",
      "1名まで",
    ],
    cta: "無料で始める",
  },
  {
    name: "Standard",
    price: "月額 800円 / ID",
    description: "中小規模の会社におすすめ",
    features: [
      "Freeの全機能",
      "労働時間アラート",
      "管理者ダッシュボード",
      "複数名対応",
    ],
    cta: "無料トライアルを始める",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "要見積もり",
    description: "大規模・特別要件の方に",
    features: [
      "Standardの全機能",
      "リアルタイム同期",
      "導入研修",
      "請求書発行",
      "専用サポート",
    ],
    cta: "お問い合わせ",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-navy">
          シンプルな料金体系
        </h2>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 flex flex-col ${
                plan.highlighted
                  ? "bg-navy text-white shadow-xl scale-105"
                  : "bg-white text-gray-900 shadow-sm"
              }`}
            >
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold">{plan.name}</h3>
                  {plan.highlighted && (
                    <span className="rounded-full bg-white/20 px-3 py-0.5 text-xs font-medium">
                      おすすめ
                    </span>
                  )}
                </div>
                <p
                  className={`mt-4 text-2xl font-bold ${
                    plan.highlighted ? "text-white" : "text-navy"
                  }`}
                >
                  {plan.price}
                </p>
                <p
                  className={`mt-1 text-sm ${
                    plan.highlighted ? "text-white/70" : "text-gray-500"
                  }`}
                >
                  {plan.description}
                </p>
              </div>
              <ul className="mt-6 space-y-3 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check
                      size={18}
                      className={`mt-0.5 shrink-0 ${
                        plan.highlighted ? "text-green-light" : "text-green"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        plan.highlighted ? "text-white/90" : "text-gray-600"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 block rounded-full py-3 text-center text-sm font-medium transition-colors ${
                  plan.highlighted
                    ? "bg-green text-white hover:bg-green-light"
                    : "bg-navy text-white hover:bg-navy-light"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-gray-500 text-sm">
          20名・Standardプランの場合：月額16,000円。
          IT導入補助金を活用すれば年間実質負担10万円以下。
        </p>
      </div>
    </section>
  );
}
