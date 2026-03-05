import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import SubsidyBanner from "@/components/SubsidyBanner";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <SubsidyBanner />
        <Features />
        <Pricing />
        <Testimonials />
        <Faq />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
