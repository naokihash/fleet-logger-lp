"use client";

import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/types";

const faqs: FaqItem[] = [
  {
    question: "高齢のドライバーでも使えますか？",
    answer:
      "はい。文字は大きく、操作は「写真を撮る→確認する→送信する」の3ステップのみです。実際に60代のドライバーが多い会社様にも多数ご導入いただいています。",
  },
  {
    question: "電波のない山間部でも使えますか？",
    answer:
      "使えます。電波がない状態でも通常通り日報を記録でき、電波が戻ったタイミングで自動的に会社のサーバーに送信されます。",
  },
  {
    question: "紙の日報からのデータ移行はできますか？",
    answer:
      "過去の紙日報をシステムに取り込む移行サービスは現在準備中です。新規分からのデジタル化でも十分な効果を実感いただけます。",
  },
  {
    question: "IT導入補助金は使えますか？",
    answer:
      "対応しています。申請書類の作成サポートも無料で承っております。まずはお問い合わせください。",
  },
  {
    question: "既存のタコグラフと併用できますか？",
    answer:
      "はい。Fleet Loggerはタコグラフの代替ではなく、日報管理・労働時間集計に特化したアプリです。",
  },
  {
    question: "料金に隠れたコストはありますか？",
    answer:
      "ありません。月額800円/ID以外の費用は発生しません。Enterprise プランのみ別途お見積もりとなります。",
  },
  {
    question: "解約はいつでもできますか？",
    answer:
      "はい。月単位でご利用いただけます。違約金等は一切ありません。",
  },
  {
    question: "データはどこに保存されますか？",
    answer:
      "国内のサーバーに保存されます。第三者への提供は一切行いません。",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-gray-50">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-navy">
          よくある質問
        </h2>
        <div className="mt-12 space-y-3">
          {faqs.map((faq) => (
            <Disclosure key={faq.question}>
              {({ open }) => (
                <div className="rounded-xl bg-white shadow-sm">
                  <DisclosureButton className="flex w-full items-center justify-between px-6 py-5 text-left">
                    <span className="font-medium text-gray-900">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`shrink-0 text-gray-400 transition-transform ${
                        open ? "rotate-180" : ""
                      }`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-6 pb-5 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </DisclosurePanel>
                </div>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  );
}
