import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ToastContainer } from "react-toastify";
import QueryProvider from "./queryProvider";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import Preloader from "./components/preloader";


const poppins = Poppins({
  variable: "--poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "NextaFlow-Marketing",
  description:
    "NextaFlow is an all-in-one CRM and automation platform designed to help businesses grow ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Preloader duration={2000}>
          <QueryProvider>
            {children}
            <ToastContainer
              limit={1}
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={true}
              closeOnClick
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </QueryProvider>
        </Preloader>
      </body>
    </html>
  );
}
