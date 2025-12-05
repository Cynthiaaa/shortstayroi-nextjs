import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

export const metadata = {
  title: "Short Stay ROI",
  description: "All your short stay calculators",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
        <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Short Stay ROI Calculator | Estimate Rental Profit & Investment Returns</title>
        <meta name="description" content="Use our Short Stay ROI Calculator to instantly estimate revenue, expenses, net profit and return on investment for any short-termor vacation rental. Fast, accurate and free."/>
        <meta name="keywords" content="short stay roi calculator, short term rental roi, vacation rental calculator, rental investment calculator, rental yield calculator"/>
        <link rel="canonical" href="https://shortstayroi.com"/>

        {/* Open Graph (Social Sharing)  */}
        <meta property="og:title" content="Short-Stay ROI Calculator" />
        <meta property="og:description" content="Instantly calculate profitability, revenue, and return on investment for any short-stay rental." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://shortstayroi.com/" />
        <meta property="og:image" content="https://shortstayroi.com/og-image.jpg" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Short-Stay ROI Calculator" />
        <meta name="twitter:description" content="Estimate ROI, revenue, and net profit for short-stay rentals in seconds." />
        <meta name="twitter:image" content="https://shortstayroi.com/og-image.jpg" />
    
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Short-Stay ROI Calculator",
              "url": "https://yourdomain.com/",
              "description": "Free online calculator to estimate ROI, revenue, and profitability for short-stay rentals.",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "All",
              "creator": {
                "@type": "Organization",
                "name": "YourSiteName"
              }
            }),
          }}
        />

       {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-CVQ6C2Z736"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CVQ6C2Z736', { page_path: window.location.pathname });
            `,
          }}
        />
      </head>
      <body className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 min-h-screen">
          <Header />
          <main className="pt-20 min-h-[80vh]">{children}</main>
          <Footer />
          <CookieConsent />
        </body>
    </html>
  );
}
