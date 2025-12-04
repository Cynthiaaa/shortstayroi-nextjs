import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Short Stay ROI",
  description: "All your short stay calculators",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
     <body className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 min-h-screen">
        <Header />
        <main className="pt-20 min-h-[80vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
