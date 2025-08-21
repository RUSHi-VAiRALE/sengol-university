// app/layout.js
import { Inter } from "next/font/google";
import "./globals.css";
import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";


const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "Sengol International University | Premier Educational Institute in India",
  description:
    "Sengol International University is committed to delivering excellence in higher education with a focus on innovation, research, and student success.",
  keywords:
    "Sengol International University, Best College in India, Private University, Higher Education, UG PG Courses, MP College, College Admission, Degree Programs",
  authors: [{ name: "Sengol International University" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} min-h-screen`}>
        <header className="header header__sticky v__2">
          {/* <TopHeader /> */}
          {/* <Navbar /> */}
        </header>
        <main>{children}</main>
        <footer className="rts-footer rts-footer-padding v_2">
          {/* <Footer />
          <ScrollToTop /> */}
        </footer>
      </body>
    </html>
  );
}
