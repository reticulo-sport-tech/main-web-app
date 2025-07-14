import Header from './Header'
import Footer from './Footer'

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