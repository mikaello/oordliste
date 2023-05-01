import '../styles/globals.css'

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
    <html lang="no">
      <body>{children}</body>
    </html>
  );
}
