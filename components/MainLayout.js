import Header from '../components/Header'
import Footer from '../components/Footer'

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {children}
      </main>
      <Footer />
    </div>
  )
}