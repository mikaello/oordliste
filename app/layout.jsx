import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import ThemeToggle from "./components/ThemeToggle";

export const metadata = {
  title: "Orienteringsordliste",
  description: "En liste med forklaringer av orienteringsuttrykk.",
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}) {
  return (
    <html lang="no" suppressHydrationWarning>
      <body>
        <Analytics />
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
