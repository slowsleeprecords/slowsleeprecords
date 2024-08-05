import globalcss from "./global.css"

export const metadata = {
  title: "Slow Sleep Records",
  description: "Record label based in Kingston, Jamaica",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
