import Head from "next/head";
import Nav from "@/Components/Nav";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <>
      <Head>
        <title>Will Jones | Not Found</title>
        <link rel="shortcut icon" href="/ws_icon.png" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Will Jones" />
        <meta property="og:description" content="This page does not exist!" />
        <meta name="description" content="This page does not exist!" />
        <meta property="og:image" content="/ws_icon.png" />
        <meta name="keywords" content="" />
      </Head>
      <main>
        <Nav />
        <section className="min-h-[50dvh] flex items-center justify-center margin__setter mt-[5rem] lg:mt-[3rem] xl:mt-[5rem] 2xl:mt-[7.5rem]">
          <div className="">
            <h1 className="p leading-[.6] lg:leading-[.8] text-[7rem] lg:text-[10rem] xl:text-[12rem] 2xl:text-[14rem]">
              4<span className="accent__col_text">0</span>4
            </h1>
            <p className="text-center text-lg mt-[2.5rem]">This page does not exist</p>
            <div className="flex items-center justify-center mt-[2.5rem]">
                <Link href={"/"}>
                <button className="secondary__cta_border text-xl py-2 px-4 rounded-2xl font-medium hvr">
                    Homepage
                </button>
                </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default NotFoundPage;
