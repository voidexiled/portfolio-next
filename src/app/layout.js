import Footer from "../components/Footer";
import Nav from "../components/nav/Nav";
import "./globals.css";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Francisco Jesus Jalomo Chavez - Full stack web developer",
  description: "Portafolio tecnico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          "before:absolute before:top-0 before:left-0 before:w-screen before:h-screen before:bg-gradient-to-tr before:from-background-700 before:via-background-800 before:to-background-900 before:bg-no-repeat  before:bg-cover h-screen w-full text-light text-xs md:text-md lg:text-lg relative grid lg:px-8 max-w-[100%] overflow-x-hidden "
        }
      >
        <Nav></Nav>
        <main>{children}</main>

        <Footer></Footer>
      </body>
    </html>
  );
}
