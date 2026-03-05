const navLinks = [
  { label: "機能", href: "#features" },
  { label: "料金", href: "#pricing" },
  { label: "よくある質問", href: "#faq" },
  { label: "お問い合わせ", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <p className="text-xl font-bold text-white">Fleet Logger</p>
            <p className="mt-2 text-sm text-white/60">
              現場のための運行記録アプリ
            </p>
          </div>
          <div>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-sm text-white/70 space-y-1">
            <p>〒963-XXXX 福島県郡山市○○</p>
            <p>TEL: 024-XXX-XXXX</p>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-center">
          <p className="text-xs text-white/40">
            &copy; 2026 Fleet Logger. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
