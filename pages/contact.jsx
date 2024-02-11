import PageTransition from "@/Components/Utils/PageTransition";
import Head from "next/head";
import ContactPage from "@/Components/ContactPage";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Will Jones | Contact</title>
        <link rel="shortcut icon" href="/ws_icon.png" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Will Jones | Developer Portfolio" />
        <meta
          property="og:description"
          content="Get the website your small business deserves. Helping professionals and business owners 
            get a modern, responsive and creative website."
        />
        <meta
          name="description"
          content="Get the website your small business deserves. Helping professionals and business owners 
            get a modern, responsive and creative website."
        />
        <meta property="og:image" content="/w__about_p.png" />
        <meta name="keywords" content="" />
      </Head>

      <PageTransition>
        <ContactPage />
      </PageTransition>
    </>
  );
};

export default Contact;
