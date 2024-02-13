import Footer from "@/Components/Footer";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import localFont from "next/font/local";
import { useRouter } from 'next/router'; // Import useRouter hook

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

export default function App({ Component, pageProps }) {
  const router = useRouter(); // Use useRouter hook to access router object

  // Determine minusVar based on the current route
  let minusVar;
  switch (router.pathname) {
    case '/about':
      minusVar = '-700px';
      break;
    case '/':
      minusVar = '-2000px';
      break;
    case '/contact':
      minusVar = '-200px';
      break;
    default:
      minusVar = '-500px'; // Default value if needed
  }

  return (
      <div className={`global__font_setter ${f.className}`}>
          <AnimatePresence mode='wait'>
              <Component key={router.route} {...pageProps} />
              <Footer initialVar={0.65} minusVar={minusVar}/>
          </AnimatePresence>
      </div>
  )
}
