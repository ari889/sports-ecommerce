import localFont from "next/font/local";
import "./globals.css";
import HeaderContextProvider from "@/providers/HeaderContextProvider";
import Footer from "@/components/common/Footer";
import ProgressbarProvider from "@/providers/ProgressbarProvider";

const BrandonGrotesque = localFont({
  src: "../fonts/Brandon_Grotesque_bold.otf",
  variable: "--brandon_grotesque",
  weight: "900",
});

export const metadata = {
  title: "Drais Bicycle",
  description: "Drais Bicycle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${BrandonGrotesque.variable} antialiased`}>
        <HeaderContextProvider>
          <ProgressbarProvider>
            {children}
            <Footer />
          </ProgressbarProvider>
        </HeaderContextProvider>
      </body>
    </html>
  );
}
