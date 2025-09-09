import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'


export const metadata = {
  title: 'Hilary Grace Joias',
  description: 'Discover our exclusive collection of feminine elegance',
}


export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
