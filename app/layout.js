import Head from "next/head";
import "./globals.css";

import "bootstrap/dist/css/bootstrap.css";
import { AppContextProvider } from "./Utils/context/AppContext";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import LandingPage from "./LandingPage/page";
import Footer from "./components/Footer";

async function fetchRepo() {
  const req = await fetch(
    "https://dazzling-cat.netlify.app/notiondatabase.json",
    {
      next: {
        revalidate: 1000,
      },
    }
  );
  const data = await req.json();
  return {
    ...data,
  };
}

const data = await fetchRepo();

export const metadata = {
  title: data.site_info.site_name,
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <Head>
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />

        {/* Check if pageMetadata is available before rendering */}
      </Head>
      <AppContextProvider>
        <body className=''>
          <div className='container'>
            <Navbar data={data} />
            <Hero />
            <br /> <br /> <br /> <br />
            {children}
            <Footer />
          </div>
        </body>
      </AppContextProvider>
    </html>
  );
}
