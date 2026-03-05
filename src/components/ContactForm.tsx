"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const required = ["company", "name", "phone", "email"];
    const newErrors: Record<string, boolean> = {};
    let hasError = false;

    for (const field of required) {
      if (!formData.get(field)?.toString().trim()) {
        newErrors[field] = true;
        hasError = true;
      }
    }

    setErrors(newErrors);
    if (hasError) return;

    const data = Object.fromEntries(formData.entries());
    console.log("Form submitted:", data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="contact" className="py-16 md:py-24">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <div className="rounded-2xl bg-green-surface p-12">
            <h2 className="text-2xl font-bold text-navy">
              ありがとうございました
            </h2>
            <p className="mt-4 text-gray-600">
              1営業日以内にご連絡します。
            </p>
          </div>
        </div>
      </section>
    );
  }

  const inputClass = (field: string) =>
    `w-full rounded-lg border px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green ${
      errors[field] ? "border-warning" : "border-gray-300"
    }`;

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-navy">
          まずはお気軽にご相談ください
        </h2>
        <p className="mt-4 text-center text-gray-500">
          補助金のご相談・無料デモのご依頼もこちらから。
          <br />
          平日9〜18時、お電話でも承ります。
        </p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              会社名 <span className="text-warning">*</span>
            </label>
            <input
              name="company"
              type="text"
              className={inputClass("company")}
              placeholder="例：株式会社○○運送"
            />
            {errors.company && (
              <p className="mt-1 text-sm text-warning">会社名を入力してください</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              お名前 <span className="text-warning">*</span>
            </label>
            <input
              name="name"
              type="text"
              className={inputClass("name")}
              placeholder="例：山田太郎"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-warning">お名前を入力してください</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              電話番号 <span className="text-warning">*</span>
            </label>
            <input
              name="phone"
              type="tel"
              className={inputClass("phone")}
              placeholder="例：024-XXX-XXXX"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-warning">電話番号を入力してください</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              メールアドレス <span className="text-warning">*</span>
            </label>
            <input
              name="email"
              type="email"
              className={inputClass("email")}
              placeholder="例：info@example.co.jp"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-warning">
                メールアドレスを入力してください
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              車両台数
            </label>
            <select
              name="vehicleCount"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green"
            >
              <option value="">選択してください</option>
              <option value="1-4">1〜4台</option>
              <option value="5-9">5〜9台</option>
              <option value="10-19">10〜19台</option>
              <option value="20+">20台以上</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              お問い合わせ種別
            </label>
            <select
              name="inquiryType"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green"
            >
              <option value="">選択してください</option>
              <option value="pricing">料金・補助金の相談</option>
              <option value="demo">無料デモの依頼</option>
              <option value="consultation">導入の相談</option>
              <option value="other">その他</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              メッセージ（任意）
            </label>
            <textarea
              name="message"
              rows={4}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green"
              placeholder="ご質問やご要望があればお書きください"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-green py-3.5 text-base font-medium text-white hover:bg-green-light transition-colors"
            style={{ height: 56 }}
          >
            送信する
          </button>
        </form>
      </div>
    </section>
  );
}
