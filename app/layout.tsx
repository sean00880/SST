
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Seek, Strive & Thrive - Licensed Professional Counselor | Anindita Dwivedi, LPC",
  description: "Professional counseling services in Virginia. Anindita Dwivedi, LPC provides compassionate therapy for anxiety, depression, trauma, and life transitions. EMDR, DBT, and mindfulness-based approaches available.",
  keywords: "therapy, counseling, LPC, Virginia, anxiety, depression, trauma, EMDR, DBT, mindfulness, Anindita Dwivedi",
  authors: [{ name: "Anindita Dwivedi, LPC" }],
  openGraph: {
    title: "Seek, Strive & Thrive - Licensed Professional Counselor",
    description: "Professional counseling services in Virginia. Compassionate therapy for anxiety, depression, trauma, and life transitions.",
    type: "website",
    locale: "en_US",
  },
  robots: "index, follow",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'growth' || theme === 'serene') {
                    document.documentElement.setAttribute('data-theme', theme);
                  } else {
                    document.documentElement.setAttribute('data-theme', 'growth');
                  }
                } catch (e) {
                  document.documentElement.setAttribute('data-theme', 'growth');
                }
              })();
            `,
          }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="growth"
          storageKey="theme"
          themes={['growth', 'serene']}
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 pt-20">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
