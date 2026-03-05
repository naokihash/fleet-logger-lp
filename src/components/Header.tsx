"use client";

import { useState, useEffect } from "react";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Menu, X } from "lucide-react";
import type { NavLink } from "@/types";

const navLinks: NavLink[] = [
  { label: "機能", href: "#features" },
  { label: "料金", href: "#pricing" },
  { label: "よくある質問", href: "#faq" },
  { label: "お問い合わせ", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Disclosure as="nav">
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#" className="text-xl font-bold text-navy">
              Fleet Logger
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex md:items-center md:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-700 hover:text-navy transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="rounded-full bg-green px-5 py-2 text-sm font-medium text-white hover:bg-green-light transition-colors"
              >
                無料で始める
              </a>
            </div>

            {/* Mobile menu button */}
            <DisclosureButton className="md:hidden rounded-md p-2 text-gray-700 hover:bg-gray-100">
              {({ open }) => (open ? <X size={24} /> : <Menu size={24} />)}
            </DisclosureButton>
          </div>
        </div>

        <DisclosurePanel className="md:hidden bg-white border-t">
          <div className="space-y-1 px-4 pb-4 pt-2">
            {navLinks.map((link) => (
              <DisclosureButton
                key={link.href}
                as="a"
                href={link.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
              >
                {link.label}
              </DisclosureButton>
            ))}
            <DisclosureButton
              as="a"
              href="#contact"
              className="block rounded-full bg-green px-5 py-2 text-center text-base font-medium text-white mt-2"
            >
              無料で始める
            </DisclosureButton>
          </div>
        </DisclosurePanel>
      </div>
    </Disclosure>
  );
}
