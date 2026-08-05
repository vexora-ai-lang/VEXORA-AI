import "./globals.css";

export const metadata = {
  title: "Vexora AI",
  description: "Create smarter. Create faster. Powered by AI.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
