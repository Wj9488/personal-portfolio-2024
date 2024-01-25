import Footer from "@/Components/Footer";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import localFont from "next/font/local"

const f = localFont({ 
  src: [
    {
      path: "./Fonts/NeueMontreal-Medium.otf",
      weight: "500"
    },
    {
      path: "./Fonts/NeueMontreal-Book.otf",
      weight: "400"
    },
    {
      path: "./Fonts/NeueMontreal-Thin.otf",
      weight: "300"
    },
  ]
})

export default function App({ Component, pageProps, router }) {
  return (
      <div className={`main global__font_setter scroll-smooth ${f.className}`}>
          <AnimatePresence mode='wait'>
              <Component key={router.route} {...pageProps} />
              <Footer />
          </AnimatePresence>
      </div>
  )
}