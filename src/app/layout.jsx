import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { AuthProvider } from "./context/AuthContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "TJP-X",
  description: "Generated by TJP",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="https://res.cloudinary.com/dombirgsd/image/upload/v1735057014/TJP_jfrb85.png" type="image/x-icon" />
        <link rel="apple-touch-icon" href="https://res.cloudinary.com/dombirgsd/image/upload/v1735057014/TJP_jfrb85.png" />
      </head>
      <AuthProvider>
        <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
      </AuthProvider>
    </html>
  );
}
