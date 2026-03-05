export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-navy to-navy-light pt-24 pb-16 md:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              ドライバーの記録が、
              <br />
              会社を守ります。
            </h1>
            <p className="mt-6 text-lg text-white/90 leading-relaxed">
              時間外労働960時間規制の時代。
              <br className="hidden md:block" />
              正確な運行記録が、ドライバーと会社を守る証明になります。
              <br className="hidden md:block" />
              郡山の運送会社が選んだ、現場のための日報管理アプリ。
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-green px-8 py-3.5 text-base font-medium text-white hover:bg-green-light transition-colors"
              >
                無料で始める
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border-2 border-white px-8 py-3.5 text-base font-medium text-white hover:bg-white/10 transition-colors"
              >
                資料をダウンロード
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-sm aspect-[3/4] rounded-2xl bg-white/10 flex items-center justify-center">
              <span className="text-white/40 text-sm">アプリ画面イメージ</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
