import Footer from "../components/Footer";
import Nav from "../components/nav/Nav";
import "./globals.css";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import { Analytics } from "@vercel/analytics/react";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Francisco Jesus Jalomo Chavez - Full stack web developer",
  description: "Portafolio tecnico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>
          Francisco Jesus Jalomo Chavez Portfolio - Full stack web developer
        </title>
        <meta charSet="utf-8" />
        <meta
          name="title"
          content="Francisco Jesus Jalomo Chavez - Full stack web developer"
        />
        <meta name="description" content="Portfolio" />

        <meta
          name="keywords"
          content="Francisco Jesus Jalomo Chavez, Francisco Jalomo, Francisco Jalomo Chavez, Francisco Jalomo Chávez, Francisco Jalomo C, Francisco Jalomo C., Francisco Ja, Jesus Jalomo, Jalomo Chavez, Chavez Jesus, Francisco, Jesus, Jalomo, Chavez, Portafolio, Desarrollador, web, Developer, Software, Engineer, Student, Estudiante, Github, Git, Javascript, Typescript, React, Tailwind, Next.js, Astro, Vite, Angular"
        />
        <meta name="author" content="Francisco Jesus Jalomo Chavez" />
        <meta name="robots" content="all" />
        <meta name="canonical" content="https://jesusjalomo.com" />
      </head>
      <body
        className={
          `${inter.className}before:contents before:-z-10 before:fixed  before:top-0 before:left-0 before:w-screen before:min-h-screen before:bg-gradient-to-tr before:from-background-700 before:via-background-800 before:to-background-900 before:bg-no-repeat  before:bg-cover min-h-screen w-full text-light text-xs md:text-md lg:text-lg relative grid max-w-[100%] max-w-screen `
        }
      >
        <Nav />
        <main className="py-16 lg:py-[5rem] 2xl:py-[9rem]">
          <ToastContainer
            position="bottom-center"
            autoClose={1500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover
            theme="dark"
          />
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
