import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/common/header/Header";
import HeaderContextProvider from "@/providers/HeaderContextProvider";
import Footer from "@/components/common/Footer";

const BrandonGrotesque = localFont({
  src: "../fonts/Brandon_Grotesque_bold.otf",
  variable: "--brandon_grotesque",
  weight: "900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${BrandonGrotesque.variable} antialiased`}>
        <HeaderContextProvider>
          <Header />
          {children}
          <Footer />
        </HeaderContextProvider>
      </body>
    </html>
  );
}
