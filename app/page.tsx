import Header from '@/components/header'
import HeroSection from '@/components/hero-section'
import ProductsSection from '@/components/products-section'
import InnovationSection from '@/components/innovation-section'
import ContactSection from '@/components/contact-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ProductsSection />
        <InnovationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}